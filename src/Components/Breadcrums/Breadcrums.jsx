import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
  const {product} = props
  return (
    <div className='breadcrums'>
        Trang chủ <img src={arrow_icon} alt='arrow_icon.png'/>
        {product.category} <img src={arrow_icon} alt='arrow_icon.png'/>
        {product.name}
    </div>
  )
}

export default Breadcrums