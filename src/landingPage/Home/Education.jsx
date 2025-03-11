import React from 'react'

function Education() {
    return ( 
        <>
            <div className='education-home-div'>
                <img src='../../../public/media/education.svg'></img>
                <div className='education-side-paragraph'>
                    <h3 className='education-heading'>Free and open market education</h3>
                    <p className='educational-p'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='educational-a'>Varsity<i class="fa-solid fa-arrow-right" id='icon-stats'></i></a>

                    <p  className='educational-p'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='educational-a mb-4'>TradingQ&A<i class="fa-solid fa-arrow-right" id='icon-stats'></i></a>
                </div>
            </div>
        </>
     );
}

export default Education;