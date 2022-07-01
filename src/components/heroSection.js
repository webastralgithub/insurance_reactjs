import React from 'react';





const HeroSection=()=>{
    return(
 <div id='home' className='scroll-break'>
    <section className='mt-[100px] hero-bg lg:py-24 md:py-20 sm:py-16 py-12 '>
    <div className='container m-auto px-5'>
      <div className='grig grid-cols-8'>
         <div className='col-span-4'>
         <div className=' caption bg-white rounded-xl lg:px-[40px] px-[20px] lg:py-[30px] py-[15px]'>
    <p className='  lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-4'>Insurance</p>
    <p className='text-white lg:text-xl mb-5 '>You can feel more confident by protecting what’s important to you.</p>
    <a href='#form' type="button" className="inline-block md:px-6 sm:px-4 px-3 md:py-2.5 py-1.5 bg-blue-600 text-white font-medium md:text-xl sm:text-base text-sm leading-tight uppercase rounded shadow-md hero-btn  hero-btn">Get in Touch</a>
    </div>
         </div>
         <div className='col-span-4'>
            
            </div>
      </div>
   
   
    </div>   
    </section>
 </div>

 )
}
export default HeroSection;