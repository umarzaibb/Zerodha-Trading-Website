import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import TermAndPolicy from '../TermPolicies';
import Hero from './Hero';
import Brokerage from './Brokage';
import Charges from './Charges';

function PricingPage() {
    return ( 
        <>
        <Navbar></Navbar>
        <br/><br/><br/>
        <Hero></Hero>
        <Brokerage></Brokerage>
        <Charges></Charges>
        <Footer termPolicy={TermAndPolicy}></Footer>
        </>
     );
}

export default PricingPage;