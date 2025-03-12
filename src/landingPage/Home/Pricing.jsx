import React from 'react'

function Pricing() {
    return (
      <>
        <div className='home-pricing-div'>
          <div>
            <h3>Unbeatable pricing</h3>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <div className='see-pricing-icon' >
              <a>
                See pricing
                <i class="fa-solid fa-arrow-right" id="icon-stats"></i>
              </a>
            </div>
          </div>
          <div className='pricing-side-div'>
            <img src="/media/pricing0.svg"></img>
            <p className='pricing-imgSide-paragraph'>Free account opening</p>

            <img src="/media/pricing0.svg"></img>
            <p className='pricing-imgSide-paragraph'> Free equity delivery and direct mutual funds</p>
            
            <img src="https://zerodha.com/static/images/other-trades.svg"></img>
            <p className='pricing-imgSide-paragraph'> Intraday and F&O</p>
         

          </div>

        </div>
      </>
    );
}

export default Pricing;