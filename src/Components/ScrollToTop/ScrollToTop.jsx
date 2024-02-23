import React from 'react'
import './ScrollToTop.css'
import arrow_up from '../Assets/arrow_up.png'
const ScrollToTop = () => {
  return (
    <div className='scrolltotop' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <img src={arrow_up} alt='arrow_up.png'/>
    </div>
  )
}

export default ScrollToTop