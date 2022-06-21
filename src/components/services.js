import React from 'react';





const Services=()=>{
    return(
 <div>
    <section className='pb-12'>
        <div className='container m-auto'>
            <h2 className='text-center text-4xl mb-5'>Insurance Services</h2>
            <div className='grid grid-cols-12 md:gap-8 gap-3 items-center'>
            <div className='col-span-12 sm:col-span-3'>
                <div className='service-card text-center'>
                    <img className='inline-block mb-5' src='../images/purchases.png'/>
                    <h2 style={{color:"#262626"}} className='font-semibold text-xl'>Health Insurance</h2>
                </div>
            </div>
            <div className='col-span-12 sm:col-span-3'>
                <div className='service-card text-center'>
                    <img className='inline-block mb-5' src='../images/refiance.png'/>
                    <h2 style={{color:"#262626"}} className='font-semibold text-xl'>Disability Insurance</h2>
                </div>
            </div>
            <div className='col-span-12 sm:col-span-3'>
                <div className='service-card text-center'>
                    <img className='inline-block mb-5' src='../images/renewals.png'/>
                    <h2 style={{color:"#262626"}} className='font-semibold text-xl'>Term Life Insurance</h2>
                </div>
            </div>
            <div className='col-span-12 sm:col-span-3'>
                <div className='service-card text-center'>
                    <img className='inline-block mb-5' src='../images/private-lending.png'/>
                    <h2 style={{color:"#262626"}} className='font-semibold text-xl'>Mortgage Life Insurance</h2>
                </div>
            </div>
            </div>
        </div>
    </section>
 </div>

 )
}
export default Services;