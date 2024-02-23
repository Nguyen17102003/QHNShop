import React, {useState, useEffect} from 'react'
import './Popular.css'
import Item from '../Item/Item'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import data_product from '../Assets/data'
import arrow_left from '../Assets/arrow-left.png'
import arrow_right from '../Assets/arrow-right.png'
const Popular = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [yAxis, setYAxis] = useState(0)
    const nextSlide = (images) => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setYAxis(window.scrollY)
    };
  
    const prevSlide = (images) => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setYAxis(window.scrollY)
    };
    useEffect(() => {
      window.scrollTo(0, yAxis);
    }, [currentIndex])
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide(data_product)
      }, 6000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [data_product.length, 2000]);
  return (
    <div className="popular">
        <h1>PHỔ BIẾN CHO PHÁI ĐẸP</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="popular-item-carousel">
          <button className="popular-prev" type='button' onClick={() => prevSlide(data_product)}><img src={arrow_left}/></button>
          <CarouselSlide id={data_product[currentIndex].id} image={data_product[currentIndex].image} carouselid={'popular'} new_price={data_product[currentIndex].new_price} old_price={data_product[currentIndex].old_price}/>
          <button className="popular-next" type='button' onClick={() => nextSlide(data_product)}><img src={arrow_right}/></button>
        </div>
    </div>
  )
}

export default Popular