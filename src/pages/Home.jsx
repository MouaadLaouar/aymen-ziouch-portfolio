import "../scss/Home.scss"
import image from "../assets/aymen.jpeg"
import arrow from "../assets/arrow-down.png"
import insta from "../assets/instagram.png"
import git from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Home = () => {


    return (
        <section id="Home">
            <img className="profil" src={ image } alt="aymen-image" />
            <h1>AYMEN ZIOUCH</h1>
            <p>FLUTTER DEVELOPER | FONTEND DEVELOPER</p>
            <button>MORE ABOUT ME <img src={ arrow } alt="arrow-down" /></button>
            <div className="social">
                <a href="https://www.instagram.com/aymen_zch/"><img src={ insta } alt="instagrame" /></a>
                <a href="https://github.com/aymen-ziouche"><img src={ git } alt="github" /></a>
                <a href="https://www.linkedin.com/in/aymen-ziouche-277552202/"><img src={ linkedin } alt="linkedin" /></a>
            </div>
        </section>
    )
}


export default Home