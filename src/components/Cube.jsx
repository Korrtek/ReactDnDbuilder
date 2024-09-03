import React, { useState } from "react";
import { useEffect } from "react";
import cubesila from "/src/assets/sila.webp"
import cubedex from "/src/assets/lovkost.webp"
import cubeint from "/src/assets/intellect.webp"
import cubedef from "/src/assets/zashita.webp"
import cubeatlet from "/src/assets/atlet.webp"
import cuberito from "/src/assets/newrit.webp"


function Cube () {
    
    const [CubeResult, SetCubeResult] = useState(0)
    const [StoryCube, SetStoryCube] = useState(['еще не кидал'])

    function Rolldice () {
        SetCubeResult( Math.floor((Math.random() * 20) + 1))

    }
    
    function Story (CubeResult) {
        SetStoryCube(CubeResult)
    }

    function BtnHandle () {
        Rolldice();
        Story(CubeResult);
    }

    // Сейв инпутов в лс, два часа срал себе в штаны, чтобы вернуться в первому дебильному варианту UwU

    
    const [strengthcube, setStrengthCube] = useState('');
    const [strengthtwocube, setStrengthTwoCube] = useState('');
    const [agilitycube, setAgilityCube] = useState('');
    const [agilitytwocube, setAgilityTwoCube] = useState('');
    const [intellectcube, setIntellectCube] = useState('');
    const [intellecttwocube, setIntellectTwoCube] = useState('');
    const [defencecube, setDefenceCube] = useState('');
    const [defencetwocube, setDefenceTwoCube] = useState('');
    const [athleticcube, setAthleticCube] = useState('');
    const [athletictwocube, setAthleticTwoCube] = useState('');
    const [rhetoriccube, setRhetoricCube] = useState('');
    const [rhetorictwocube, setRhetoricTwoCube] = useState('');

    useEffect(() => {
        const storedDataCube = localStorage.getItem('formDataCube');
        if (storedDataCube) {
            const data = JSON.parse(storedDataCube);
            setStrengthCube(data.strengthcube || '');
            setStrengthTwoCube(data.strengthtwocube || '');
            setAgilityCube(data.agilitycube || '');
            setAgilityTwoCube(data.agilitytwocube || '');
            setIntellectCube(data.intellectcube || '');
            setIntellectTwoCube(data.intellecttwocube || '');
            setDefenceCube(data.defencecube || '');
            setDefenceTwoCube(data.defencetwocube || '');
            setAthleticCube(data.athleticcube || '');
            setAthleticTwoCube(data.athletictwocube || '');
            setRhetoricCube(data.rhetoriccube || '');
            setRhetoricTwoCube(data.rhetorictwocube || '');

        }
    }, []);
    
    const handleBlurCube = (e, setCube) => {
        const { name, value } = e.target;
        setCube(value);
        localStorage.setItem('formDataCube', JSON.stringify({
            strengthcube,
            strengthtwocube,
            agilitycube,
            agilitytwocube,
            intellectcube,
            intellecttwocube,
            defencecube,
            defencetwocube,
            athleticcube,
            athletictwocube,
            rhetoriccube,
            rhetorictwocube,
        }));
        };


    return (
        <div className="Cube__wrapper">
        <div className="Lvling">
            <ul className="Lvling__wrapper">
                <li>
                    <div className="d-flex">
                    <span>Сила</span>
                    <span className="test99">Уровень</span>
                    <img className="lvl__img" src={cubesila} alt="sila" />
                    </div>
                    <div className="Cube__input">
                        <input type="text" placeholder="0" value={strengthcube} onChange={(e) => setStrengthCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setStrengthCube)} />
                        <input type="text" placeholder="0" value={strengthtwocube} onChange={(e) => setStrengthTwoCube(e.target.value)}  onBlur={(e) => handleBlurCube(e, setStrengthTwoCube)} />
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <span>Ловкость</span>
                    <img className="lvl__img" src={cubedex} alt="lovkost" />
                    </div>
                    <div className="Cube__input">
                        <input type="text" placeholder="0" value={agilitycube} onChange={(e) => setAgilityCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setAgilityCube)} />
                        <input type="text" placeholder="0" value={agilitytwocube} onChange={(e) => setAgilityTwoCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setAgilityTwoCube)}  />
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <span>Интеллект</span>
                    <img className="lvl__img" src={cubeint} alt="int" />
                    </div>
                    <div className="Cube__input">
                        <input type="text" placeholder="0" value={intellectcube} onChange={(e) => setIntellectCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setIntellectCube)}/>
                        <input type="text" placeholder="0" value={intellecttwocube} onChange={(e) => setIntellectTwoCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setIntellectTwoCube)} />
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <span>Защита</span>
                    <img className="lvl__img" src={cubedef} alt="zashita" />
                    </div>
                    <div className="Cube__input">
                        <input type="text" placeholder="0" value={defencecube} onChange={(e) => setDefenceCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setDefenceCube)}/>
                        <input type="text" placeholder="0" value={defencetwocube} onChange={(e) => setDefenceTwoCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setDefenceTwoCube)} />
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <span> Атлетика</span>
                    <img className="lvl__img" src={cubeatlet} alt="atlet" />
                    </div>
                    <div className="Cube__input">
                        <input type="text" placeholder="0" value={athleticcube} onChange={(e) => setAthleticCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setAthleticCube)}/>
                        <input type="text" placeholder="0" value={athletictwocube} onChange={(e) => setAthleticTwoCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setAthleticTwoCube)} />
                    </div>
                </li>
                <li>
                        <div className="d-flex">
                        <span>Риторика</span>
                        <img className="lvl__img" src={cuberito} alt="rit" />
                        </div>
                        <div className="Cube__input">
                            <input type="text" placeholder="0" value={rhetoriccube} onChange={(e) => setRhetoricCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setRhetoricCube)} />
                            <input type="text" placeholder="0" value={rhetorictwocube} onChange={(e) => setRhetoricTwoCube(e.target.value)} onBlur={(e) => handleBlurCube(e, setRhetoricTwoCube)}/>
                        </div>
                </li>
            </ul>
        </div>
        <div className="cube">
        <span className="question-mark">?</span>
            <div className="cube__img" alt="cube" >
            {CubeResult}
            </div>
            <div className="cube__btn" onClick={BtnHandle}>
                Кинуть кубик
            </div>
            <div className="cube__stoy">
                Прошлый результат:  {StoryCube}
            </div>
        </div>
        </div>
    )
}

export default Cube 