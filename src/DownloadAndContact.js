import {React , useEffect } from 'react';
import CV from '../src/assets/cvResumeCN.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
const DownloadAndContact = () => {
    useEffect(() => {
        Aos.init(
          {duration: 2000}
        );
    }, []);
    return(
        <div className="downloadAndContact">
            <a href={CV} download className="btn">下载简历</a>
            <a href="#contact" className="btn btn-primary">聊天</a>
        </div>
    )
}
export default DownloadAndContact;