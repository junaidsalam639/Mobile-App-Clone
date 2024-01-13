import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer =()=>{
    return(
        <>
                <div className="bg-SecondaryColor  p-8  pt-14 pb-28 flex flex-wrap  text-center  justify-evenly items-center">
          <div>
            <img src="https://technext.github.io/small-apps/images/logo-alt.png" alt="phone "/>
            <div className="flex ml-4 mt-5 ">
            <div className="rounded-full bg-gray-700  p-2"><FaFacebookF size={15} className="text-white "/></div>
            <div className=" ml-3 rounded-full bg-gray-700 p-2"><FaTwitter size={15} className="text-white"/></div>
            <div className="ml-3 rounded-full bg-gray-700 p-2"><BsInstagram size={15} className="text-white "/></div>
            </div>
          </div>

          <div className="flex flex-wrap  justify-center mt-8 sm:mt-0 lg:mt-0 md:mt-0 xl:mt-0">
             <div className=" grid grid-rows-1">
              <div className="mt-4 lg:mx-8 md:mx-5 mx-2">
              <p className="text-white font-bold text-sm">PRODUCT</p>
              <div className="mt-6">
              <p className=" text-gray-500  hover:text-white hover:cursor-pointer text-sm	">Teams</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Blogs</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">FAQs</p>
              </div>
              </div>
             </div>

             <div className=" grid grid-rows-1 ">
              <div className="mt-4 lg:mx-14 md:mx-5 mx-2">
              <p className="text-white font-bold text-para">RESOURCES</p>
              <div className="mt-6">
              <p className=" text-gray-500  hover:text-white hover:cursor-pointer text-sm	">Singup</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Login</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Blog</p>
              </div>
              </div>
             </div>

             <div className=" grid grid-rows-1 ">
              <div className="mt-4 lg:mx-14 md:mx-5 mx-2">
              <p className="text-white font-bold text-para">COMPANY</p>
              <div className="mt-6">
              <p className=" text-gray-500  hover:text-white hover:cursor-pointer text-sm	">Career</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Contact</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Investor</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer font-normal mt-2">Terms</p>
              </div>
              </div>
             </div>

             <div className=" grid grid-rows-1 ">
              <div className="mt-4 lg:mx-14 md:mx-5 mx-2">
              <p className="text-white font-bold text-para">COMPANY</p>
              <div className="mt-6">
              <p className=" text-gray-500  hover:text-white hover:cursor-pointer text-sm	">About</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Contact</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm mt-2">Team</p>
              <p className="text-gray-500  hover:text-white hover:cursor-pointer text-sm	 mt-2">Privacy Policy</p>

              </div>
              </div>
             </div>
          </div>
        </div>

        <div className="lastSection  bg-PrimaryColor pt-6">
          <div className=" items-center text-center">
            <p className="font-normal text-last text-textColor">Copyright © 2024. Designed & Developed by Themefisher</p>
            <p className="font-normal text-base text-textColor mt-5">Distributed By Themewagon</p>
            </div>
          </div> 
        </>
    )

}


export default Footer;