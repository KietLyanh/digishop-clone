import React,{useState} from "react";
import PropTypes from 'prop-types';
import './Menu.scss';
import { NavLink } from "react-router-dom";

function MenuItems({
    to,icon,title,image,displayTitle,displayImg,className,classNameImg,dropdown,marginLeftDropdown,search,popup
})
{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    
    const handleOnclick = () => {
        setIsOpen(!isOpen);
        if(!isOpen)
        {
            console.log("chưa đóng");
        }
        else console.log("đã đóng");
    }
   
    const handleDropdownOpen = () => {
      setIsDropdownOpen(true);
    };
  
    const handleDropdownClose = () => {
      setIsDropdownOpen(false);
    };
    return(
        
        <NavLink 
         onMouseOver={handleDropdownOpen} onMouseOut={handleDropdownClose}
             to={to}>
            <div className={className}
            onClick={handleOnclick}>
            {icon}
            <img style={{display:`${displayImg}`}} src={image} className={classNameImg}/>
            <p style={{display:`${displayTitle}`}}>{title}</p>
            </div>
            {isDropdownOpen && (<div className="dropdownList" style={{
                marginLeft:marginLeftDropdown
            }} >{dropdown}</div>)}
           {isOpen && (<div className="search">{search}</div>)}
           {isOpen && (<div className="popup" onClick={handleOnclick}>{popup}</div>)}
        </NavLink>
     
    );
}
MenuItems.propTypes = {
    to: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    image:PropTypes.node.isRequired,
    displayTitle: PropTypes.node.isRequired,
    displayImg: PropTypes.node.isRequired,
    className: PropTypes.node.isRequired,
    dropdown: PropTypes.node.isRequired,
    search: PropTypes.node.isRequired,
    popup:PropTypes.node.isRequired
}
export default MenuItems;