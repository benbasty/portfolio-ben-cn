import {React , useEffect } from 'react';
import { BiCheck } from "react-icons/bi";
import '../src/services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Services() {

    useEffect(() => {
        Aos.init(
          {duration: 1000}
        );
    }, []);

    return(
        <section id="services">
            <h5>What do I bring to the table? </h5>
            <h1>Services</h1>
            <div className=" container services__container">
                <article className="service" data-aos="fade-up">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Mobile First and Responsive Design</p>
                            </div>
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>User Research and Analysis</p>
                            </div>

                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Wireframe and Rapid Prototyping</p>
                            </div>

                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>User Testing</p>
                            </div>

                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Customer Experience Consulting</p>
                            </div>

                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Design Thinking</p>
                            </div>

                        </li>

                    </div>
                </article>
                <article className="service" data-aos="fade-down">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Landing Pages</p>
                            </div>
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Web development support and maintenance & Web optimization</p>     
                            </div>

                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Web programming</p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Search Engine Optimisation</p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Domain Name, Web Hosting & Professional domain name email address</p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Content Creation & Social Media Management</p> 
                            </div>
                            
                        </li>

                    </div>
                </article>
                {/* <article className="service">
                    <div className="service__head">
                        <h3>Content Design</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Landing Pages</p>
                            </div>       
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Web development support and maintenance & Web optimization</p>     
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Web programming</p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Search Engine Optimisation</p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Domain Name, Web Hosting & Professional domain name email address</p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="service__list__icon"><BiCheck /></div>
                            <div className="service__list__paragraph">
                                <p>Content Creation & Social Media Management</p> 
                            </div>
                            
                        </li>

                    </div>
                </article> */}

            </div>

        </section>
    )
}

export default Services;