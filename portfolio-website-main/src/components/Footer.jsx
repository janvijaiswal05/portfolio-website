/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Janvi.</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-hackerrank"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Janvi Jaiswal
        </p>
      </div>
    </footer>
  );
}

export default Footer;
