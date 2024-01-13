import React from 'react'
import { BsBookmark } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { BsActivity } from "react-icons/bs";
import { AiOutlineControl } from "react-icons/ai";


const Section03 = () => {
  return (
    <>
        <>
        <div className="py-8">
        <div className="grid justify-center py-8 px-4">
          <p className="text-4xl font-light text-center">An Interface For Lifestyle</p>
          <p className="text-base text-gray-500 mt-4">Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks.</p>
        </div> 
        <div className="grid mt-8  sm:grid-cols-1 md:grid-cols-1  xl:grid-cols-2 lg:grid-cols-2 items-center gap-6">
          <div className="">
            <img
              src="https://technext.github.io/small-apps/images/feature/iphone-ipad.jpg"
              alt="phone"
            />
          </div>
          <div className="scond bg-white rounded xl:mr-24 lg:mr-10 py-16 p-6 shadow-Primaryshadow">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
              <div className="grid justify-center text-center">
                <h1 className="grid justify-center"><BsBookmark size={18} className=" text-blue-500" /></h1>
                <p className="mt-2 font-para text-heading font-light">Easy Prototyping</p>
                 <div className="w-56 mt-1"><h3 className=" text-para font-primaryFont  text-gray-500 leading-6">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</h3></div>
              </div>
 
              <div className="grid justify-center text-center mt-8 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
                <h1 className="grid justify-center">< BsActivity size={18} className=" text-blue-500" /></h1>
                <p className="mt-2 font-para text-heading font-light">Sensor Bridge</p>
                 <div className="w-56 mt-1"><h3 className=" text-para font-primaryFont  text-gray-500 leading-6">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</h3></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mt-12 ">
              <div className="grid justify-center text-center">
                <h1 className="grid justify-center"><BsBarChartLine size={18} className=" text-blue-500" /></h1>
                <p className="mt-2 font-para text-heading font-light">Strategist</p>
                 <div className="w-56 mt-1"><h3 className=" text-para font-primaryFont  text-gray-500 leading-6">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</h3></div>
              </div>
 
              <div className="grid justify-center text-center mt-8 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
                <h1 className="grid justify-center"><AiOutlineControl size={18} className=" text-blue-500" /></h1>
                <p className="mt-2 font-para text-heading font-light">Art Direction</p>
                 <div className="w-56 mt-1"><h3 className=" text-para font-primaryFont  text-gray-500 leading-6">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    </>
  )
}

export default Section03
