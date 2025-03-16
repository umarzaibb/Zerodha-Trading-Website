import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import TermAndPolicy from '../TermPolicies';
import Hero from './Hero';
import LeftProductSection from './LeftProductSection';
import RightProductSection from './RightProductSection';
import Universe from './Universe';

function ProductPage() {
    let p1='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.';
 
    let p2='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.';

    let p3='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.';

    let p4='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.';

    let p5='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.';

    let button1= [
        "Try demo →",
        "Learn more →"
    ]
    return ( 
        <>
            <Navbar></Navbar>
            <br/><br/><br/>
            <Hero></Hero>
            <LeftProductSection title={"Kite"} discription={p1} imgLink={"/media/kite.png"}  button={button1} downloadLink={true}></LeftProductSection>

            <RightProductSection title={"Console"} discription={p2} imgLink={"/media/console.png"}  button={["Learn more →"]} height={"29rem"}></RightProductSection>

            <LeftProductSection title={"Coin"} discription={p3} imgLink={"/media/coin.png"}  button={["Coin →"]} downloadLink={true}></LeftProductSection>

            <RightProductSection title={"Kite Connect API"} discription={p4} imgLink={"/media/kiteconnect.png"}  button={["Kite Connect →"]} height={"20rem"} marginTop={"5.1rem"}></RightProductSection>


            <LeftProductSection title={"Varsity mobile"} discription={p5} imgLink={"/media/varsity.png"}  button={[]} downloadLink={true} height={"24rem"} marginTop={"7rem"}></LeftProductSection>     
            
            <p className='end-p-productPage'>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</p>  

            <Universe></Universe>   

            <Footer termPolicy={TermAndPolicy}></Footer>
        </>
     );
}

export default ProductPage;