import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.unsplash.com/photo-1609540969455-ad5ea19be121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1536304575888-ccb70eeef59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[60vh] w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] flex transition-transform duration-1000"
        >
          <div className=" relative">
            <img
              className="w-screen h-[50vh] object-cover px-8 py-3 shadow-md"
              src={data[0]}
              alt="ImageOne"
              loading="priority"
            />
            <div className=" absolute top-[7rem] left-[10rem] text-white flex flex-col items-start gap-5">
              <p className="text-[green] text-lg">
                Amazing deals and discounts
              </p>
              <h1 className="text-[#8080ff] text-4xl font-bold">
                Eat healthy be <br /> Helthy{" "}
              </h1>
              <p>
                prsention material matters . hadhauidh <br /> hiudhiuhq duagdg
                ankjah agdaJJ
              </p>
              <button className="bg-[green] px-5 py-3 rounded-full">
                Shop Now...
              </button>
            </div>
          </div>
          <div className=" relative">
            <img
              className="w-screen h-[50vh] object-cover px-8 py-3 shadow-md"
              src={data[1]}
              alt="ImageOne"
              loading="priority"
            />
            <div className=" absolute top-[7rem] left-[10rem] text-white flex flex-col items-start gap-5">
              <p className="text-[green] text-lg">
                Amazing deals and discounts
              </p>
              <h1 className="text-[#8080ff] text-4xl font-bold">
                Eat healthy be <br /> Helthy{" "}
              </h1>
              <p>
                prsention material matters . hadhauidh <br /> hiudhiuhq duagdg
                ankjah agdaJJ
              </p>
              <button className="bg-[green] px-5 py-3 rounded-full">
                Shop Now...
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 top-[25rem]">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
