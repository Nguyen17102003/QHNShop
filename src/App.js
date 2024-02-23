import Navbar from './Components/Navbar/Navbar'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Cart from './Pages/Cart/Cart';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Product from './Pages/Product/Product';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Login from './Pages/Login/Login';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="Nam giới"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="Phái nữ"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Trẻ em"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    <ScrollToTop/>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
