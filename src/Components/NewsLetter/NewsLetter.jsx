import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Ưu Đãi Độc Quyền Trên Email</h1>
        <p>Đăng ký & Cập Nhật Thông Tin Mới Nhất</p>
        <div>
          <input type='email' placeholder='Email của bạn'></input>
          <button>Đăng ký</button>
        </div>
    </div>
  )
}

export default NewsLetter