import React from "react";

function RightArm (props) {
    return (
        <div className="right__arm" onClick={props.onClick}>
            <img src={props.selectedItemImage} alt="" />
                        {/* <div className="close"></div> */}
        </div>
    )
}

export default RightArm