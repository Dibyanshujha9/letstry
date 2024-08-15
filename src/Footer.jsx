import React from "react";

const Footer = () => {
  return (
    <>
       {/* <footer className="w-100 bg-light text-center">  */}
      <footer className="w-100  text-center">
{/* new  */}
<div className="footer-social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/let-s-trys/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/mail.letstry?utm_source=qr&igsh=MWg0NDUydm9mdHBocg==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
{/* new  */}
        <p>© 2024 Let's Try. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;

