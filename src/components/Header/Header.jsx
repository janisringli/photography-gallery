import "./Header.css"
import menuIcon from "../../assets/svg/list.svg"
import React, { useEffect, useRef, useState } from "react";
import MenuFlyout from "../MenuFlyout/MenuFlyout";


function Header(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuFlyoutWrapperRef = useRef(null);
  
    function openMenuFlyout(){
        if (!isMenuOpen){
            setIsMenuOpen(true);
            menuFlyoutWrapperRef.current.style.display =  "block"
        }
        else{
            setIsMenuOpen(false)
            menuFlyoutWrapperRef.current.style.display =  "none"
        }
       
      
    }
  
    useEffect(() => {
      setIsMenuOpen(false)
    }, [isMenuOpen]);
    return (
       
        <div className="header-wrapper">
            <MenuFlyout menuFlyoutWrapperRef={menuFlyoutWrapperRef} />
            <div className="header-content">
                <div className="5head-box"></div>
                <div className="header-title">{props.title}</div>
                <div className="menu-wrapper" onClick={openMenuFlyout}><img className="menu-icon" src={menuIcon} alt="" /></div>
      

            </div>
           
        </div>
    )
}
export default Header