import React, {useState, useEffect} from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
const NewCollections = () => {
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
        nextSlide(new_collections)
      }, 6000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [new_collections.length, 2000]);
  return (
    <div className='new-collections'>
        <h1>BỘ SƯU TẬP MỚI</h1>
        <hr/>
        <div className="new-collections-item">
            {new_collections.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="new-collections-carousel">
        <CarouselSlide id={new_collections[currentIndex].id} image={new_collections[currentIndex].image} carouselid={'newcollection'} new_price={new_collections[currentIndex].new_price} old_price={new_collections[currentIndex].old_price}/>
        </div>
    </div>
  )
}

export default NewCollections