import "./HomeView.css"
import Header from "../components/Header/Header.jsx"
import janis from "../../assets/images/janis1.jpg"

function HomeView(){
    return(
        <div className="homeView-container">
            <Header title="Home"></Header>
            <div className="homeView-content">
                <div className="greetings-container">
                    <img class="intro-photo" src={janis} alt="" />
                <div className="greeting"><p>Hello There,</p> I'm Janis Ring<span className="image-overlap">li</span></div>
                </div>
            </div>
        </div>
    )
}
export default HomeView