import React from 'react';
import Image from 'next/image';

const ExpertIndustry = () => {
    return ( 
        <div className='bg-[#e8e8e8] pb-10 pt-5'>
             <p className='text-center text-gray-800 pt-5 text-md font-semibold'>Service Delivery With A Sense Of Pride</p>
             <h1 className='text-center text-gray-800 xl:text-5xl lg:text-3xl xxs:text-2xl pt-5 md:pb-10 xxs:pb-5'>We’re trusted by these industry experts <br/> <span className='leading-normal'>Australia-wide!</span></h1>
            <div className='grid grid-cols-5 gap-4 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto'>
                <div className='md:col-span-1 xxs:col-span-5 flex justify-center items-center flex-col'>
                   <Image src="/images/advertise/logo1.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                   <Image src="/images/advertise/icon6.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                </div>
                <div className='md:col-span-1 xxs:col-span-5 flex justify-center items-center flex-col'>
                   <Image src="/images/advertise/logo2.jpg" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                   <Image src="/images/advertise/icon7.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                </div>
                <div className='md:col-span-1 xxs:col-span-5 flex justify-center items-center flex-col'>
                   <Image src="/images/advertise/icon3.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                   <Image src="/images/advertise/icon8.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                </div>
                <div className='md:col-span-1 xxs:col-span-5 flex justify-center items-center flex-col'>
                   <Image src="/images/advertise/icon4.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                   <Image src="/images/advertise/icon9.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                </div>
                <div className='md:col-span-1 xxs:col-span-5 flex justify-center items-center flex-col'>
                   <Image src="/images/advertise/icon5.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                   <Image src="/images/advertise/icon10.webp" alt="social" height={200} width={250} className="md:my-3 xxs:my-0 filter grayscale-[1] hover:grayscale-0"/>
                </div>
            </div>
        </div>
      )
}

export default ExpertIndustry