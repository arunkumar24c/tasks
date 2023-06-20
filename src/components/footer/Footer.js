import React from "react";
import bg1 from "../../assest/footer-shape-1.svg";
import copy from "../../assest/footer-payment.png";

import { FiFacebook, FiTwitter, FiYoutube, FiLink } from "react-icons/fi";
import { AiOutlineSkype, AiFillSafetyCertificate, AiFillAccountBook } from "react-icons/ai";
import { FaShippingFast, FaHandsHelping } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="h-[45rem] text-white"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}
    >
      {/* 1st card */}
      <div className="flex item-center justify-center text-center gap-[10rem] p-10 ">
        {/* 1st */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <p>
            <FaShippingFast className="text-2xl" />
          </p>
          <h2>FAST DELIVERY</h2>
          <h1>100% Safe Delivery</h1>
        </div>
        {/* 2nd */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <p className="text-2xl" >
            <AiFillAccountBook   />
          </p>
          <h2>SAFE PAYMENT </h2>
          <h1>100% Secure Payment</h1>
        </div>
        {/* 3rd */}
        <div className="mt-14 flex flex-col items-center gap-3">
         <p><FaHandsHelping className="text-2xl" /></p>
          <h2>HELP CENTER</h2>
          <h1> Dedicated 24/7 Support</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[100rem]" />
      </div>
      {/* 2nd card */}
      <div className="footer-log flex items-center justify-around my-[3rem]">
        {/* 1st */}
        <div>
          {/* logo */}
          <div className="logo1 flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <img
                src="https://webvalley.net.in/dailyfresh/web2/assets/images/logo.png"
                className="w-20"
                alt="logo"
              />
              <h1 className="text-[1.5rem] text-[green]">Daily Fresh</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ea
              quis nostrum
              <br /> dicta nisi ducimus nihil. Laborum eligendi doloribus
              placeat eius exercitationem
              <br /> provident debitis blanditiis, natus quos quasi aliquam
              itaque. Lorem ipsum dolor sit
              <br /> amet, consectetur adipisicing elit.
            </p>
            <h2>Social Media:</h2>
            <div className="icon-containers flex gap-5">
              <p>
                <FiFacebook />
              </p>
              <p>
                <FiTwitter />
              </p>
              <p>
                <FiYoutube />
              </p>
              <p>
                <FiLink />
              </p>
              <p>
                <AiOutlineSkype />
              </p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-3xl">Category</h1>
          <p>Savouries</p>
          <p>Sweet</p>
          <p>Daily Staples</p>
          <p>Edible Oil & Ghee</p>
          <p>Coffee</p>
          <p>Honey & Sweetners</p>
        </div>
        {/* 3rd */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Our Newsletter</h2>
          <p>
            Subscribe to the Daily Fresh mailing list to receive <br />
            updates
            <br /> on new arrivals & other information.
          </p>
          <input
            className="rounded-l px-4 py-2 border-t border-b border-l text-gray-800 border-gray-300 bg-white"
            type="text"
            placeholder="Your email address..."
          />
          <button className="rounded-r px-4 py-2 bg-green-500 text-white font-bold">
            SUBSCRIBE
          </button>
          <p>
            <label>
              <input type="checkbox" /> I accept terms & conditions & privacy
              policy
            </label>
          </p>
        </div>
      </div>
      <hr className="" />
      {/* 3rd */}
      <div className="flex items-center justify-between p-10">
        <p>
          Copyright © Daily Fresh | All Rights Reserved. Design by Jayam Web
          Solutions.
        </p>
        <img src={copy} alt="" className="w-[20rem]" />
      </div>
    </div>
  );
};

export default Footer;
