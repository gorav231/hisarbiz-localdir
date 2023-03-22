import React from 'react';
import Image from 'next/image';

const ItService = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-4 xl:w-5/6 lg:w-[96%] md:5/6  md:text-center xxs:text-center md:px-7 xxs:w-full xxs:px-2 mx-auto md:pt-20 md:pb-10'>
            <div className='lg:col-span-1 md:col-span-3 xxs:col-span-3'>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Web Design and Development</h1>
                    <p className='leading-6 text-sm pb-3'>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell.
                    An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At GLS, we boast of brilliance.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Digital Marketing</h1>
                    <p className='leading-6 text-sm pb-3'>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content.
                     It’s the hosting bit that defines your business’ success as a website in the pool of many.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
            </div>
            <div className='lg:col-span-1 md:col-span-3  xxs:col-span-3 flex justify-center items-center'>
                <Image src="/images/advertise/It-service.svg" alt="it-service" height={500} width={500} className="text-center"/>
            </div>
            <div className='lg:col-span-1 md:col-span-3 xxs:col-span-3'>
            <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Web & Email Hosting</h1>
                    <p className='leading-6 text-sm pb-3'>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Customer Care</h1>
                    <p className='leading-6 text-sm pb-3'>Support is highly crucial when running a website for your business and it is not feasible to handle all of it by yourself. Offering support for a domain and running its various functionalities optimally requires skill, expertise, and experience.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItService