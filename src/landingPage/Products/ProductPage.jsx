import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import TermAndPolicy from '../TermPolicies';

function ProductPage() {
    return ( 
        <>
            <Navbar></Navbar>
            <br/><br/><br/>
            <h1>Product Page</h1>
            <Footer termPolicy={TermAndPolicy}></Footer>
        </>
     );
}

export default ProductPage;