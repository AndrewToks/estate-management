import React from 'react'
import './Hero.css'
import { HiLocationMarker} from 'react-icons/hi'

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">

    <div className=" flexColStart hero-left">
    <div className="hero-title">
      <div className="orange-circle" />
      <h1>
       The home you are <br /> 
       dreaming of is waiting<br /> 
       for you
      </h1>

      <div className="hero-des">
        <p className='secondaryText'>
            Find a variety of properties that suit 
            you very easilty.
        </p>
        <p className='secondaryText'>
          Forget all difficulties in finding a residence for you.
        </p>

        <div className="flexCenter search-bar">
          <HiLocationMarker color="var(--blue)" size={25} />
          <input type="text"  />
          <button className='button'>Search</button>
        </div>

          
      </div>

    </div>
    </div>

<div className=" flexCenter hero-right">
   <div className="image image-container">
    <img src="././Arigbabola.png" alt=""  />
   </div>
   
</div>
        </div>
      </section>
    </div>
  )
}

export default Hero
