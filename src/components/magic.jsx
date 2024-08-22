import React, {useState} from "react";
import { useEffect } from "react";


function Magic () {
    const [magicArea, setMagicArea] = useState('')

    useEffect(() => {
        const storedMagicArea = JSON.parse(localStorage.getItem('magicArea'));
        if (storedMagicArea) {
        setMagicArea(storedMagicArea);
        }
    }, []);
    
    const handleBlur = (e) => {
        localStorage.setItem('magicArea', JSON.stringify(e.target.value));
    };


    return (
        <div className="magic">
        <textarea className="magic__textarea" type="text" placeholder="Магия" value={magicArea} onChange={(e) => setMagicArea(e.target.value)} onBlur={handleBlur}
        >  
        </textarea>
        </div>
    )
}

export default Magic