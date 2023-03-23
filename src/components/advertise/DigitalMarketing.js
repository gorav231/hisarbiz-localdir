import React from 'react';
import Image from 'next/image';

const DigitalMarketing = () => {
  return (
    <div className='bg-[#eaf1f0]'>
        <div className='grid grid-cols-2 gap-4 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto py-10 md:text-left xxs:text-center'>
        <div className='md:col-span-1 xxs:col-span-2 pt-10 flex  md:justify-start xxs:justify-center items-center'>
            <Image src="/images/advertise/digital.png" alt="digital-marketing" height={450} width={450}/>
           </div>
           <div className='md:col-span-1 xxs:col-span-2 pt-10'>
             <h1 className='text-3xl leading-10 pb-5'>Digital Marketing</h1>
             <p className='leading-7 pb-5'>Your business&apos;s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business&apos;s projects, deliverables and content.
              While it may seem like simply registering your domain name once your task is done, it&apos;s the hosting bit that defines your business&apos; success as a website in the pool of many.</p>
             <div>
               <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn More</button>
               <button className="w-[120px] h-[36px] outline-none bg-white border text-[#1E1E1E] font-semibold border-[#1E1E1E] rounded-[4px] md:ml-2 xxs:mx-1 xxs:my-2">Book a call</button>
             </div>
           </div>
        </div>
    </div>
  )
}

export default DigitalMarketing