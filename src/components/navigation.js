import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


const Navigation=()=>{


    return(
 <div>
<section className='navbar flex justify-between items-center'>
  <div className='py-2'>
    <a href='http://millennialgroup.nvinfobase.com/'><img style={{width:"90px"}} src='../images/cropped-logo.png'/></a>
    
  </div>
  <div>
    <a className='text-xl font-medium text-white' href='tel:778.868.1987'><FontAwesomeIcon icon={solid('phone-volume')}/> 778.868.1987</a>
  </div>
</section>
 </div>

    )
}
export default Navigation;