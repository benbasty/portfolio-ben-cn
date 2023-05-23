import React from "react";
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

function Footer() {
    const current = new Date();
    const year = `${current.getFullYear()}`;
    return(
        <footer id="footer">
            <div className="footer_main">
                <div className="footer__me">
                    <h4>BEN BASTY</h4>
                    <p>一位前端 Web 开发人员热衷于构建漂亮的 <br/> 前端网站和 Web 应用程序。</p>
                </div>
                <div className="footer__socials">
                    <h4>社交媒体</h4>
                    <div className="footer__social">
                        <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/benbasty" target="_blank" rel="noreferrer"><BsGithub /></a>
                        <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw" target="_blank" rel="noreferrer"><BsYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <small>&copy; 版权 {year} | <a href="https://www.benbasty.com">Ben Basty</a></small>
            </div>
        </footer>
    )
}
export default Footer;