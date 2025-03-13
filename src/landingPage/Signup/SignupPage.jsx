import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TermAndPolicy from '../TermPolicies';

function SignupPage() {
    return ( 
        <>
            <Navbar></Navbar>
            <br/><br/><br/>
            <h1>Signup Page</h1>
            <Footer termPolicy={TermAndPolicy}></Footer>
        </>
     );
}

export default SignupPage;