import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import './Residencies.css'
import { sliderSettings } from '../../utils/common';
import data from '../../utils/slider.json'
const Residencies = () => {
  return ( 
    <section className='r-container'>
  <div className="paddings innerWidth">
  <div className="r-head flexColStart">
  <span className='orangeText'>Best choices </span>
  <span className='primaryText'>Available Residencies</span>
  </div>  

  <Swiper {...sliderSettings}>
  <SliderButtons />
  {
   data.map((card, i) => (
            
   <SwiperSlide key = {i}>
    <div className="r-card">
    <img src={card.image} alt="home" />
    <div className="r-description">
    <span className='secondaryText r-price'>
    <span style={{color:"orange",fontSize:"20px"}}>₦</span>
    <span style={{fontSize:"20px"}}>{card.price}</span>
    </span>

    <span className='textEl'>
    <span className='locationEl'><span className='locationText'>Location: </span>{card.detail}</span>
    <span className="descriptionEl"><span className='descriptionText'>Description: </span>{card.description}</span>
    </span>
    
    </div>
                      
  </div>

  </SwiperSlide>

  ))
   }
  </Swiper>
            
</div>
    </section >
  )
}

export default Residencies;
const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>
        &lt;
      </button>
      <button onClick={()=> swiper.slideNext()}>
        &gt;
        </button>
    </div>
  )
}

