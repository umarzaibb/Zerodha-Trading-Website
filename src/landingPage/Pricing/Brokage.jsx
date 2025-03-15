import React from "react";

function Brokerage() {
  return (
    <>
    <h4 className="brokage-main-heading"><span>Calculate your costs upfront</span> using our brokerage calculator</h4><br></br>
      <h5 className="brokage-lvl2-heading">Charges Explained</h5>
    <div className="brokerage-div">

      <div>
        <h6>Securities/Commodities Transaction Tax</h6>
        <p>
          Tax by the government when transacting on the exchanges. Charged as
          above on both buy and sell sides when trading equity delivery. Charged
          only on selling side when trading intraday or on F&O.
        </p>
        <p>
          When trading at Zerodha, STT/CTT can be a lot more than the brokerage
          we charge. Important to keep a tab.
        </p>
      </div>

      <div>
        <h6>Transaction/Turnover Charges</h6>
        <p>
          Charged by exchanges (NSE, BSE, MCX) on the value of your
          transactions:
        </p>
        <ul>
          <li>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f. 01.01.2016.
          </li>
          <li>
            Transaction charges in SS and ST groups to ₹1,00,000 per crore of
            gross turnover.
          </li>
          <li>
            BSE revised transaction charges for group A, B and other
            non-exclusive scripts (non-exclusive scripts from group E, F, FC, G,
            GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </li>
          <li>
            Transaction charges in M, MT, TS and MS groups to ₹275 per crore of
            gross turnover.
          </li>
        </ul>
      </div>

      <div>
        <h6>Call & Trade</h6>
        <p>
          Additional charges of ₹50 per order for orders placed through a dealer
          at Zerodha including auto square off orders.
        </p>
      </div>

      <div>
        <h6>Stamp Charges</h6>
        <p>
          Stamp charges by the Government of India as per the Indian Stamp Act
          of 1899 for transacting in instruments on the stock exchanges and
          depositories.
        </p>
      </div>

      <div>
        <h6>NRI Brokerage Charges</h6>
        <ul>
          <li>₹100 per order for futures and options.</li>
          <li>
            For a non-PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </li>
        </ul>
      </div>

      <div>
        <h6>Account with Debit Balance</h6>
        <p>
          If the account is in debit balance, any order placed will be charged
          ₹40 per executed order instead of ₹20 per executed order.
        </p>
      </div>

      <div>
        <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
        <ul>
          <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
          <li>Options - ₹50 per crore + GST traded value (premium value).</li>
          <li>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </li>
        </ul>
      </div>

      <div>
        <h6>Margin Trading Facility (MTF)</h6>
        <ul>
          <li>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
          </li>
          <li>
            MTF Brokerage: 0.3% or ₹20/executed order, whichever is lower.
          </li>
          <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
        </ul>
      </div>
    </div>

    <div className="disclaimer-div">
        <h6>Disclaimer</h6>
        <p>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients opting to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges.
        </p>
        <p>
          Brokerage will not exceed the rates specified by SEBI and other
          regulatory charges will be levied at actuals. Brokerage is also
          charged on expired, exercised, and assigned options contracts. Free
          investments are available to you as well.
        </p>
        <p>
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for netted off positions in physically
          settled contracts.
        </p>
      </div>
    </>
  );
}

export default Brokerage;
