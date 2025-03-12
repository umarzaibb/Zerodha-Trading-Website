import React from "react";
import TermAndPolicy from "./TermPolicies";

function Footer( {termPolicy} ) {
  return (
    <>
    <div className="main-footer-div">
    <div className="footer-div">
      <div className="footer-lvl2-1">
        <img src="/media/logo.svg"></img>

        <p>
          © 2010 - 2025, Zerodha Broking Ltd.
          <br />
          All rights reserved.
        </p>

        <p className="footer-div-lvl2-0">
          {" "}
          <i class="fa-brands fa-x-twitter"></i>{" "}
          <i class="fa-brands fa-square-facebook"> </i>{" "}
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i><br/>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-telegram"></i>
        </p>
      </div>
      <div className="footer-lvl2-2">
         <h5 className="footer-h5">Company</h5>
         <p className="footer-opt-p">About</p>
         <p className="footer-opt-p">Products</p>
         <p className="footer-opt-p">Pricing</p>
         <p className="footer-opt-p">Referral programme</p>
         <p className="footer-opt-p">Careers</p>
         <p className="footer-opt-p">Zerodha.tech</p>
         <p className="footer-opt-p">Open source</p>
         <p className="footer-opt-p">Press & media</p>
         <p className="footer-opt-p">Zerodha Cares (CSR)</p>
      </div>

      <div className="footer-lvl2-3">
        <h5 className="footer-h5">Support</h5>
        <p className="footer-opt-p">Contact us</p>
        <p className="footer-opt-p">Support portal</p>
        <p className="footer-opt-p">Z-Connect blog</p>
        <p className="footer-opt-p">List of charges</p>
        <p className="footer-opt-p">Downloads & resources</p>
        <p className="footer-opt-p">Videos</p>
        <p className="footer-opt-p">Market overview</p>
        <p className="footer-opt-p">How to file a complaint?</p>
        <p className="footer-opt-p">Status of your complaints</p>
      </div>

      <div className="footer-lvl2-4">
        <h5 className="footer-h5">Account</h5>
        <p className="footer-opt-p">Open an account</p>
        <p className="footer-opt-p">Fund transfer</p>
      </div>
    </div>
    <div>
      {termPolicy?<TermAndPolicy></TermAndPolicy>: null}
    </div>
    </div>
    </>
  );
}

export default Footer;
