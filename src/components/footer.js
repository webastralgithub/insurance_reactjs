import React from 'react';
import './footer.css';  

const Footer=()=>{


    return(
<div>
   <section className='footer py-12'>
      <div className='container m-auto px-5'>
      <div className="grid grid-cols-12 md:gap-12 gap-5">
<div className="col-span-12 lg:col-span-3 md:col-span-6">
<div>
   <div className="mb-5 flex justify-center">
     <a className='inline-block md:max-w-[100%] max-w-[160px]' href=''> <img className='md:w-full w-auto' src="../images/footer-logo.png"/></a>
   </div>
   <div className="flex md:justify-center justify-center  gap-3 mb-5">
      <a href=""><img src="../images/facebook.png"/></a>
      <a href=""><img src="../images/twitter.png"/></a>
   </div>
   <p className="md:text-center text-center text-lg">Copyright © 2022 Millennial Group.</p>
</div>
</div>
<div className="col-span-12 lg:col-span-3 md:col-span-6">
<div>
   <h4 className="text-2xl font-medium md:text-left text-center mb-5" style={{color:"#c59a4b"}}>GET IN TOUCH</h4>
   <div>
      <div className="flex md:justify-start justify-center gap-4 mb-4">
         <img style={{width:"30px",height:"fit-content"}} src="../images/map.png"/>
         <span>#118 Ground Floor Little India Plaza 8028 128 st, Surrey, BC, V3W 4E</span>
      </div>
      <div className="mb-4 flex md:justify-start justify-center">
         <a className="inline-flex items-center" href="tel:778.592.4312"><span><img src="../images/contact.png"/></span><span>778.592.4312</span></a>
      </div>
      <div className='flex md:justify-start justify-center'>
         <a className="inline-flex items-center" href="mailto:info@millennialgroup.ca"><span><img src="../images/message.png"/></span><span>info@millennialgroup.ca</span></a>
      </div>
   </div>
</div>
</div>
<div className="col-span-12 lg:col-span-6 lg:col-span-6">
<div>
<h4 className="text-2xl font-medium mb-5 md:text-left text-center" style={{color:"#c59a4b"}}>OUR LOCATION</h4>
<div>
   {/* <img src="../images/map-image.png"/> */}
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.7246428763397!2d-122.86961668490049!3d49.148852288165784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d982b3f76eed%3A0x638d4d7e174f42f2!2sLittle%20India%20Plaza!5e0!3m2!1sen!2sin!4v1655380113017!5m2!1sen!2sin"width="500" height="350"  allowfullscreen="" loading="lazy" ></iframe>
</div>
</div>
</div>
</div>
      </div>
   </section>


 </div>

    )
}
export default Footer;