import './select.css';
import { useState } from 'react'

function SimpleCustomSelect({name, options}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(0);
    let option = {};

    // Selected option must be an object
    if(typeof(options[isSelected])==="object"){
        option = options[isSelected]; 
    }else{
        option = {value: options[isSelected], name: options[isSelected]};
    }

    // If no name use this default one
    if(!name){
        name = "custom-select";
    }

    // Enter Keyboard can select an option
    function handleEnter(index,event){
        if(event.key==="Enter") {
            event.preventDefault();
            setIsSelected(index);
            setIsOpen(false);
        }
    };

    return (
        <div id={name + "-wrapper"} className="custom-select-wrapper">
            <button 
            id={name + "-button"} 
            className="custom-select-button" 
            value={option.value} 
            aria-haspopup="listbox" 
            aria-expanded={isOpen}  
            aria-labelledby={name + "-option" + isSelected}
            onClick={(e) => setIsOpen(!isOpen)}
            >
                {option.name}
                <span  className="custom-select-arrow"></span>
            </button>
            {isOpen&&
            <ul  id={name + "-list"} role="listbox" className="custom-select-list" aria-activedescendant={name + "-option" + isSelected} tabIndex={-1}>
                { options.map((element, index) => (
                <li 
                    id={name + "-option" + index}
                    className="custom-select-option" 
                    key={`${name}-${index}`} 
                    role="option" 
                    aria-selected={isSelected === index}  
                    tabIndex={0} 
                    onKeyDown={(e) => {handleEnter(index,e)}}
                    onClick={(e) => {
                        setIsSelected(index);
                        setIsOpen(false);}
                    }
                >
                    {element.name?element.name:element}
                </li>
                ))}
            </ul>
            }
        </div>
    );
 }
 
 export default SimpleCustomSelect;