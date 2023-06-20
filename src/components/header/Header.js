import React from "react";
import "../../components/header/header.css"

const Header = () => {
  return <div>
    <div className="headers">
      <div className="container">
        <div className="row-container">
            <div className="top">
              <div>
                  <span>Free Shipping!! <strong className="strong"> For Orders Value above 1000 INR!!!</strong></span>
              </div>
            </div>
            <div className="right">
            <div className="header-right ">
                  <div className="link-container">
                      <p className="p">About Us</p><span className="span">|</span>
                    <p className="p">Contact Us</p><span className="span">|</span>
                    <p className="p">Blog</p><span className="span">|</span>
                    <p className="p">Order Tracking</p><span className="span">|</span>
                    <p className="p">FAQs</p>
                  </div>
                  
              </div>
            </div>
        </div>
      </div>
  </div>
  </div>;
};

export default Header;
