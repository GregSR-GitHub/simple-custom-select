import './select.css';
import { useState, useEffect, useRef } from 'react'

function SimpleCustomSelect({name, options, setState}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(0);
    let selectRef = useRef();
    let option = {};

    // Selected option must be an object
    if(typeof(options[isSelected])==="object"){
        option = options[isSelected]; 
    }else{
        option = {value: options[isSelected], name: options[isSelected]};
    }

    // Update custom state if one
    useEffect(() => { 
       setState&&setState(option.value);
     });
    
    // If no name use this default one
    if(!name){
        name = "my-custom-select";
    }

    function handleButtonClick(event){
        event.preventDefault();
        setIsOpen(!isOpen)
    }

    // Enter Keyboard can select an option
    function handleEnter(index,event){
        if(event.key==="Enter") {
            event.preventDefault();
            setIsSelected(index);
            setIsOpen(false);
        }
    };

    // Close component if user clic outside
    useEffect(() => {

        function handleClickOutside(event){
            if(!selectRef.current.contains(event.target)){
              setIsOpen(false);  
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div 
        id={name + "-wrapper"} 
        className={"custom-select_wrapper " + name + "_wrapper"} 
        ref={selectRef}
        >
            <button 
            id={name} 
            className={"custom-select_button " + name + "_button"}
            value={option.value} 
            aria-haspopup="listbox" 
            aria-expanded={isOpen}  
            aria-labelledby={name + "-option" + isSelected}
            onClick={(e) => handleButtonClick(e)}
            >
                {option.name}
                <span className="custom-select_arrow"></span>
            </button>
            {isOpen&&
            <ul  
            id={name + "-list"} 
            role="listbox" 
            className={"custom-select_list " + name + "_list"} 
            aria-activedescendant={name + "-option" + isSelected} 
            tabIndex={-1}
            >
                { options.map((element, index) => (
                <li 
                    id={name + "-option" + index}
                    className={"custom-select_option " + name + "_option"} 
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