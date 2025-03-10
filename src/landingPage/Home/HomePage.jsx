import React from 'react';
import Hero from "./Hero";
import Education from './Education';
import Pricing from "./Pricing"
import Stats from "./Stats";
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
        </>
     );
}

export default HomePage;