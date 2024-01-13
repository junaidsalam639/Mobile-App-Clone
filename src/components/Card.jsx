import React from "react";
import { GiJuggler } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaCloudShowersWater } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className="container mx-auto lg:px-24 md:px-10 sm:px-6 text-center mt-[-60px] mb-8">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 bg-[#FFFFFF] shadow-xl mt-5 w-full">
          <div className="px-5 py-14 sm:py-10 xs:py-10">
            <div className='flex justify-center items-center text-blue-600'>
            <GiJuggler size={44} />
            </div>
            <h2 className="text-2xl font-medium font-sans">Themes Made Easy</h2>
            <p className="text-gray-600 font-[500] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias.</p>
          </div>
          <div className="px-5 py-14 sm:py-10 xs:py-10">
          <div className='flex justify-center items-center text-blue-600'>
            <MdOutlineWbSunny size={44} />
          </div>
            <h2 className="text-2xl font-medium font-sans">Powerful Design</h2>
            <p className="text-gray-600 font-[500] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias.</p>
          </div>
          <div className="px-5 py-14 sm:py-10 xs:py-10">
          <div className='flex justify-center items-center text-blue-600'>
            <FaCloudShowersWater size={44} />
          </div>
            <h2 className="text-2xl font-medium font-sans">Creative Content</h2>
            <p className="text-gray-600 font-[500] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
