import React from "react";

function LeftArm (props) {
    return (
        <div className="left__arm" onClick={props.onClick}>
            <img src={props.selectedItemImage} alt="" />
        {/* <div className="close"></div> */}
    </div>
    )
}

export default LeftArm