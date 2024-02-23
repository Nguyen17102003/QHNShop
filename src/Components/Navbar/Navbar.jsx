import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import search_icon from '../Assets/search_icon.png'
import dropdown_menu from '../Assets/dropdown_menu.png'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const {getTotalCartItems, cartItems} = useContext(ShopContext)
    const [dropdown, setDropdown] = useState(false)
    const [menu, setMenu] = useState(false)
    const dropdownmenu = () => {
        if(dropdown)
        {
            document.getElementById('dropdown').style.transform = 'translateY(-2px)'
            document.getElementById('dropdown-hr').style.display = 'block'
            document.getElementById('dropdown-hr').style.transform = 'translateY(1px)'
            document.getElementById('dropdown-content').style.display = 'block'
            setDropdown(!dropdown)
        }
        else {
            document.getElementById('dropdown').style.transform = 'none'
            document.getElementById('dropdown-hr').style.display = 'none'
            document.getElementById('dropdown-hr').style.transform = 'none'
            document.getElementById('dropdown-content').style.display = 'none'
            setDropdown(!dropdown)
        }
    }
    const dropdownToggle = (e) => {
        !menu ? e.currentTarget.querySelector('ul').style.display = 'inline-block' : e.currentTarget.querySelector('ul').style.display = 'none'
        setMenu(!menu)
    }
    const navigate = (category) => {
        document.getElementById('shop').querySelector('hr').style.display = 'none'
        const lists = document.getElementById('dropdown-content').querySelectorAll('li')
        lists.forEach((li) => {
            li.querySelector('hr').style.display = 'none'
        })
        document.getElementById(category).querySelector('hr').style.display = 'block'
        document.getElementById('dropdown').style.transform = 'none'
        document.getElementById('dropdown-hr').style.display = 'none'
        document.getElementById('dropdown-content').style.display = 'none'
        setDropdown(!dropdown)
    }
  return (
    <div className='navbar'>
        <Link style={{textDecoration: 'none'}} to='/'>
            <div className='nav-logo' onClick={() => {navigate('shop')}}>
                <img src={logo} alt="logo.png"/>
                <p>QHN SHOP</p>
            </div>
        </Link>
        <ul className='nav-menu'>
            <li onClick={() => {navigate('shop')}} id='shop'><Link style={{textDecoration: 'none'}} to='/'>Trang chủ</Link><hr/></li>
            <div className='nav-dropdown-menu' >
                <li onClick={() => {dropdownmenu('category')}} id='dropdown'>Danh mục</li>
                <hr id='dropdown-hr'/>
                <ul className="nav-dropdown-content" id='dropdown-content'>
                <Link  style={{textDecoration: 'none'}} to='/men'><li onClick={() => {navigate('men')}} id='men'>Nam giới<hr/></li></Link>
                <Link  style={{textDecoration: 'none'}} to='/women'><li onClick={() => {navigate('women')}} id='women'>Phái nữ<hr/></li></Link>
                <Link  style={{textDecoration: 'none'}} to='/kids'><li onClick={() => {navigate('kids')}} id='kids'>Trẻ em<hr/></li></Link>
                </ul>
            </div>
        </ul>  
        
       <div className='nav-searchbar'>
            <img src={search_icon} alt='search_icon.png'/>
            <input type='text' placeholder='Tìm kiếm sản phẩm'/>
       </div>
        <div className='nav-login-cart'>
            <Link to='/login' style={{textDecoration: 'none'}}><button>Đăng nhập</button></Link>
            <div className='nav-menu-responsive-dropdown' onClick={dropdownToggle}>
                <img src={dropdown_menu} alt=''/>
                <ul className='nav-menu-responsive-dropdown-content'>
                    <Link style={{textDecoration: 'none'}} to='/'><li onClick={() => {navigate('shop')}} id='shop'>Trang chủ</li></Link>
                    <Link  style={{textDecoration: 'none'}} to='/men'><li onClick={() => {navigate('men')}} id='men'>Nam giới</li></Link>
                    <Link  style={{textDecoration: 'none'}} to='/women'><li onClick={() => {navigate('women')}} id='women'>Phái nữ</li></Link>
                    <Link  style={{textDecoration: 'none'}} to='/kids'><li onClick={() => {navigate('kids')}} id='kids'>Trẻ em</li></Link>
                    <Link to='/login' style={{textDecoration: 'none'}}><li id='login'>Đăng nhập</li></Link>
                </ul>
            </div>
            <Link to='/cart' style={{textDecoration: 'none'}}>
                <div className='nav-counter'>
                    <div className="nav-counter-dropdown-menu">
                        <img src={cart_icon} alt='cart_icon.png'/>
                       
                        <div className="nav-counter-dropdown-content">
                            <div className="nav-counter-dropdown-header">
                                <span>Hình ảnh</span>
                                <span>Size</span>
                                <span>Tên sản phẩm</span>
                                <span>Số lượng</span>
                            </div>
                            <hr/>
                            {
                                Object.entries(cartItems).map((e) => {
                                    if(e[1].hasOwnProperty('quantity'))
                                    if(e[1]['quantity'] > 0)
                                    {
                                        return  <div key={e[0]} className="nav-counter-dropdown-row">
                                            <div>
                                                <img src={e[1]['image']} alt={`${e[1]['name']}.png`}/>
                                            </div>
                                            <span>{e[0].split('_')[0]}</span>
                                            <span id='product_name'>{e[1]['name']}</span>
                                            <span>{e[1]['quantity']}</span>
                                        </div>
                                    }
                                    return null
                                })
                            }
                           
                        </div>
                    </div>
                    <div className='nav-cart-count'>{getTotalCartItems()}</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar