import {React , useEffect } from 'react';
// import {BsPatchCheckFill} from "react-icons/bs";
import HTML from '../src/assets/html.png';
import CSS from '../src/assets/css-3.png';
import JS from '../src/assets/js.png';
import ReactIcon from '../src/assets/atom.png';
import Git from '../src/assets/git.png';
import Java from '../src/assets/java.png';
import Spring from '../src/assets/springlogofm.png';
import MySQL from '../src/assets/mysql.png';
import Bootstrap from '../src/assets/bootstrap.png';
import '../src/Skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Experience() {

    useEffect(() => {
        Aos.init(
          {duration: 1000}
        );
    }, []);

    return(
        <section id="skills">

            <h5>What is my experience ?</h5>
            <h1>Skills</h1>

            <div className="container experience__container">
                <div className="experience__frontend" data-aos='fade-left'>
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        {/* <BsPatchCheckFill className="experience__details-icon"/> */}
                        <img src={HTML} alt="html freepik"/>
                        <div>
                            <h4>HTML</h4>
                            {/* <small className="text-light">Experienced</small> */}
                        </div>
                    </article>

                    <article className="experience__details">
                        <img src={CSS} alt="css freepik"/>
                        <h4>CSS</h4>
                    </article>

                    <article className="experience__details">
                        <img src={JS} alt="javascript freepik"/>
                        <h4>JavaScript</h4>
                    </article>

                    <article className="experience__details">
                        <img src={Bootstrap} alt="javascript freepik"/>
                        <h4>Bootstrap</h4>
                    </article>

                    

                    <article className="experience__details">
                        <img src={ReactIcon} alt="react srip"/>
                        <h4>React</h4>
                    </article>

                    <article className="experience__details">
                        <img src={Git} alt="git pictogrammer"/>
                        <h4>Git</h4>
                    </article>
                    
                </div>
                </div>
                <div className="experience__backend" data-aos='fade-right'>
                <h3>Blackend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={Java} alt="java freepik"/>
                        <h4>Java</h4>
                    </article>
                    <article className="experience__details">
                        <img src={Spring} alt="spring"/>
                        <h4>Spring</h4>
                    </article>
                    <article className="experience__details">
                        <img src={MySQL} alt="MySQL freepik"/>
                        <h4>MySQL</h4>
                    </article>
                </div>
                </div>
            </div>

        </section>
    )
}
export default Experience;