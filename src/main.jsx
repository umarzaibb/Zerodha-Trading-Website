import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "../src/landingPage/Home/HomePage";
import {BrowserRouter, Routes,Route} from "react-router";
import PricingPage from './landingPage/Pricing/PricingPage';
import ProductPage from './landingPage/Products/ProductPage';
import SignupPage from './landingPage/Signup/SignupPage';
import AboutPage from './landingPage/About/AboutPage';
import SupportPage from './landingPage/Support/SupportPage';
import NotFound from './landingPage/notFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
