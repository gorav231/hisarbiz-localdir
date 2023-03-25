import React from 'react';
import Image from 'next/image';

const ItService = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-4 xl:w-5/6 lg:w-[96%] md:5/6  md:text-center xxs:text-center md:px-7 xxs:w-full xxs:px-2 mx-auto md:pt-24 md:pb-10'>
            <div className='lg:col-span-1 md:col-span-3 xxs:col-span-3'>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Web Design and Development</h1>
                    <p className='para pb-3'>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell.
                    An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At GLS, we boast of brilliance.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Drive quality leads to your website</h1>
                    <p className='para pb-3'>When customers search on Directory they’re actively looking for products and services like yours. So when traffic from your Directory listing lands on your website, it’s more likely to be a warm lead.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
            </div>
            <div className='lg:col-span-1 md:col-span-3  xxs:col-span-3 flex justify-center items-center'>
                <Image src="/images/advertise/It-service.svg" alt="it-service" height={500} width={500} className="text-center"/>
            </div>
            <div className='lg:col-span-1 md:col-span-3 xxs:col-span-3'>
            <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>The site where more customers search</h1>
                    <p className='para pb-3'>Each month Directory receives 4.2 million business searches* and found in around 44 Million Google Results each week.²</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Let us solve your critical website development challenges</h1>
                    <p className='para pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItService