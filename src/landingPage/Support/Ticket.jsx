import React from "react";

function Ticket() {
  return (
    <>
     <h2 className="support-main-h">To create a ticket, select a relevant topic</h2>
     <div className="support-ticket">
      <div>
        <h3><i class="fa-regular fa-square-plus"></i>Account Opening</h3>
        <a href="#">Resident individual</a>
        <a href="#">Minor</a>
        <a href="#">Non Resident Indian (NRI)</a>
        <a href="#">Company, Partnership, HUF and LLP</a>
        <a href="#">Glossary</a>
      </div>
      <div>
        <h3><i class="fa-regular fa-user"></i>Your Zerodha Account</h3>
        <a href="#">Your Profile</a>
        <a href="#">Account modification</a>
        <a href="#">
          Client Master Report (CMR) and Depository Participant (DP)
        </a>
        <a href="#">Nomination</a>
        <a href="#">Transfer and conversion of securities</a>
      </div>
      <div>
        <h3><i class="fa-solid fa-chart-simple"></i>Kite</h3>
        <a href="#">IPO</a>
        <a href="#">Trading FAQs</a>
        <a href="#">Margin Trading Facility (MTF) and Margins</a>
        <a href="#">Charts and orders</a>
        <a href="#">Alerts and Nudges</a>
      </div>
      <div>
        <h3><i class="fa-solid fa-id-card"></i>General</h3>
        <a href="#">Funds</a>
        <a href="#">Add money</a>
        <a href="#">Withdraw money</a>
        <a href="#">Add bank accounts</a>
        <a href="#">eMandates</a>
      </div>
      <div>
        <h3><i class="fa-solid fa-chart-pie"></i>Console</h3>
        <a href="#">Portfolio</a>
        <a href="#">Corporate actions</a>
        <a href="#">Funds statement</a>
        <a href="#">Reports</a>
        <a href="#">Profile</a>
        <a href="#">Segments</a>
      </div>
      <div>
        <h3><i class="fa-solid fa-coins"></i>Coin</h3>
        <a href="#">Understanding mutual funds and Coin</a>
        <a href="#">Coin app</a>
        <a href="#">Coin web</a>
        <a href="#">Transactions and reports</a>
        <a href="#">National Pension Scheme (NPS)</a>
      </div>
    </div>
    </>
  );
}


export default Ticket;
