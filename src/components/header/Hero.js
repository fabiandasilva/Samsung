import React from "react";

function Hero() {
   return (
      <div className="hero">
         <div className="container-img">
            <img src="https://i.ibb.co/qCHVJLT/hero.png" alt="hero" />
         </div>
         <div className="hero__container-text">
            <h1 className="hero__title">Serie Galaxy A</h1>
            <h5 className="hero__subtitle">Asombroso es para todos</h5>
            <button className="hero-btn">Ver todo</button>
         </div>
      </div>
   );
}

export default Hero;
