import React from 'react'

function Hero() {
    return ( 
        <>
            <h1 className='pricing-main-h1'>Charges</h1>
            <p className='pricing-main-p'>List of all charges and taxes</p>
            <div className='Pricing-hero-div'>
                <div>
                   <img src="/media/pricing0.svg"></img>
                   <h3>Free equity delivery</h3>
                   <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div>
                <img src="https://zerodha.com/static/images/other-trades.svg"></img>
                   <h3>Intraday and F&O trades</h3>
                   <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div>
                   <img src="/media/pricing0.svg"></img>
                   <h3>Free direct MF</h3>
                   <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </>
     );
}

export default Hero;