import React, { useState } from "react";
 import "./Sold.css" 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Sold = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([0, 1, 2, 3]);
  const totalImages = 5;

  const imageData = [
    {
      id: 0,
      url: "https://webvalley.net.in/dailyfresh/web2/assets/images/ladoo.jpg",
      sub: "Sweets",
      title: "ladoo",
      price: "22 $",
    },

    {
      id: 1,
      url: "https://webvalley.net.in/dailyfresh/web2/assets/images/karuppu.jpg",
      sub: "daily staplies",
      title: "karuppu",
      price: "22 $",
    },

    {
      id: 2,
      url: "https://webvalley.net.in/dailyfresh/web2/assets/images/pallipati.jpg",
      sub: "savories",
      title: "pallipati",
      price: "22 $",
    },

    {
      id: 3,
      url: "https://webvalley.net.in/dailyfresh/web2/assets/images/countrysugar.jpg",
      sub: "sweets",
      title: "countrysugar",
      price: "22 $",
    },

    {
      id: 4,
      url: "https://webvalley.net.in/dailyfresh/web2/assets/images/pudhina.jpg",
      sub: "daily stiples",
      title: "pudina",
      price: "22 $",
    },

    {
      id: 5,
      url: "https://webvalley.net.in/dailyfresh/web2/assets/images/ghee.jpg",
      sub: "essetial oil",
      title: "ghee",
      price: "22 $",
    },

    
  ];

  const nextImages = () => {
    const newIndex = (currentIndex + 4) % totalImages;
    setCurrentIndex(newIndex);
    setDisplayedImages([
      newIndex,
      (newIndex + 1) % totalImages,
      (newIndex + 2) % totalImages,
    ]);
  };

  const prevImages = () => {
    const newIndex = (currentIndex - 4 + totalImages) % totalImages;
    setCurrentIndex(newIndex);
    setDisplayedImages([
      (newIndex + totalImages - 2) % totalImages,
      (newIndex + totalImages - 1) % totalImages,
      newIndex,
    ]);
  };

  const renderImages = () => {
    return displayedImages.map((index) => {
      const { id, url, title, price, sub } = imageData[index];
      return (
        <div className="slider-img  mr-6 bg-white">
          <div className="slider">
            <img key={id} src={url} alt={`Image ${id}`} className="img3" />
            <p className="text-lg text-green-600">{sub}</p>
            <h1 className=" text-3xl">{title}</h1>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>{price}</p>
            <div className="buttons flex items-center gap-10">
              <button className="px-[20px] py-[10px] text-white font-bold rounded-full bg-[#1af01a]">
                Add to Cart
              </button>
              <h1>
                <MdFavoriteBorder size={30}/>
              </h1>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" relative">
      <div className="slider-container">{renderImages()}</div>
      <button className=" absolute top-[20rem] left-10" onClick={prevImages}>
        <AiFillCaretLeft />
      </button>
      <button className=" absolute top-[20rem] right-12 " onClick={nextImages}>
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Sold;
