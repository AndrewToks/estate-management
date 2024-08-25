import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">

    <div className=" flexColStart hero-left">
    <div className="hero-title">
      <div className="orange-circle" />
      <h1 style={{color:"#fff"}}>
       The home you are <br /> 
       dreaming of is waiting<br /> 
       for you
      </h1>

      <div className="hero-des">
        <p className='secondaryText' >
            Find a variety of properties that suit 
            you very easily.
        </p>
        <p className='secondaryText'>
          Forget all difficulties in finding a residence for you.
        </p>
      </div>

    </div>
    </div>

<div className=" flexCenter hero-right">
   <div className=" image-container">
    <img src="./Capture.png" alt="home"  />
   </div>
   
</div>
        </div>
      </section>
    </div>
  )
}

export default Hero
