import React from 'react';
import './footer.css';  

const Footer=()=>{


    return(
<div>
<section className='footer relative'>
      <div className='overlay'></div>
      <div className='container relative z-10 m-auto py-12 px-5'>
      <div className="grid grid-cols-12 md:gap-12 gap-5">
<div className="col-span-12 lg:col-span-3 md:col-span-6">
<div>
   <div className="mb-5 flex justify-center">
     <a className='inline-block md:w-1/2 max-w-[160px]' href=''> <img className=' w-auto' src="../images/footer-logo.png"/></a>
   </div>
   <div className="flex md:justify-center justify-center  gap-3 mb-5">
      <a href=""><img src="../images/facebook.png"/></a>
      <a href=""><img src="../images/twitter.png"/></a>
   </div>
  
</div>
</div>
<div className="col-span-12 lg:col-span-4 md:col-span-6">
<div>
   <h4 className="md:text-2xl text-xl font-medium md:text-left text-center mb-5" style={{color:"#c59a4b"}}>GET IN TOUCH</h4>
   <div>
      <div className="flex md:justify-start text-white justify-center gap-4 mb-4">
         <img style={{width:"30px",height:"fit-content"}} src="../images/map.png"/>
         <span>#118 Ground Floor Little India Plaza 8028 <br/> 128 St, Surrey, BC, V3W 4E9</span>
      </div>
      <div className="mb-4 flex md:justify-start justify-center">
         <a className="inline-flex text-white gap-4 items-center" href="tel:778.592.4312"><span><img src="../images/contact.png"/></span><span>604.782.2091</span></a>
      </div>
      <div className='flex md:justify-start justify-center'>
         <a className="inline-flex text-white gap-4 items-center" href="mailto:info@millennialgroup.ca"><span><img src="../images/message.png"/></span><span>info@millennialgroup.ca</span></a>
      </div>
   </div>
</div>
</div>
<div className="col-span-12 lg:col-span-6 lg:col-span-5">
<div>
<h4 className="md:text-2xl text-xl font-medium mb-5 md:text-left text-center" style={{color:"#c59a4b"}}>OUR LOCATION</h4>
<div>
   {/* <img src="../images/map-image.png"/> */}

   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.752454609343!2d-122.86892068492791!3d49.1483242793169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d982b84dae8b%3A0x10afc17b4c57596e!2s8028%20128%20St%20%23%20118%2C%20Surrey%2C%20BC%20V3W%204E9%2C%20Canada!5e0!3m2!1sen!2sin!4v1655731424858!5m2!1sen!2sin" width="500" height="350"  allowFullScreen="" loading="lazy" ></iframe>
</div>
</div>
</div>

   
</div>
      </div>
   </section>
   <section className='bg-[#262629] border-t border-[#c59a4b] px-5'>
   <p className="md:text-center text-white py-5 text-center  text-sm">©MILLENNIAL GROUP INSURANCE 2021- All rights reserved.</p>
   </section>


 </div>

    )
}
export default Footer;