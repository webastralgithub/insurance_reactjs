import React from 'react';





const About=()=>{
    return(
 <div id='about' className='scroll-break'>
    <section className='py-12'>
        <div className='container px-5 m-auto'>
            <div className='grid grid-cols-2 lg:gap-12 md:gap-8 sm:gap-4 items-center'>
            <div className='col-span-2 sm:col-span-1 mb-5'>
            <div className='about-img-head'>
                <img className='w-full' src='../images/about-banner.jpg'/>
            </div>
            </div>
            <div className='col-span-2 sm:col-span-1'>
            <div className='about-content'>
               <h4 className='text-4xl mb-5 font-medium uppercase'>ABOUT US</h4>
               <p className='text-xl text-justify'>Our insurance professionals provide personalised services on a client to client basis. We are able to survey Canada's leading insurance companies and advise you without being biased by any one companies services. A meeting with one of our professionals will demystify the insurance process and create a plan that works for you.</p>
            </div>
            </div>
            </div>
        </div>
    </section>
 </div>

 )
}
export default About;