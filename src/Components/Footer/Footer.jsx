import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
const Footer = () => {
  return (
    
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='footer_logo.png'/>
            <p>QHN SHOP</p>
        </div>
        <ul className='footer-links'>
            <li>Công ty</li>
            <li>Sản phẩm</li>
            <li>Văn phòng</li>
            <li>Về chúng tôi</li>
            <li>Liên hệ</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram_icon.png"/>
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="pinterest_icon.png"/>
            </div>
            <div className="footer-icons-container">
                <img src={facebook_icon} alt="facebook_icon.png"/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>© 2024 - Bản quyền thuộc về trường Đại học Công nghệ Đồng Nai</p>
            <p>Trang web dùng cho mục đích học tập</p>
        </div>
    </div>
  )
}

export default Footer