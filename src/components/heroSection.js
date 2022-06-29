import React from 'react';





const HeroSection=()=>{
    return(
 <div id='home' className='scroll-break'>
    <section className='mt-[100px]'>
    <div className='relative'>
    <img className='w-full' src='../images/banner-bg-5.jpeg'/>
    <p className='absolute caption lg:text-7xl md:text-5xl sm:text-3xl text-2xl'>Insurance</p>
    <a href='#form' type="button" className="inline-block md:px-6 sm:px-4 px-3 md:py-2.5 py-1.5 bg-blue-600 text-white font-medium md:text-xl sm:text-base text-sm leading-tight uppercase rounded shadow-md hero-btn absolute hero-btn">Get in Touch</a>
    </div>   
    </section>
 </div>

 )
}
export default HeroSection;