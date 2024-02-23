import React, {useContext, useEffect, useState} from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const [yAxis, setYAxis] = useState(0)
  const {cartItems} = useContext(ShopContext)
  const {product} = props
  const [size, setSize] = useState(null)
  const handleClick = (action, e) => {
    if(action === '+')
    {
        ++e.value
    }
    else if(action === '-' && e.value > 0)
    {
        --e.value
    }
    else return;
  }
  const handleAddToCart = (e) => {
    if(e.value !== 0 && size !== null)
    {
        setYAxis(window.scrollY)
        let new_price = 0
        if(size === 'S')
            new_price += product.new_price
        else if(size === 'M')
            new_price += product.new_price * 1.2
        else if(size === 'L')
            new_price += product.new_price * 1.3
        else if(size === 'XL')
            new_price += product.new_price * 1.4
        else if(size === 'XXL')
            new_price += product.new_price * 1.5
        const item = {
            image: product.image,
            name: product.name,
            new_price: new_price,
            quantity: Number(e.value)
        }
        getItemToCart(`${size}_${product.id}`, item)
        document.querySelectorAll('.productdisplay-right-sizes div').forEach((size) => {
            size.style.background = '#fbfbfb';
        });
        console.log(cartItems)
    }
    else return;
  }
  const {getItemToCart} = useContext(ShopContext)
  const chooseSize = (e) => {
    setYAxis(window.scrollY)
    e.target.parentNode.querySelectorAll('div').forEach((size) => {
        size.style.background = '#fbfbfb';
    });
    e.target.style.background = '#c4c3c3';
    setSize(e.target.textContent)
  }
  useEffect(() => {
    window.scrollTo(0, yAxis)
  })
  const chooseSizeRes = (e) => {
    setYAxis(window.scrollY)
    setSize(e.target.value) 
  }
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="product_image.png" />
                    <img src={product.image} alt="product_image.png" />
                    <img src={product.image} alt="product_image.png" />
                    <img src={product.image} alt="product_image.png" />
                    <img src={product.image} alt="product_image.png" />
                </div>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="product_image.png" />
                <img src={star_icon} alt="product_image.png" />
                <img src={star_icon} alt="product_image.png" />
                <img src={star_icon} alt="product_image.png" />
                <img src={star_dull_icon} alt="product_image.png" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-new">${product.new_price}</div>
                <div className="productdisplay-right-price-old">${product.old_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="productdisplay-right-size">
                <label htmlFor="select"><h1>Chọn Size</h1></label>
                <div className="productdisplay-right-sizes">
                    <div onClick={(e) => chooseSize(e)}>S</div>
                    <div onClick={(e) => chooseSize(e)}>M</div>
                    <div onClick={(e) => chooseSize(e)}>L</div>
                    <div onClick={(e) => chooseSize(e)}>XL</div>
                    <div onClick={(e) => chooseSize(e)}>XXL</div>
                </div>
                <select id='select' onChange={chooseSizeRes} className='productdisplay-right-sizes-responsive'>
                    <option value="" disabled>Chọn size của bạn</option>
                    <option value="S">Size S</option>
                    <option value="M">Size M</option>
                    <option value="L">Size L</option>
                    <option value="XL"> Size XL</option>
                    <option value="XXL">Size XXL</option>
                </select>
            </div>
            <div className="productdisplay-right-quantity">
                <h1>Số lượng</h1>
                <div className='productdisplay-quantity-picking' id='quantity-picking'>
                    <div onClick={(e) => {handleClick('-', e.target.parentNode.querySelector('input'))}}>-</div>
                    <input type='number' defaultValue={1} min='0'/>
                    <div onClick={(e) => {handleClick('+', e.target.parentNode.querySelector('input'))}}>+</div>
                </div>
            </div>

            <button onClick={() => {handleAddToCart(document.getElementById('quantity-picking').querySelector('input'))}}>Thêm vào giỏ hàng</button>
        </div>
    </div>
  )
}

export default ProductDisplay