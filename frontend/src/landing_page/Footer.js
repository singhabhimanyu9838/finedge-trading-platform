import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-5">
      <div className="container pb-4">

        <div className="row">

          {/* Brand Section */}
          <div className="col-lg-3 col-sm-12 mb-4">
            <img src="/media/images/logo.png" style={{ width: "150px" }} alt="FinEdge Logo" />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              © 2024 FinEdge Trading Technologies Pvt. Ltd.<br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a className="me-3 text-dark" href="#"><FaFacebookF size={18} /></a>
              <a className="me-3 text-dark" href="#"><FaTwitter size={18} /></a>
              <a className="me-3 text-dark" href="#"><FaLinkedinIn size={18} /></a>
              <a className="text-dark" href="#"><FaInstagram size={18} /></a>
            </div>

            <div className="mt-3">
              <a className="me-3 text-dark" href="#"><FaWhatsapp size={18} /></a>
              <a className="me-3 text-dark" href="#"><FaTelegram size={18} /></a>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-sm-6 mb-4">
            <h5 className="fw-semibold mb-3">Company</h5>
            <a href="#" className="footer-link d-block text-muted mb-2">About Us</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Products</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Pricing</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Careers</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Media & Press</a>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-sm-6 mb-4">
            <h5 className="fw-semibold mb-3">Support</h5>
            <a href="#" className="footer-link d-block text-muted mb-2">Help Center</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Contact Us</a>
            <a href="#" className="footer-link d-block text-muted mb-2">System Status</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Security</a>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-sm-6 mb-4">
            <h5 className="fw-semibold mb-3">Account</h5>
            <a href="#" className="footer-link d-block text-muted mb-2">Open Account</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Trading Platforms</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Investment Plans</a>
            <a href="#" className="footer-link d-block text-muted mb-2">Fund Transfer</a>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="text-muted mt-4" style={{ fontSize: "13px" }}>
          <p>
            Trading in the stock market involves financial risk. Please ensure you understand all risks
            before trading or investing. FinEdge does not provide financial or investment advice.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
