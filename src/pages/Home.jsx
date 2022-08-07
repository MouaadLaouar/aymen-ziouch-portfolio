import "../scss/Home.scss"
import image from "../assets/aymen.jpeg"
import arrow from "../assets/arrow-down.png"
import insta from "../assets/instagram.png"
import git from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

//icons
import Git from "../components/icons/SocialMedia/Git"
import Insta from "../components/icons/SocialMedia/Insta"
import Linkedin from "../components/icons/SocialMedia/Linkedin"
import Twitter from "../components/icons/SocialMedia/Twitter"

const Home = () => {


    return (
        <section id="Home">
            <img className="profil" src={ image } alt="aymen-image" />
            <div className="bio">
                <h1>AYMEN ZIOUCHE</h1>
                <p>FLUTTER DEVELOPER | FONTEND DEVELOPER</p>
            </div>
            <button>MY RESUM <img src={ arrow } alt="arrow-down" /></button>
            <div className="social">
                <a href="https://www.instagram.com/aymen_zch/"><Insta /></a>
                <a href="https://github.com/aymen-ziouche"><Git /></a>
                <a href="https://www.linkedin.com/in/aymen-ziouche-277552202/"><Linkedin /></a>
                <a href="https://twitter.com/aymen_zch"><Twitter /></a>
            </div>
        </section>
    )
}


export default Home