import React from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import './scrollUp.css';
import { useEffect, useState } from 'react';

const ScrollUp = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 700) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className='scrollup'>
        <div onClick={scrollUp}>
            {backToTopButton && <BsFillArrowUpCircleFill />}
        </div>   
    </div>
  )
}

export default ScrollUp