import {React , useEffect } from 'react';
import './Qualifications.css';
import {GiDiploma} from 'react-icons/gi';
import {MdWork} from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Qualifications = () => {

  useEffect(() => {
    Aos.init(
      {duration: 1000}
    );
  }, []);

  return (
    <section id='qualifications'>
      <h1>Qualifications</h1>
      <h5>Education and Experience</h5>
      <div className='container qualifications__container'>
        <article className='qualification' data-aos='zoom-out-right'>
          <div className='qualification__type'>
            <GiDiploma className='qualification_type_icon'/>
            <h3>Education</h3>
          </div>
          <div className='qualification__lists'>
            <li>
              <h4>Meta Front-End Developer by Meta on Coursera</h4>
              <p>Coursera</p>
              <p>2023</p>
            </li>
            <li>
              <h4>Java (Basic) Certificate</h4>
              <p>HackerRank (Hackerrank.com)</p>
              <p>2022</p>
            </li>
            <li>
              <h4>Java Programming I / II </h4>
              <p>University Of Helsinky (MOOC.fi)</p>
              <p>2021</p>
            </li>
            <li>
              <h4>SQL (Basic) Certificate</h4>
              <p>HackerRank (Hackerrank.com)</p>
              <p>2020</p>
            </li>
            <li>
              <h4>Master In Information Engineering</h4>
              <p>Guangdong University Of Technology</p>
              <p>2013-2019</p>
            </li>
            <li>
              <h4>Bachelor In Information Engineering</h4>
              <p>Guangdong University Of Technology</p>
              <p>2007-2013</p>
            </li>
          </div>
        </article>
        <article className='qualification' data-aos='zoom-out-left'>
          <div className='qualification__type'>
            <MdWork className='qualification_type_icon'/>
            <h3>Work</h3>
          </div>
          <div className='qualification__lists'>
            <li>
              <h4>Freelancer</h4>
              <p>Ben Consulting Trading Company</p>
              <p>2019 - Present</p>
            </li>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Qualifications