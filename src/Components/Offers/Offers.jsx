import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Ưu đãi</h1>
            <h1>Dành cho bạn</h1>
            <p>CHỈ SẢN PHẨM BÁN CHẠY NHẤT</p>
            <button>Xem liền</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt='exclusive_image.png'></img>
        </div>
    </div>
  )
}

export default Offers