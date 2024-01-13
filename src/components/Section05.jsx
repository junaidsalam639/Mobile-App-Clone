import React from 'react'
import { TfiApple } from "react-icons/tfi";
import { TfiAndroid } from "react-icons/tfi";
import { SiWindows10 } from "react-icons/si";

const Section05 = () => {
  return (
    <>
        <div className="pt-20 pb-24 mt-6 bg-blue-500">
        <div className="text-center	p-2">
          <div className="grid justify-center mt-3">
            <h1 className="text-4xl font-light text-white font-primaryFont">
              It's time to change your mind
            </h1>
            <div className="mt-3 ">
              <p className="text-base text-white font-primaryFont">
                Download over 2 million humans .Get Small Apps free forever!
              </p>
              <p className="text-center font-normal font-para text-base text-light font-primaryFont text-white ">
                We say you won’t look back.
              </p>
            </div>
          </div>
          <div className="justify-center  gap-4 mt-12 max-w-6xl mx-auto flex flex-wrap">
            <div className="py-2   w-40 rounded-full border-2 boder-white  text-center">
              <div className="flex justify-center">
                <TfiApple size={18} className=" text-white font-normal" />
                <h1 className="text-normal font-primaryFont ml-2 text-white">
                  IPHONE
                </h1>
              </div>
            </div>
            <div className="p-2 w-40 rounded-full bg-opacity-0 bg-gray-600 border-2 boder-white text-center">
              <div className="flex justify-center">
                <TfiAndroid size={18} className=" text-white font-normal	" />
                <h1 className="text-normal font-primaryFont ml-2 text-white">
                  ANDROID
                </h1>
              </div>
            </div>
            <div className="p-2 w-40 rounded-full bg-opacity-0 bg-gray-600 border-2 boder-white text-center">
              <div className="flex justify-center">
                <SiWindows10
                  size={18}
                  className=" text-white font-normal	mt-1"
                />
                <h1 className="text-normal font-primaryFont ml-2 text-white">
                  WINDOWS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section05
