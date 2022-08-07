import "../scss/Projects.scss"

//icon 
import Link from "../components/icons/Link"




const Projects = () => {

    return(
        <section id="Projects">
            <h1>PROJECTS</h1>

            <div className="projectCard">
                <div className="Content">
                    <h1>Solar-System</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ultrices metus a pellentesque. Donec vitae hendrerit eros. Quisque id tellus vel lacus sollicitudin luctus.</p>
                    <a href="#">Github <Link /></a>
                </div>

                <div className="projectImg">
                </div>
            </div>

            <div className="projectCard">
                <div className="projectImg">
                </div>

                <div className="Content">
                    <h1>Github Api</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ultrices metus a pellentesque. Donec vitae hendrerit eros. Quisque id tellus vel lacus sollicitudin luctus.</p>
                    <a href="#">Github <Link /></a>
                </div>

            </div>

            <div className="projectCard">
                <div className="Content">
                    <h1>Quizzle</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ultrices metus a pellentesque. Donec vitae hendrerit eros. Quisque id tellus vel lacus sollicitudin luctus.</p>
                    <a href="#">Github <Link /></a>
                </div>

                <div className="projectImg">
                </div>
            </div>
        </section>
    )
}


export default Projects;