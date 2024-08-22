import React, {useState} from "react";
import { useEffect } from "react";


function Herostory () {

    const [herostoryArea, setHerostoryArea] = useState('');

    useEffect(() => {
        const storedherostoryArea = JSON.parse(localStorage.getItem('herostoryArea'));
        if (storedherostoryArea) {
            setHerostoryArea(storedherostoryArea);
        }
        }, []);
    
        const handleBlur = (e) => {
        localStorage.setItem('herostoryArea', JSON.stringify(e.target.value));
        };







    return (
        <textarea className="herostory" placeholder="История" value={herostoryArea}  onChange={(e) => setHerostoryArea(e.target.value)}  onBlur={handleBlur}>
            
        </textarea>
    )
}

export default Herostory