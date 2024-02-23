import React, {useContext} from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItem = () => {
  const {
    cartItems, 
    removeFromCart, changeQuantity,
    getTotalCartAmount} = useContext(ShopContext) 
  const buttonAction = (id, action, child, objectState) => {
    action === '+' ? ++child.parentNode.querySelector('input').value :  --child.parentNode.querySelector('input').value
    objectState['quantity'] = child.parentNode.querySelector('input').value
    changeQuantity(id, objectState)
  }
  
  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
            <div><p>Hình ảnh</p></div>
            <div><p>Tên sản phẩm</p></div>
            <div><p>Đơn giá</p></div>
            <div><p>Size</p></div>
            <div><p>Số lượng</p></div>
            <div><p>Tổng thanh toán</p></div>
            <div><p>Xóa khỏi giỏ hàng</p></div>
        </div>
        <hr/>
        {Object.entries(cartItems).map((e) => {
            if(e[1].hasOwnProperty('quantity'))
                if(e[1]['quantity'] > 0)
                {

                    return (<div key={e[0]}>
                    <div className="cartitem-format cartitem-format-main">
                        <div><img src={e[1]['image']} alt='' className='cartitem-product-icon'/></div>
                        <div><p>{e[1]['name']}</p></div>
                        <p>${e[1]['new_price']}</p>
                        <p>{e[0].split('_')[0]}</p>
                        <div className='cartitem-quantity'>
                            <button onClick={(i) => {buttonAction(e[0], '-', i.target, 
                            { image: e[1].image,
                              name: e[1].name,
                              new_price: e[1].new_price,
                              quantity: e[1]['quantity'],
                            }
                            )}}>-</button>
                            <input type='number' onChange={(i) => {changeQuantity(e[0], 
                            { image: e[1].image,
                              name: e[1].name,
                              new_price: e[1].new_price,
                              quantity: i.target.value,
                            }
                              )}} defaultValue={e[1]['quantity']}/>
                            <button onClick={(i) => {buttonAction(e[0], '+', i.target,  
                            { image: e[1]['image'],
                              name: e[1]['name'],
                              new_price: e[1]['new_price'],
                              quantity: e[1]['quantity']
                            }
                            )}}>+</button>
                        </div>
                        <div><p>${(e[1]['quantity'] * e[1]['new_price']).toFixed(2)}</p></div>
                        <div className='cartitem-removeicon'>
                            <img src={remove_icon} onClick={() => {removeFromCart(e[0])}} alt='remove_icon.png'/>
                        </div>
                    </div>
                    <hr/>
                </div>)
            }
            return null
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Hóa đơn thanh toán</h1>
                <div>
                    <div className="cartitem-total-item">
                        <p>Tạm tính</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitem-total-item">
                        <p>Phí vận chuyển</p>
                        <p>Miễn phí</p>
                    </div>
                    <hr/>
                    <div className="cartitem-total-item">
                        <h3>Tổng thanh toán</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>THANH TOÁN</button>
            </div>
            <div className="cartitem-promocode">
                <p>Nếu bạn có mã quà tặng, hãy nhập ở đây</p>
                <div className="cartitem-promobox">
                    <input placeholder='Mã của bạn'/>
                    <button>Tiếp tục</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem