import React from 'react';
import Image from 'next/image';

const SocialIcon = () => {
  return (
    <div className='bg-[url("/images/advertise/social-card-bg.jpeg")]'>
         <h1 className='text-center text-gray-800 pt-5 text-xl'>We team up with the leading names of the industry</h1>
        <div className='grid grid-cols-5 gap-4 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto'>
            <div>
               <Image src="/images/advertise/social-1.webp" alt="social" height={100} width={200}/>
            </div>
            <div>
               <Image src="/images/advertise/social-2.webp" alt="social" height={100} width={200}/>
            </div>
            <div>
               <Image src="/images/advertise/social-3.webp" alt="social" height={100} width={200}/>
            </div>
            <div>
               <Image src="/images/advertise/social-4.webp" alt="social" height={100} width={200}/>
            </div>
            <div>
               <Image src="/images/advertise/social-5.webp" alt="social" height={100} width={200}/>
            </div>
        </div>
    </div>
  )
}

export default SocialIcon;