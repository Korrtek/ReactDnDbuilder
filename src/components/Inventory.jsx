import React, {useState} from "react";
import { useEffect } from "react";


function Inventory () {

    const [inventoryArea, setInventoryArea] = useState('');
    const [money, setMoney] = useState('');

    useEffect(() => {
        const storedinventorycArea = JSON.parse(localStorage.getItem('inventoryArea'));
        const storedMoney = JSON.parse(localStorage.getItem('money'));
        if (storedinventorycArea) {
        setInventoryArea(storedinventorycArea);
        } 
        if (storedMoney) {
            setMoney(storedMoney);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('inventoryArea', JSON.stringify(inventoryArea));
        localStorage.setItem('money', JSON.stringify(money));
      }, [inventoryArea, money]);




    const handleBlur = (e) => {
        localStorage.setItem('inventoryArea', JSON.stringify(e.target.value));
    };



    return (
        <div>
        <div className="Money">
        <span className="Money__span">Монеты</span>
        <input className="Money__inp" type="text" value={money} onChange={(e) => setMoney(e.target.value)} onBlur={handleBlur} />
        </div>
        
        <textarea className="inventory" placeholder="Инвентарь" value={inventoryArea}  onChange={(e) => setInventoryArea(e.target.value)}  onBlur={handleBlur} >
            
        </textarea>
        </div>
    )
}

export default Inventory