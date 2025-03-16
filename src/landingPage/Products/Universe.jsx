import React from 'react';

function Universe() {
    return ( 
        <div className='Universe-Div'>
            <h3>The Zerodha Universe</h3>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='Brands-Div'>
                <div>
                    <img src='/media/zerodhaFundhouse.png'></img>
                    <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div>
                    <img src='/media/sensibullLogo.svg' style={{"height": "1.9rem"}}></img>
                    <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FI/DII, and more.</p>
                </div>

                <div>
                    <img src='/media/goldenpiLogo.png'></img>
                    <p>Investment Research Platform Offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                <div>
                    <img src='/media/streakLogo.png'></img>
                    <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>

                <div>
                    <img src='/media/smallcaseLogo.png'></img>
                    <p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>

                <div>
                    <img src='/media/dittoLogo.png'></img>
                    <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    <br></br>
                </div>
                <button type="button" class="btn btn-primary home-hero-signup-btn">Sign up for free</button>
            </div>
            <br/><br/>
        </div>
     );
}

export default Universe;