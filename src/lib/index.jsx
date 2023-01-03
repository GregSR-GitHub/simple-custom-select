import './select.css';
import { useState } from 'react'

function SimpleCustomSelect({options}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(options[0]);
    return (
        <div className="select-wrapper">
            <button className="select-button"  onClick={(e) => setIsOpen(!isOpen)}>
                {isSelected}
            <span  className="select-arrow"></span>
            </button>
            {isOpen&&
            <ul className="select-list">
                { options.map((element, index) => (<li className="select-option" key={`${element}-${index}`}  onClick={(e) => {setIsOpen(false); setIsSelected(element)}}>{element}</li>))}
            </ul>}
        </div>
    );
 }
 
 export default SimpleCustomSelect;