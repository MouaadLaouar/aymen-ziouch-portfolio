import "../scss/AboutMe.scss"
import profil from "../assets/aymen.jpeg"

//SKILLS 
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import flutter from "../assets/skills/flutter.png";
import dart from "../assets/skills/dart.png";
import js from "../assets/skills/js.png";
import npm from "../assets/skills/npm.png";
import figma from "../assets/skills/figma.png"

//icon 
import dz from "../assets/dz.png"
import Git from "../components/icons/SocialMedia/Git"
import Insta from "../components/icons/SocialMedia/Insta"
import Linkedin from "../components/icons/SocialMedia/Linkedin"
import Twitter from "../components/icons/SocialMedia/Twitter"


const AboutMe = () => {


    return(
        <section id="AboutMe">
            <div className="photoDeProfil">
                <img src={ profil } alt="#" />
            </div>

            <nav>
                <h1>AYMEN ZIOUCHE</h1>
                <p>@aymen_zch</p>
            </nav>

            <div className="bioghraphy">
                <nav>
                    <h1>EXPERIANCE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ultrices metus a pellentesque.</p>
                </nav>
                <hr />
                <nav>
                    <h1>ABOUT ME</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ultrices metus a pellentesque. Donec vitae hendrerit eros. Quisque id tellus vel lacus sollicitudin luctus. Donec varius magna enim, id sodales est posuere ut. Donec sed nunc pulvinar, elementum ex in, fringilla tellus. Nam suscipit viverra nisl, in rutrum eros cursus eget.</p>
                    <p>Aliquam feugiat lectus sit amet suscipit varius. Praesent ac ultricies ante. Integer ut enim id nunc mattis aliquet sit amet nec leo. In ex libero, luctus non dictum vel, posuere vitae tellus.</p>
                </nav>                
                
                <nav>
                    <h1>SKILLS</h1>

                    <div>
                        <img src={ html } alt="html" />
                        <img src={ css } alt="css" />
                        <img src={ flutter } alt="flutter" />
                        <img src={ dart } alt="dart" />
                        <img src={ js } alt="javascripte" />
                        <img src={ figma } alt="figma" />
                        <img src={ npm } alt="npm" />
                    </div>
                </nav>

                <nav>
                    <h1>I &#10084;</h1>
                    <p>musique - guitare - video game - coding - travelling - working</p>
                </nav>

                <nav>

                    <div>
                        <h1>Location</h1>
                        <p><img src={ dz } alt="flag" /> Algeria, Annaba</p>
                    </div>

                    <div>
                        <h1>Email</h1>
                        <p>aymen.zch23@gmail.com</p>
                    </div>

                    <div>
                        <h1>Social Media</h1>
                        <div className="socialMedia">
                            <Git />
                            <Insta color="white" />
                            <Linkedin />
                            <Twitter />
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}


export default AboutMe;