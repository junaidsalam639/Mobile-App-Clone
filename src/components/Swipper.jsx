import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Swipers() {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth > 800 ? 2 : 1);
    useEffect(() => {
        const handleResize = () => {
          setSlidesPerView(window.innerWidth > 800 ? 2 : 1);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <>
      <div className="container sm:px-0 lg:px-24 md:px-16 xs:px-0 mx-auto w-full h-96 flex items-center justify-center my-10">
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          <SwiperSlide>
            <div className="shadow mt-4 p-6 mx-2">
            <p>
              <i>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Donec sollicitudin molestie malesuada. Donec sollicitudin
                molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </i>
            </p>
            <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" className="w-10 h-10 rounded-full mx-auto mt-8 mb-2"  />
            <cite>Abraham Linkon , Themefisher.com</cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="shadow mt-4 p-6 mx-2">
            <p>
              <i>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Donec sollicitudin molestie malesuada. Donec sollicitudin
                molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </i>
            </p>
            <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" className="w-10 h-10 rounded-full mx-auto mt-8 mb-2"  />
            <cite>Abraham Linkon , Themefisher.com</cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="shadow mt-4 p-6 mx-2">
            <p>
              <i>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Donec sollicitudin molestie malesuada. Donec sollicitudin
                molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </i>
            </p>
            <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" className="w-10 h-10 rounded-full mx-auto mt-8 mb-2"  />
            <cite>Abraham Linkon , Themefisher.com</cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="shadow mt-4 p-6 mx-2">
            <p>
              <i>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Donec sollicitudin molestie malesuada. Donec sollicitudin
                molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </i>
            </p>
            <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" className="w-10 h-10 rounded-full mx-auto mt-8 mb-2"  />
            <cite>Abraham Linkon , Themefisher.com</cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="shadow mt-4 p-6 mx-2">
            <p>
              <i>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Donec sollicitudin molestie malesuada. Donec sollicitudin
                molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </i>
            </p>
            <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" className="w-10 h-10 rounded-full mx-auto mt-8 mb-2"  />
            <cite>Abraham Linkon , Themefisher.com</cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="shadow mt-4 p-6 mx-2">
            <p>
              <i>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Donec sollicitudin molestie malesuada. Donec sollicitudin
                molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </i>
            </p>
            <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" className="w-10 h-10 rounded-full mx-auto mt-8 mb-2"  />
            <cite>Abraham Linkon , Themefisher.com</cite>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
