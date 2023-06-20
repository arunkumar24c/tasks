import React from 'react'
import image1 from "../../assest/blog2.jpg"
import image2 from "../../assest/blog3.jpg"
import "./Blog.css"

const Blog = () => {
  return (
    <div className="bg-[#d8d8d8]">
      <div className="flex flex-col items-center justify-center gap-5 m-[0rem]">
        <h2 className="text-[green] mt-20">~ Top Products ~</h2>
        <h1 className="text-[#3f3f8b]">Recently Sold Items</h1>
        <p className="text-[#888585]">
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim.
        </p>
      </div>

      <div className="flex items-center justify-center gap-[2rem]">
        <div className=" shadow-2xl mt-7 mb-10">
          <div className="">
            <img src={image1} className="w-[35rem] h-[20rem]" />
          </div>
          <div className="flex flex-col gap-5 p-8 bg-white">
            <h3 className="font-bold text-indigo-900">Best Savouries</h3>
            <p className="w-[28rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              necessitatibus ...
            </p>
            <p className="text-sm font-bold text-[green]">READ MORE</p>
          </div>
        </div>

        <div className=" shadow-2xl mt-7 mb-10">
          <div className="">
            <img src={image2} className="w-[35rem] h-[20rem]" />
          </div>
          <div className="flex flex-col gap-5 p-8 bg-white">
            <h3 className="font-bold text-indigo-900">Best Savouries</h3>
            <p className="w-[28rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              necessitatibus ...
            </p>
            <p className="text-sm font-bold text-[green]">READ MORE</p>
          </div>
        </div>

        <div className=" shadow-2xl mt-7 mb-10">
          <div className="">
            <img src={image1} className="w-[35rem] h-[20rem]" />
          </div>
          <div className="flex flex-col gap-5 p-8 bg-white">
            <h3 className="font-bold text-indigo-900">Best Savouries</h3>
            <p className="w-[28rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              necessitatibus ...
            </p>
            <p className="text-sm font-bold text-[green]">READ MORE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog