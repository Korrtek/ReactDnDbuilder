import React, { useState } from "react";

function Statses ({stats}) {


    return (
        <div className="stats">
                    <div className="stats__wrapper">
                        <span>СИЛА</span>
                        <input className="stats__input" type="text" defaultValue={0} ></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>ЛОВКОСТЬ</span>
                        <input className="stats__input" type="text" defaultValue={0}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>ИНТЕЛЛЕКТ</span>
                        <input className="stats__input" type="text" defaultValue={0}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>ЗАЩИТА</span>
                        <input className="stats__input" type="text" defaultValue={0}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>АТЛЕТИКА</span>
                        <input className="stats__input" type="text" defaultValue={0}></input>
                    </div>
                    <div className="stats__wrapper">
                        <span>РИТОРИКА</span>
                        <input className="stats__input" type="text" defaultValue={0}></input>
                    </div>
                    
                </div>
    )
}

export default Statses