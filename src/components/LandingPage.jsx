import React from 'react'

const LandingPage = () => {
  return (
    <>
    <div className='w-full h-full md:h-screen lg:h-screen bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-800 rounded-b-[22%] p-4'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto w-full h-full'>
    <div className='flex flex-col justify-center items-start px-4 md:px-10 lg:px-24 lg:mb-4'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl leading-[48px] md:leading-[60px] font-[700] text-white'>Showcase your app with Small Apps</h1>
      <p className='text-white text-base md:text-[18px] font-sans leading-[24px] md:leading-[30px] font-[500] mt-4 md:mt-8'>Besides its beautiful design, Laapp is an incredibly rich core framework for you to showcase your App.</p>
      <button className='bg-blue-400 text-base md:text-[16px] font-sans leading-[24px] md:leading-[30px] font-[500] px-6 md:px-10 py-3 md:py-4 mt-4 md:mt-8 xs:mb-6 text-white rounded-sm text-start'>DOWNLOAD NOW</button>
    </div>
    <div className='flex justify-center items-center sm:my-8 sm:px-6 xs:my-8'>
      <img src="https://technext.github.io/small-apps/images/mobile.png" alt="" className="max-w-full h-auto" />
    </div>
  </div>
</div>

    </>
  )
}

export default LandingPage

