import "./MenuFlyout.css"
import Menu from "../../assets/svg/list.svg"

function MenuFlyout(){
    return(
        <div className="menuFlyout-wrapper">
            <div className="menuFlyout-container">
            <div className="menuFlyout-content">
                    <ul className="nav-content">
                        <li className="nav-item">About</li>
                        <li className="nav-item">Projects</li>
                        <li className="nav-item">Photography</li>
                    </ul>
                    <div className="flyout-sidebar">
                        <img className="flyout-menu-icon" src={Menu} alt="" />
                        <div className="menu-close">Close</div>
                    </div>
            </div>
            <div className="menuFlyout-overlay-blur"></div>
            </div>
        </div>
    )
}
export default MenuFlyout