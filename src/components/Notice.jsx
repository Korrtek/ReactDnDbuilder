import React, {useState} from "react";
import { useEffect } from "react";



function Notice () {

    const [noticeArea, setNoticeArea] = useState('')

    useEffect(() => {
        const storednoticeArea = JSON.parse(localStorage.getItem('noticeArea'));
        if (storednoticeArea) {
            setNoticeArea(storednoticeArea);
        }
        }, []);
    
        const handleBlur = (e) => {
        localStorage.setItem('noticeArea', JSON.stringify(e.target.value));
        };
    




    return (
        <textarea className="notice" placeholder="Заметки" value={noticeArea}  onChange={(e) => setNoticeArea(e.target.value)} onBlur={handleBlur} >
            
        </textarea>
    )
}

export default Notice