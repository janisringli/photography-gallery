import "./Header.css"
import menuIcon from "../../../assets/svg/list.svg"

function Header(props){
    return (
        <div className="header-wrapper">
            <div className="header-content">
                <div className="5head-box"></div>
                <div className="header-title">{props.title}</div>
                <div className="menu-wrapper"><img className="menu-icon" src={menuIcon} alt="" /></div>
            </div>
        </div>
    )
}
export default Header