import React, {useEffect} from 'react'
import './CarouselSlide.css'
import { Link } from 'react-router-dom'
const CarouselSlide = (props) => {
  useEffect(() => {
    document.getElementById(`carousel-slide-container-${props.carouselid}`).style.backgroundImage = `url(${props.image})`
  }, [props])
  return (
    <Link to={`/product/${props.id}`} style={{textDecoration: 'none'}}>
    <div className="carouselslide" onClick={window.scrollTo(0, 0)} id={`carousel-slide-container-${props.carouselid}`}>
        <div className="carouselslide-prices">
        <div className="carouselslide-price-new">
            ${props.new_price}
        </div>
        <div className="carouselslide-price-old">
            ${props.old_price}
        </div>
    </div>
    </div>
    </Link>
  )
}

export default CarouselSlide