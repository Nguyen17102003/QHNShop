import React, {useState, useEffect, useRef} from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import josh_hutcherson from '../Assets/josh_hutcherson.mp3'
const Hero = () => {
    const [isDefaultImage, setIsDefaultImage] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const handlePlayPause = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      };
    const changeBackground = () => {
      setIsDefaultImage(false);
      document.getElementById('2').style.display = 'none';
      document.getElementById('3').style.display = 'none'
      handlePlayPause();
      setIsPlaying(!isPlaying);
    };
    useEffect(() => {
      if (!isDefaultImage) {
        const timeoutId = setTimeout(() => {
          setIsDefaultImage(true);
          document.getElementById('2').style.display = 'flex';
          document.getElementById('3').style.display = 'flex';
        }, 6000);
        setIsPlaying(!isPlaying);
        return () => clearTimeout(timeoutId);
      }
    }, [isDefaultImage]);
  return (
    <>
    <audio ref={audioRef} src={josh_hutcherson}></audio>
    <div className={`hero ${isDefaultImage ? '' : 'new-background'}`} id='1'>
        <div className="hero-left" id='2'>
            <h2>KHÁCH HÀNG MỚI</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Sản phẩm</p>
                    <img src={hand_icon} alt='hand_icon.png'></img>
                </div>
                <p>mới cho</p>
                <p>mọi nhà</p>
                <span>Sản phẩm</span>
                <span>mới cho mọi nhà</span>
                <div className="hero-latest-btn" onClick={changeBackground}>
                  <div>Xem sản phẩm mới nhất</div>
                  <img src={arrow_icon} alt='arrow.png'></img>
                </div>
            </div>
        </div>
      
        <div className="hero-right" id='3'>
            <img src={hero_image} alt='hero_image.png'></img>
        </div>
    </div>
    </>
    
  )
}

export default Hero