
import React, { useState } from "react"
function Armor (props) {

    return (
        <div className="armor" onClick={props.onClick}>
            <img className="armor__img" src={props.selectedItemImage} alt="" />
        </div>
    )
}

export default Armor;