import React from "react";

function Cloak (props) {
    return (
        <div className="cloak" onClick={props.onClick}>
            <img src={props.selectedItemImage} alt="" />
        </div>
    )
}

export default Cloak