import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function NotFound() {
    let style={"height": "60vh",
        "width": "40vw" ,
        "margin": "20vh 30vw",
         "backgroundColor": "#478fe6"}
    return ( 
        <>
        <Navbar></Navbar>
        <div >
        <img src='/media/404.jpg' style={style}></img>
        </div>
        <Footer></Footer>
        </>
     );
}

export default NotFound;