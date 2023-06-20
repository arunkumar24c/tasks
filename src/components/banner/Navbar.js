import React, { useState } from "react";
import "./navbar.css";
import Cart from "../cart/Cart";
import imageS from "../../assest/karuppu.jpg"

const Navbar = () => {
 
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCartToggle = () => {
    setCartVisible(!isCartVisible);
  };

  const handleCartClose = () => {
    setCartVisible(false);
  };

  return (
    <div className="logo">
      <div className="containers">
        <div className="right-containers">
          <img
            src="https://webvalley.net.in/dailyfresh/web2/assets/images/logo.png"
            alt=""
            className="logos"
          />
          <h1>Daily Fresh</h1>
        </div>
        <div className="left-containers">
          <div className="left-content">
            <p className="lists">Savouries</p>
            <p className="lists">Sweets</p>
            <p className="lists">Daily Staples</p>
            <p className="lists">Edible Oil & Ghee</p>
            <p className="lists">Coffee</p>
            <p className="lists">Honey & Sweetners</p>
          </div>
          <div className="right-content">
            <div className="img-content">
              <img
                src="https://static.thenounproject.com/png/2946467-200.png"
                alt=""
                className="img1"
              />
              <img
                src="https://thenounproject.com/api/private/icons/5502389/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                alt=""
                className="img1"
              />
              <p className="mt-2">Hi!Jayam!</p>
              <div className="side-cart">
                {isCartVisible ? (
                  <img
                    src="https://thenounproject.com/api/private/icons/1330040/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23FF0000&foregroundOpacity=1&imageFormat=png&rotation=0"
                    alt=""
                    className="arrow-icon"
                    onClick={handleCartClose}
                  />
                ) : (
                  <img
                    src="https://thenounproject.com/api/private/icons/3570656/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                    alt=""
                    className="img1 hidden"
                    onClick={handleCartToggle}
                  />
                )}
              </div>
              <div>
                <div class="navbar">
                  <input type="checkbox" id="nav-toggle" className="hidden mb-2" />
                  <label for="nav-toggle" class="nav-toggle-label">
                    <img
                      src="https://thenounproject.com/api/private/icons/3570656/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                      alt=""
                      className="img1 "
                    />
                  </label>
                  <nav class="nav-menu">
                    <div class="close-icon">
                      <label for="nav-toggle" class="close-icon-label">
                        &times;
                      </label>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-around bg-slate-200 p-5">
                        <img src={imageS} className="w-[5rem]" />
                        <div>
                          <h3>Sweets</h3>
                          <p>1* 20$</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-around bg-slate-200 p-5">
                        <img src={imageS} className="w-[5rem]" />
                        <div>
                          <h3>Sweets</h3>
                          <p>1* 20$</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-around bg-slate-200 p-5">
                        <img src={imageS} className="w-[5rem]" />
                        <div>
                          <h3>Sweets</h3>
                          <p>1* 20$</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[21rem]">
                      <div className="flex items-center justify-between my-5">
                        <h3>SubTotal : </h3>
                        <p>$300</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <button className="px-[20px] py-[10px] text-white font-bold rounded-full bg-[#69d2ff]">
                          View Cart
                        </button>
                        <button className="px-[20px] py-[10px] text-white font-bold rounded-full bg-[#1af01a]">
                          CheckOut
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
