import React from 'react';
import Image from 'next/image';

const WebDesignDevelopment = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-4 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto py-10 md:text-left xxs:text-center'>
           <div className='md:col-span-1 xxs:col-span-2 pt-10'>
             <h1 className='text-3xl leading-10 pb-5'>Web Design <br/> and Development</h1>
             <p className='leading-7 pb-5'>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell.
                An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At GLS, we boast of brilliance.</p>
             <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn More</button>
           </div>
           <div className='md:col-span-1 xxs:col-span-2 flex md:justify-end xxs:justify-center items-center'>
            <Image src="/images/advertise/web-design.png" alt="web-design-&-development" height={350} width={350}/>
           </div>
        </div>
    </div>
  )
}

export default WebDesignDevelopment;