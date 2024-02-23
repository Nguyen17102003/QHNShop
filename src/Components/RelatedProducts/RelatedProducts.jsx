import React, {useState, useEffect} from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
const RelatedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [yAxis, setYAxis] = useState(0)
  const nextSlide = (images) => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
    <div className='relatedproducts'>
        <h1>Sản phẩm liên quan</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="relatedproducts-item-carousel">
          <CarouselSlide id={data_product[currentIndex].id} image={data_product[currentIndex].image} carouselid={'relatedproducts'} new_price={data_product[currentIndex].new_price} old_price={data_product[currentIndex].old_price}/>
        </div>
    </div>
  )
}

export default RelatedProducts