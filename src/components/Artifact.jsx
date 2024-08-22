import React from "react";

function Artifact (props) {
    return (
        <div className="artifact" onClick={props.onClick}>
            <img src={props.selectedItemImage} alt="" />
        </div>
    )
}

export default Artifact