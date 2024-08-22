import React, {useState} from "react";

function HPblock () {
    const [healthPoints, setHealthPoints] = useState(3);

    const handleMinusClick = () => {
            setHealthPoints(Math.max(healthPoints - 1, 0));
    };

    const handlePlusClick = () => {
            setHealthPoints(Math.min(healthPoints + 1, 3));
    };

    return (
        <div className="hp__block">
                    <div className="hp__title">
                        Здоровье 
                    </div>
                    <div className="hp__bar">
                    {healthPoints === 0 ? (
            <span className="hp-zero">Вы мертвы</span>
        ) : (
            Array(healthPoints).fill(0).map((_, index) => (
            <div key={index} className="testHP">
                <img className="HPBARHERTS" src="public/images//HP1-final.ico" alt="misshp" />
            </div>
            ))
        )}
                    </div>
                    <div className="HPtogglers">
                        <div className="HPtogglersbtn__minus" onClick={handleMinusClick}> - </div>
                        <div className="HPtogglersbtn__plus" onClick={handlePlusClick}> + </div>
                    </div>
        </div>
    )
}

export default HPblock