import React from 'react'
import Sold from './sold/Sold';

const Title = () => {
  return (
    <div className='bg-[#e9e9e9]'>
      <div
        className="text-center mt-7 flex 
     text-center justify-center flex-col gap-7"
      >
        <h2 className="text-[green] mt-20">~ Top Products ~</h2>
        <h1 className="text-[#3f3f8b]">Recently Sold Items</h1>
        <p className="text-[#888585]">
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim.
        </p>
      </div>
      <div className=''>
        <Sold />
      </div>
    </div>
  );
}

export default Title