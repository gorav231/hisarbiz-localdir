import React from 'react';
import Image from 'next/image';

const WebEmail = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-4 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto py-10 md:text-left xxs:text-center'>
           <div className='md:col-span-1 xxs:col-span-2 pt-10'>
             <h1 className='text-3xl leading-10 pb-5'>Web & Email <br/> Hosting</h1>
             <p className='leading-7 pb-5'>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content.</p>
             <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn More</button>
           </div>
           <div className='md:col-span-1 xxs:col-span-2 flex md:justify-end xxs:justify-center items-center'>
            <Image src="/images/advertise/web-email.png" alt="web-email" height={420} width={420}/>
           </div>
        </div>
    </div>
  )
}

export default WebEmail