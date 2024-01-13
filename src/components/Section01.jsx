import React from 'react'

const Section01 = () => {
  return (
    <>
      <div className='container mx-auto lg:px-24 md:px-10 sm:px-6 xs:px-4 mb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <img src="https://technext.github.io/small-apps/images/feature/feature-new-01.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='font-light text-5xl mb-6 leading-[60px]'>Increase your productivity with Small Apps</h1>
                <p className='text-[18px] font-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className='mt-12'><i>"InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."</i></p>
                <div className='flex flex-row justify-center items-start mt-4'>
                    <img src="https://technext.github.io/small-apps/images/testimonial/feature-testimonial-thumb.jpg" alt="" />
                    <p className='px-2'> Jonathon Andrew , Themefisher.com</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Section01
