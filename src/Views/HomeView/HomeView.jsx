import "./HomeView.css"
import Header from "../../components/Header/Header.jsx"
import janis from "../../assets/images/janis1.jpg"
import MenuFlyout from "../../components/MenuFlyout/MenuFlyout"

function HomeView(){
    return(
        <div className="homeView-container">
            <Header title="Home"></Header>
            <MenuFlyout></MenuFlyout>
            <div className="homeView-content">
                <div className="greetings-container">
                <div className="greeting">
                    <p className="image-overlap">Hello There,</p>
                     I'm Janis Ring
                     <span className="image-overlap">li</span>
                    <img class="intro-photo" src={janis} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeView