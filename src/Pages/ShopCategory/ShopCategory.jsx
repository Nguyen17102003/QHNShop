import React, { useContext } from 'react'
import {ShopContext} from '../../Context/ShopContext'
import './ShopCategory.css'
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className="shopcategory-banner" src={props.banner} alt={`${props.category}_banner.png`}/>
      <div className="shopcategory-indexSort">
        <p>
          Xem <span>1-12</span> trong 36 sản phẩm
        </p>
        <div className="shopcategory-sort">
          Sắp xếp theo <img src={dropdown_icon} alt='dropdown_icon.png'/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category)
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Xem Thêm
      </div>
    </div>
  )
}

export default ShopCategory