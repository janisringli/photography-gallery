import "./MenuFlyout.css"
import Menu from "../../assets/svg/list.svg"

function MenuFlyout({ menuFlyoutWrapperRef }){

   function closeFlyout(){
        const flyout = document.querySelector('.menuFlyout-wrapper')
        flyout.style.display = "none"
    }
    return(
        <div className="menuFlyout-wrapper" ref={menuFlyoutWrapperRef}>
            <div className="menuFlyout-container">
            <div className="menuFlyout-content">
                    <ul className="nav-content">
                        <li className="nav-item">About</li>
                        <li className="nav-item">Projects</li>
                        <li className="nav-item">Photography</li>
                    </ul>
                    <div className="flyout-sidebar">
                        <img className="flyout-menu-icon" onClick={closeFlyout}src={Menu} alt="" />
                        <div className="menu-close" onClick={closeFlyout}>Close</div>
                    </div>
            </div>
            <div className="menuFlyout-overlay-blur" onClick={closeFlyout}></div>
            </div>
        </div>
    )
}
export default MenuFlyout