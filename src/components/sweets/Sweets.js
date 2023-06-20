import React from "react";
import backgrounds from "../../assest/coundpwn-bg-1.png";
import ".././sweets/Sweet.css"

const Sweets = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}
      className="imgs-container flex flex-col gap-4 items-start justify-center pl-[30rem]"
    >
      <h3 className="text-white text-xl">~Deals of the Day~</h3>
      <h1 className="text-white text-4xl font-bold">
        Indian Sweets
        <br />
        Fresh Farm Product
      </h1>
      <p className="text-white text-lg">
        The liber tempor cum soluta nobis eleifend option congue <br />
        doming quod mazim placerat facere possum assam going through.
      </p>
      <p className="text-white text-lg font-bold">HURRY UP! OFFER END IN:</p>
      <p className="text-[#bbe9a9]">
        {" "}
        <span className="text-5xl text-white">0</span> DAYS{" "}
        <span className="text-5xl text-white ml-3">0</span>HOUR{" "}
        <span className="text-5xl text-white ml-3">0</span> MINUTE{" "}
        <span className="text-5xl text-white ml-3">00</span> SECOND
      </p>
      <div className="flex justify-center">
        <button
          className="rounded-full text-white 
        w-40 bg-[#86cc6a] h-9 hover:bg-white hover:text-[#86cc6a]  "
        >
          Shop Now
        </button>
        <button
          className="rounded-full text-white 
        w-40 bg-[#86cc6a] h-9 ml-9 hover:bg-white hover:text-[#86cc6a] "
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default Sweets;
