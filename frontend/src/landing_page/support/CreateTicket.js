import React from "react";

function CreateTicket() {
  return (
    <div className="container" id="support-ticket">
      <div className="row p-5 mt-5 border-bottom">
        <h1 className="fs-3 text-center mb-5">
          To create a support ticket, select a relevant category
        </h1>

        {/* Account Opening */}
        <div className="col-lg-4 col-sm-6 p-3 mb-4">
          <h4><i className="fa-solid fa-circle-plus me-2"></i>Account Opening</h4>
          <div className="mt-2">
            <a href="#" className="d-block text-muted">Resident Individual</a>
            <a href="#" className="d-block text-muted">Minor Account</a>
            <a href="#" className="d-block text-muted">NRI Account</a>
            <a href="#" className="d-block text-muted">Corporate / Business Account</a>
            <a href="#" className="d-block text-muted">Partnership / LLP / HUF</a>
            <a href="#" className="d-block text-muted">Documentation Guidelines</a>
          </div>
        </div>

        {/* Your FinEdge Account */}
        <div className="col-lg-4 col-sm-6 p-3 mb-4">
          <h4><i className="fa-solid fa-user me-2"></i>Your FinEdge Account</h4>
          <div className="mt-2">
            <a href="#" className="d-block text-muted">Login & Password Issues</a>
            <a href="#" className="d-block text-muted">Profile / KYC Update</a>
            <a href="#" className="d-block text-muted">Bank & DP Details</a>
            <a href="#" className="d-block text-muted">Account Modification</a>
            <a href="#" className="d-block text-muted">Transfer & Conversion of Shares</a>
          </div>
        </div>

        {/* Trading & Platforms */}
        <div className="col-lg-4 col-sm-6 p-3 mb-4">
          <h4><i className="fa-solid fa-chart-line me-2"></i>Trading Platforms</h4>
          <div className="mt-2">
            <a href="#" className="d-block text-muted">Web & Mobile Login Help</a>
            <a href="#" className="d-block text-muted">Order Placement Issues</a>
            <a href="#" className="d-block text-muted">Charting & Indicators</a>
            <a href="#" className="d-block text-muted">Watchlists & UI Settings</a>
            <a href="#" className="d-block text-muted">Platform Demo Videos</a>
          </div>
        </div>

        {/* Funds */}
        <div className="col-lg-4 col-sm-6 p-3 mb-4">
          <h4><i className="fa-solid fa-money-check-dollar me-2"></i>Funds</h4>
          <div className="mt-2">
            <a href="#" className="d-block text-muted">Add Money</a>
            <a href="#" className="d-block text-muted">Withdraw Funds</a>
            <a href="#" className="d-block text-muted">Add / Change Bank Account</a>
            <a href="#" className="d-block text-muted">UPI / eMandates</a>
            <a href="#" className="d-block text-muted">Fund Settlement Timelines</a>
          </div>
        </div>

        {/* Console (Reports, Holdings, P&L) */}
        <div className="col-lg-4 col-sm-6 p-3 mb-4">
          <h4><i className="fa-solid fa-file-invoice-dollar me-2"></i>Portfolio & Reports</h4>
          <div className="mt-2">
            <a href="#" className="d-block text-muted">P&L and Tax Reports</a>
            <a href="#" className="d-block text-muted">Holdings & Positions</a>
            <a href="#" className="d-block text-muted">Contract Notes</a>
            <a href="#" className="d-block text-muted">Corporate Actions</a>
            <a href="#" className="d-block text-muted">Export Data</a>
          </div>
        </div>

        {/* Mutual Funds */}
        <div className="col-lg-4 col-sm-6 p-3 mb-4">
          <h4><i className="fa-solid fa-coins me-2"></i>Mutual Funds</h4>
          <div className="mt-2">
            <a href="#" className="d-block text-muted">Direct Mutual Fund Investment</a>
            <a href="#" className="d-block text-muted">SIP Setup & Modification</a>
            <a href="#" className="d-block text-muted">Switch / Redeem</a>
            <a href="#" className="d-block text-muted">NAV & Settlement</a>
            <a href="#" className="d-block text-muted">Taxation FAQs</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
