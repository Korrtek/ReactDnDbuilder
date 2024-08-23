import Armor from "./Armor.jsx";
import React, { useState } from "react"
import { useEffect } from "react";
import {GameitemsWeapon} from "./data/GameitemsWeapon.js"
import { GameitemsArmor } from "./data/GameitemsArmor.js";
import { GameitemsArtifact } from "./data/GameitemsArtifact.js";
import { GameitemsBoots } from "./data/GameitemsBoots.js";
import { GameitemsCloak } from "./data/GameitemsCloak.js";
import eqparrov from "/images/arrow__buttom.svg"

function Equip (props) {
    const [ renderModal, setRenderModal] = useState(false);

    const [selectedItemImage, setSelectedItemImage] = useState(props.initialItemImage);
    
    const [selectedItemStats, setSelectedItemStats] = useState(
        props.initialItemStats ||
            {
            name: '',
            strength: 0,
            agility: 0,
            intelligence: 0,
            defense: 0,
            athletics: 0,
            rhetoric: 0,
            spellSlots: 0,
            description: "",
        }
        );


    const  toggleModal = () => {
        setRenderModal(!renderModal)
    };


    const handleItemClick = (item) => {
        setSelectedItemImage(item.imageUrl);
        props.onItemImageChange(item.imageUrl);
        setSelectedItemStats({
            name: item.title,
            strength: item.Str,
            agility: item.Dex,
            intelligence: item.Int,
            defense: item.Def,
            athletics: item.Atl,
            rhetoric: item.Rit,
            spellSlots: item.Slots,
            description: item.description,
        });
        props.onItemStatsChange({
            name: item.title,
            strength: item.Str,
            agility: item.Dex,
            intelligence: item.Int,
            defense: item.Def,
            athletics: item.Atl,
            rhetoric: item.Rit,
            description: item.description,
        });
        // console.log("onItemStatsChange props:", {
        //     description: item.description,
        //     title: item.title,
        //     strength: item.Str,
        //     agility: item.Dex,
        //     intelligence: item.Int,
        //     defense: item.Def,
        //     athletics: item.Atl,
        //     rhetoric: item.Rit,
        // });
        setRenderModal(false);
    }

    const itemsToRender = props.component === "Weapon" ? GameitemsWeapon:
                            props.component === "Armor" ? GameitemsArmor:
                            props.component === "Artifact" ? GameitemsArtifact:
                            props.component === "Cloak" ? GameitemsCloak:
                            props.component === "Boots" ? GameitemsBoots: false;

    return (
        <div className="equip__inner">
            
        <div className="rotate_eqp">
        <div className="info__img" >
        <img src={selectedItemImage} alt="" />
        </div>
        
        <div className="Equip__wrapper">
        <div className="chose__section" onClick={toggleModal}>
            {selectedItemStats.name}
                <img className="siction__arrow" src={eqparrov} alt="arrow" />
        </div>
            <div className="testEup__container">
                <div className="testEup">
                {  renderModal && itemsToRender.map((item) =>
                        (<div key={item.id} className="modal__items" onClick={() => handleItemClick(item)}><img className="modal__img" src={item.imageUrl} alt="item" /> {item.title} </div>))}

                </div>   
            </div>
        </div>
        </div>
        <div className="Eqp__description" >
            <div className="Eqp_sats"> 
                <div> Сила: {selectedItemStats.strength}</div>
                <div>Ловкость: {selectedItemStats.agility}</div> 
                <div>Интеллект: {selectedItemStats.intelligence}</div> 
                <div>Защита: {selectedItemStats.defense}</div> 
                <div>Атлетика: {selectedItemStats.athletics}</div>
                <div>Риторика: {selectedItemStats.rhetoric}</div>
            </div>
            <div className="Eqp__story">{selectedItemStats.description}</div>
        </div>
        
        </div>
        
    )
}

export default Equip



