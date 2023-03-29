import React from 'react';
import Image from 'next/image';
import { GiMoebiusTriangle } from "react-icons/gi";

const ItService = () => {
  return (
    <div className=' md:pt-8 relative'>
        <h1 className='text-center md:text-4xl xxs:text-3xl 2xl:w-[40%] xl:w-[50%] md:w-[70%] xxs:w-[95%] leading-tight mx-auto tracking-wide pb-14'>Let us solve your critical website development challenges</h1>
        <div className='grid grid-cols-3 gap-4 xl:w-5/6 lg:w-[96%] md:5/6  md:text-center xxs:text-center md:px-7 xxs:w-full xxs:px-2 mx-auto'>
            <div className='lg:col-span-1 md:col-span-3 xxs:col-span-3'>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Web Design and Development</h1>
                    <p className='para pb-3'>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell.
                    An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At GLS, we boast of brilliance.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                    <div class="w-16 overflow-hidden inline-block lg:block md:hidden xxs:hidden">
                       <div class=" h-11 w-11 rotate-[130deg] transform origin-bottom-left absolute left-[38%] top-[33%]">
                          <Image src="/images/advertise/triangle-color.svg" height={100} width={100} alt="triangle-arrow"/>
                       </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Drive quality leads to your website</h1>
                    <p className='para pb-3'>When customers search on Directory they’re actively looking for products and services like yours. So when traffic from your Directory listing lands on your website, it’s more likely to be a warm lead.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                    <div class="w-16 overflow-hidden inline-block lg:block md:hidden xxs:hidden">
                       <div class=" h-11 w-11 rotate-[65deg] transform origin-bottom-left absolute left-[35.5%] bottom-[27%]">
                        <Image src="/images/advertise/triangle-color.svg" height={100} width={100} alt="triangle-arrow"/>
                       </div>
                    </div>
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
                    <div class="w-16 overflow-hidden inline-block lg:block md:hidden xxs:hidden">
                       <div class=" h-11 w-11 -rotate-[130deg] transform origin-bottom-left absolute right-[34%] top-[38%]">
                         <Image src="/images/advertise/triangle-color.svg" height={100} width={100} alt="triangle-arrow"/>
                       </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl text-black1-1 pb-3'>Let us solve your critical website development challenges</h1>
                    <p className='para pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
                    <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-1.5 mb-10'>Learn more</button>
                    <div class="w-16 overflow-hidden inline-block lg:block md:hidden xxs:hidden">
                       <div class=" h-11 w-11 -rotate-[65deg] transform origin-bottom-left absolute right-[34.5%] bottom-[22%]">
                        <Image src="/images/advertise/triangle-color.svg" height={100} width={100} alt="triangle-arrow"/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItService