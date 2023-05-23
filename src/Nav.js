import React, { useEffect } from "react";
import { useState } from "react";
import {FaTimes, FaBars} from 'react-icons/fa';
import {AiFillHome, AiOutlineUser} from 'react-icons/ai';
import {BsChat, BsImages, BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import '../src/nav.css';
import {Link} from 'react-scroll';
// import { Link as CNLink} from "react-router-dom";
import ME from "../src/assets/avatar.png";

const Nav = () => {
    // responive nav
    const [showNav, setShowNav] = useState(false);
    const showNavbar = () => {
        setShowNav(!showNav);
    }

    // light dark theme
    const [theme, setTheme] = useState("light-theme");
    const lightDarkMode = () => {
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
        setClick(!click);
    };
    useEffect(() => {
        document.body.className = theme
    })
    const [click, setClick] = useState(false);

    return(
        <div className="navbar">
            <div className="logo">
                <div className="benavatar">
                    <img src={ME} alt=""/>
                </div>
                <div className="benlogo">
                    <a href="#home"><h4>BENBASTY</h4></a>
                </div>
            </div>
            <nav>
                    <ul className={showNav ? "nav-menu responsive-nav": "nav-menu"}>
                        <li>
                            <Link activeClass="active" spy to="home" offset={-65}><AiFillHome className="icon"/> <span className="textlink" onClick={() => setShowNav(false)}>首页</span></Link>
                        </li>
                        <li>
                            <Link activeClass="active" spy to="aboutme" offset={-65}><AiOutlineUser className="icon"/> <span className="textlink" onClick={() => setShowNav(false)}>关于</span></Link>
                        </li>
                        <li>
                            <Link activeClass="active" spy to="projects" offset={-65}><BsImages className="icon"/> <span className="textlink" onClick={() => setShowNav(false)}>作品集</span></Link>
                        </li>
                        <li>
                            <Link activeClass="active" spy to="contact" offset={-65}><BsChat className="icon"/> <span className="textlink" onClick={() => setShowNav(false)}>联系</span></Link>
                        </li>
                    </ul>

                {/* <div className="translate-cn">
                    <CNLink to='/cn'>CN</CNLink>
                </div> */}

                <div className="theme-button" onClick={lightDarkMode}>
                    {click ?
                        (<BsFillSunFill />)
                        :
                        (<BsFillMoonFill/>)
                    }
                </div>
                <div className="hamburger" onClick={showNavbar}>
                    {showNav ?
                        (<FaTimes />)
                        :
                        (<FaBars />)
                    }
                </div>
            </nav>
        </div>
    )
}








export default Nav;