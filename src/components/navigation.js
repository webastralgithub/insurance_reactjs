import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


const Navigation=()=>{


    return(
 <div>
<section    className='navbar flex justify-between items-center'>
 <div className='container px-5 m-auto py-2'>
 <div className='grid grid-cols-12 items-center justify-between'>
    <div className='md:col-span-2 col-span-3'>
    <a  href='http://millennialgroup.nvinfobase.com/'><img style={{width:"90px"}} src='../images/cropped-logo.png'/></a>
    </div>
    <div className='md:col-span-8 col-span-1 md:block hidden'>
        <div className='nav-list text-white uppercase text-center flex justify-center gap-8 '>
          <a className='nav-link' href='#home'>HOME</a>
          <a className='nav-link' href='#about'>ABOUT</a>
          <a className='nav-link' href='#services'>Our services</a>
          <a className='nav-link' href='#form'>Contact</a>
        </div>
    </div>
    <div className='md:col-span-2 col-span-9 text-end'>
    <div>
    <a className='md:text-xl sm:text-base text-sm font-medium text-white text-end bg-[#262629] rounded-md ' href='tel:778.868.1987'><FontAwesomeIcon icon={solid('phone-volume')}/> 604.782.2091</a>
  </div>
    </div>
  </div>
  
 </div>
  
</section>
 </div>

    )
}
export default Navigation;