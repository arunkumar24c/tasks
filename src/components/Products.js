import React from "react";

import { AiFillStar } from "react-icons/ai";

const Products = () => {
  return (
    <div className=" mx-[10rem] my-[3rem]">
      <div className=" flex flex-col items-center justify-center gap-6">
        <p>~ Best Products ~</p>
        <h1>This weeks highlights</h1>
        <p>
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim.
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap  gap-[8rem]">
        <div className=" flex items-center justify-center gap-1 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem] "
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/aval.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Aval Mixture</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/countrysugar.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Country Sugar</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5 ">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/ghee.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>ghee</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/karuppu.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Karupu Kowni Rice</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/ladoo.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Ladoo</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/pudhina.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Pothina Mixture</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5 ">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/pallipati.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Pallapatti Mixture</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/aval.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Aval</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-3 border border-black-600 px-10 py-5">
          <div className="img">
            <img
              className=" w-[7rem]"
              src="https://webvalley.net.in/dailyfresh/web2/assets/images/countrysugar.jpg"
            />
          </div>
          <div className="text flex flex-col gap-2">
            <h5>Country Sugar</h5>
            <div className="star flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>$ 24$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
