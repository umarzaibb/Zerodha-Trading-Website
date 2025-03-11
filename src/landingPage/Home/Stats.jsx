import React from 'react'

function Stats() {
    return ( 
        <>
            <div className='home-stats-div'>

              <div className='home-stats-div-lvl-2'>
                <h3>Trust with confidence</h3>

                <div className='home-stats-inDiv'>
                    <h5>Customer-first always</h5>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                </div>

                <div className='home-stats-inDiv'>
                    <h5>No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                </div>

                <div className='home-stats-inDiv'>
                    <h5>The Zerodha universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>

                <div className='home-stats-inDiv'>
                    <h5>Do better with money</h5>
                    <p>With initiatives like <a href='#'><b>Nudge</b></a> and <a href='#'><b>Kill Switch</b></a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
              </div>
              <div>
              <img src='../../../public/media/ecosystem.png' id='home-eco-img'></img>

                 <div className='home-stats-icon'>
                    <a>Explore our products<i class="fa-solid fa-arrow-right" id='icon-stats'></i></a>

                    <a>Try kite demo<i class="fa-solid fa-arrow-right" id='icon-stats'></i></a>
                 </div>

              </div>
    
            </div>

            <div className='media-coverage-home'>
               <img src='../../../public/media/pressLogos.png'></img>
            </div>
        </>
     );
}

export default Stats;