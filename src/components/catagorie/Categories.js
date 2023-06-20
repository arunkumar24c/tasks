import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import background1 from "../../assest/banner-1.jpg";
import background2 from "../../assest/banner-2.jpg";
import background3 from "../../assest/banner-3.jpg";
import "./categories.css"
import Sliders from "../slider/Sliders";

const Categories = () => {
  return (
    <div className="categories-container m-[2rem]">
      <Sliders/>
      <div className="contain">
        <div className="image-cat shadow-lg">
          <img src={background1} alt="Image 1" />
          <div className="text-cat flex items-start flex-col gap-4">
            <h3 className="text-lg text-black">Top Offers</h3>
            <h1 className="text-white font-bold">Best Sweets</h1>
            <p className="text-lg text-[blue]">Shop Now</p>
          </div>
        </div>
        <div className="image-cat shadow-lg">
          <img src={background2} alt="Image 2" />
          <div className="text-cat flex items-start flex-col gap-4">
            <h3 className="text-lg text-black">Top Offers</h3>
            <h1 className="text-white font-bold">Best Sweets</h1>
            <p className="text-lg text-[blue]">Shop Now</p>
          </div>
        </div>
        <div className="image-cat shadow-lg">
          <img src={background3} alt="Image 3" />
          <div className="text-cat flex items-start flex-col gap-4">
            <h3 className="text-lg text-black">Top Offers</h3>
            <h1 className="text-white font-bold">Best Sweets</h1>
            <p className="text-lg text-[blue]">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
