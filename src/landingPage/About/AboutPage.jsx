import React from 'react'
import Footer from '../Footer';
import TermAndPolicy from '../TermPolicies';
import Navbar from '../Navbar';

function AboutPage() {
    return ( 
        <>
        <Navbar></Navbar>
        <br/><br/><br/>
        <h1>About Page</h1>
        <Footer termPolicy={TermAndPolicy}></Footer>
        </>
     );
}

export default AboutPage;