import React from "react";

function LeftLeg (props) {
    return (
        <div className="left__leg" onClick={props.onClick}>
            <img src={props.selectedItemImage} alt="" />
                    {/* <div className="close"></div> */}
        </div>
    )
}

export default LeftLeg