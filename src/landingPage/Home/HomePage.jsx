import React from 'react';
import Hero from "./Hero";
import Education from './Education';
import Pricing from "./Pricing"
import Stats from "./Stats";
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import TermAndPolicy from '../TermPolicies';


function HomePage() {
    return ( 
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
            <Footer termPolicy={true}></Footer>
        </>
     );
}

export default HomePage;