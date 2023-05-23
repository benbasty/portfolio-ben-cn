import {React , useEffect } from 'react';
import '../src/header.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        Aos.init(
          {duration: 500}
        );
    }, []);

    return(
        <header id="home">
            <div className="header__container">
                <div className='header_intro_container'>
                    <h1 data-aos="fade-down">Hi, I'm <span>Ben Basty</span></h1>
                    <p className="text-header" data-aos="fade-down">一位前端 Web 开发人员热衷于构建漂亮的前端网站和 Web 应用程序。</p>
                    <div id="projectsContactButton">
                        <a href="#projects" className="btn-black">项目</a>
                    </div>
                </div>
                <div className='header-home-socials'>
                    <div className='header-home-social'>
                        <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM" className='header-home-social-link' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    </div>
                    <div className='header-home-social'>
                        <a href="https://github.com/benbasty" className='header-home-social-link' target="_blank" rel="noreferrer"><BsGithub /></a>
                    </div>
                    <div className='header-home-social'>
                        <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw" className='header-home-social-link' target="_blank" rel="noreferrer"><BsYoutube /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;