import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Đăng nhập</h1>
        <div className="login-fields">
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Mật khẩu'/>
        </div>
        <button>Đăng nhập</button>
        <hr/>
        <p className='login-login'>
            <span className="login-alreadyhasaccount">Bạn chưa có tài khoản? <Link style={{textDecoration: 'none'}} to='/signup'><span>Đăng ký</span></Link></span>
        </p>
      </div>
    </div>
  )
}

export default Login