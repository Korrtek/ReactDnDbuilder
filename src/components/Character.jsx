import { useEffect } from "react";
import React, {useState} from "react"



function Character () {


    // сейв интупов в ls
    const [namechar, setNameChar] = useState("");
    const [age, setAge] = useState("");
    const [race, setRace] = useState("");
    const [osoben, setOsoben] = useState("");
    const [classosoben, setClassOsoben] = useState("")
    // загрузка изображения
    const [image, setImage] = useState(null);



    // Сейв в лс
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'));
        const storedClass = localStorage.getItem("selectedClass");
        const storedImage = localStorage.getItem('characterImage');
        if (storedData) {
        setNameChar(storedData.namechar);
        setAge(storedData.age);
        setRace(storedData.race);
        setOsoben(storedData.osoben);
        setClassOsoben(storedData.classosoben)
        } 
        if (storedClass) {
            setSelectedClass(storedClass);
        } if (storedImage) {
        setImage(storedImage);
        }
    }, []);
    
    const handleBlur = (e, setState) => {
        const { name, value } = e.target;
        setState(value);
        localStorage.setItem('formData', JSON.stringify({
            namechar,
            age,
            race,
            osoben,
            classosoben,
        }));
    };


    // загрузка изображения
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            setImage(ImageData);
            localStorage.setItem('characterImage', imageData);
        };
        reader.readAsDataURL(file);
    };


    const Classes = ['Маг', "Воин", 'Мародер','Следопыт','Жрец','Ассасин','Берсерк','Инквизитор','Бард','Охотник на ведьм','Призыватель клинка']

    const [ renderClasses, setRenderClasses] = useState( );
    const [selectedClass, setSelectedClass] = useState()

    const  toggleClasses = () => {
        setRenderClasses(!renderClasses)
    };

    const handleClassesClick = (char) => {
    setSelectedClass(char);
    setRenderClasses(false);
    localStorage.setItem("selectedClass", char);
    }


    return (
        <div className="character__inner">
            <div className="character__photo">
            <div className="photo" onClick={() => document.getElementById('CharacterImg').click()}>
                <input id="CharacterImg" className="CharacterImg" type="file" onChange={handleImageChange}  />
                {image ? null : <span>Фото персонажа</span>}
                {image && <img className="Character__img__sended" src={image} alt="Загруженное изображение" />}
            </div>
            </div>
            <div className="character__other">
                <div className="character__name">
                    <span>Имя</span>
                    <input className="character__name__inp" type="text" value={namechar} onChange={(e) => setNameChar(e.target.value)} onBlur={(e) => handleBlur(e, setNameChar)} />
                </div>
                <div className="character__age">
                    <span>Возраст</span>
                    <input className="character__age__inp" type="text" value={age} onChange={(e) => setAge(e.target.value)} onBlur={(e) => handleBlur(e, setAge)}/>
                </div>
                <div className="character__race">
                    <span>Раса</span>
                    <input  className="character__race__inp" type="text" value={race} onChange={(e) => setRace(e.target.value)} onBlur={(e) => handleBlur(e, setRace)} />
                </div>
                <div className="character__class">
                    <span>Класс</span>
                    <div className="character__class__selector" onClick={toggleClasses}> {selectedClass}
                    <img src="/images/arrow__buttom.svg" alt="arrow"  className="classes__arrow" />
                    </div>
                    <div className="testList"> 
                    {renderClasses && Classes.map((char) => 
                        (  <div className="charModal" onClick={() => handleClassesClick(char)}>  {char}   </div> ))}

                    </div>
                    
                </div>
                <div className="character__osoben">
                    <span>Особенность персонажа</span>
                    <textarea  className="character__osoben__inp" type="text" value={osoben} onChange={(e) => setOsoben(e.target.value)} onBlur={(e) => handleBlur(e, setOsoben)}  />
                    <span>Особенность класса</span>
                    <textarea  className="class__osoben__inp" type="text" 
                    value={
                        selectedClass === 'Маг' ? 'Придумывает себе одно заклинание,никакой имбы в самом начале.Можно изучать новые заклинания по ходу игры'
                        : selectedClass === 'Воин' ? 'Воин может 1 раз может избежать смертельного удара, для обновления способности необходимо поспать '
                        : selectedClass === 'Мародер' ? 'При обыске или разделке тел побежденных врагов кидает кубик с превосходством'
                        : selectedClass === 'Следопыт' ? 'Может 1 раз за бой выпустить 2 стрелы в одного врага'
                        : selectedClass === 'Жрец' ? 'Может пожертвовать 2 очка характеристики и воскресить союзника при любых условиях. Может пожертвовать 1 очко характеристики и вернуть утраченные конечности. Может во время боя 3 раза помолится Хроносу, бросок на риторику, если неудачный, ничего не происходит, если удачный, то зависит от запроса игрока (в рамках разумного) '
                        : selectedClass === 'Ассасин' ? 'Если враг вас не видит, вы убиваете противника с одного удара, главное, чтобы бросок считался удачным. Если игрок уже во время боя, ему необходимо кинуть кубики на ловкость, чтобы спрятаться (разумеется он не должен быть в радиусе атаки врага) '
                        : selectedClass === 'Берсерк' ? 'Один раз до долгого отдыха может использовать мульти-атаку без штрафа'
                        : selectedClass === 'Инквизитор' ? 'Игрок во время атаки, может не делать защитное действие, а выбрать снова атаку, но после он получит удар. Как и жрец придумывает себе одно заклинание в начале игры, больше заклинаний изучить не может.'
                        : selectedClass === 'Бард' ? 'Обязан придумать название песни и пару строчек. При использовании песен в бою игрок обязан пропеть песню самостоятельно и только после этого кинуть кубик'
                        : selectedClass === 'Охотник на ведьм' ? 'Зона антимагии-может 2 раза до долгого отдыха на 1 ход запретить использовать магию всем в бою'
                        : selectedClass === 'Призыватель клинка' ? 'Может призвать любое оружие или щит (не оба сразу) столько раз, сколько ячеек заклинаний, оружие существует до поломки или призыва другого оружия. Призванное оружие не дает бонусов, но является «магической атакой» и имеет минус 3 к атаке. Подробнее в правилах:3 '
                        : ''
                        }
                    onChange={(e) => setClassOsoben(e.target.value)} onBlur={(e) => handleBlur(e, setClassOsoben)}  />
                </div>

            </div>
        </div>
    )
}

export default Character