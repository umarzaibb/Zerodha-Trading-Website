import React from 'react'

function Hero() {
    return ( 
        <div className='SupportPageDiv'>
        <div className='support-child-div'>
            <h3 className='support-h3'>Support Portal</h3>
            <h3 className='support-h3'>Search for an answer or browse help topics to create a ticket</h3>
            <div class="input-group support-search mb-3">
             <input type="text" class="form-control" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
             <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
           </div>
           <a href="#" className='support-a'>Track account opening</a>
           <a href="#" className='support-a'>Track segment activation</a>
           <a href="#" className='support-a'>Intraday margins</a>
           <a href="#" className='support-a'>Kite user manual</a>

        </div>
        <div className='support-side-div'>
            <div className='trackticket'>
                <a href='#' className='support-a'>Track tickets</a>
            </div>
            <div>
                <h3 className='support-feature-h3'>Features</h3>
                <span className='support-a-feature'>1. <a href='#' className='support-a-feature'>MCX Crude option contract expiry - March 2025</a></span><br/><br/>
                <span className='support-a-feature'>2. <a href='#' className='support-a-feature'>Current Takeovers and Delisting – March 2025</a></span>
            </div>
        </div>
    </div>
     );
}

export default Hero;