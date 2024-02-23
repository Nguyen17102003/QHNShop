import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Đăng ký</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Tên của bạn'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Mật khẩu'/>
        </div>
        <button>Tiếp theo</button>
        <hr/>
        <p className='loginsignup-login'>
            <p className="loginsignup-agree">Bằng việc đăng kí, bạn đã đồng ý với QHN SHOP về <span>Điều khoản dịch vụ & Chính sách bảo mật</span></p>
            <span className="loginsignup-alreadyhasaccount">Bạn đã có tài khoản? <Link style={{textDecoration: 'none'}} to='/login'><span>Đăng nhập</span></Link></span>
        </p>
      </div>
    </div>
  )
}

export default LoginSignup