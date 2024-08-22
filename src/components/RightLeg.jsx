import React from "react";

function RightLeg (props) {
    return (
        <div className="right__leg" onClick={props.onClick}>
            <img src={props.selectedItemImage} alt="" />
                        {/* <div className="close"></div> */}
        </div>
    )
    
}

export default RightLeg