import React, { useState } from "react";
import { useEffect } from "react";
function Statses ( ) {

    const [strengthbottom, setStrengthBottom] = useState('');
    const [agilitybottom, setAgilityBottom] = useState('');
    const [intellectbottom, setIntellectBottom] = useState('');
    const [defensebottom, setDefenseBottom] = useState('');
    const [athleticsbottom, setAthleticsBottom] = useState('');
    const [rhetoricbottom, setRhetoricBottom] = useState('');

    useEffect(() => {
        const storedStats = localStorage.getItem("stats");
        if (storedStats) {
        const parsedStats = JSON.parse(storedStats);
        setStrengthBottom(parsedStats.strengthbottom);
        setAgilityBottom(parsedStats.agilitybottom);
        setIntellectBottom(parsedStats.intellectbottom);
        setDefenseBottom(parsedStats.defensebottom);
        setAthleticsBottom(parsedStats.athleticsbottom);
        setRhetoricBottom(parsedStats.rhetoricbottom);
        }
    }, []);

    const handleBlur = (e, setStatek) => {
        const { name, value } = e.target;
        setStatek(value);
        localStorage.setItem('stats', JSON.stringify({
            strengthbottom,
            agilitybottom,
            intellectbottom,
            defensebottom,
            athleticsbottom,
            rhetoricbottom,
        }));
    };


    return (
        <div className="stats">
                    <div className="stats__wrapper">
                        <span>СИЛА</span>
                        <input className="stats__input" type="text" placeholder="0" value={strengthbottom} onChange={(e) => setStrengthBottom(e.target.value)} onBlur={(e) => handleBlur(e, setStrengthBottom)}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>ЛОВКОСТЬ</span>
                        <input className="stats__input" type="text"   placeholder="0" value={agilitybottom} onChange={(e) => setAgilityBottom(e.target.value)} onBlur={(e) => handleBlur(e, setAgilityBottom)} ></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>ИНТЕЛЛЕКТ</span>
                        <input className="stats__input" type="text"    placeholder="0" value={intellectbottom} onChange={(e) => setIntellectBottom(e.target.value)} onBlur={(e) => handleBlur(e, setIntellectBottom)}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>ЗАЩИТА</span>
                        <input className="stats__input" type="text"    placeholder="0" value={defensebottom}  onChange={(e) => setDefenseBottom(e.target.value)} onBlur={(e) => handleBlur(e, setDefenseBottom)}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>АТЛЕТИКА</span>
                        <input className="stats__input" type="text"  placeholder="0" value={athleticsbottom}  onChange={(e) => setAthleticsBottom(e.target.value)} onBlur={(e) => handleBlur(e, setAthleticsBottom)}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>РИТОРИКА</span>
                        <input className="stats__input" type="text"   placeholder="0" value={rhetoricbottom} onChange={(e) => setRhetoricBottom(e.target.value)} onBlur={(e) => handleBlur(e, setRhetoricBottom)}></input>
                    </div>
                    
                </div>
    )
}

export default Statses