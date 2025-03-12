import React from 'react'

function Hero() {
    return ( 
        <>
           <img src='/media/homeHero.png' id='hero-Img-home'></img>

           <div className='home-hero-div'>
            <h1 className='heading-openAccount'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button type="button" class="btn btn-primary home-hero-signup-btn">Sign up for free</button>
           </div>
        </>
     );
}

export default Hero;