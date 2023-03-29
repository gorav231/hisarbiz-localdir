import React,{ useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DIGITAL_MARKETING_CARDS_INFO } from '@/src/utility/digitalMarketingCardsInfo';

const DigitalMarketingCards = () => {
  const [data, setData] = useState("")
 
    console.log("heading++++++++++++++++++++++++++++===========",data)

  return (
    <div className='bg-[#f1f2f2] py-20 md:mb-28 xxs:mb-20 lg:mt-10'>
        <h1 className='text-4xl text-center pb-5'>New to digital marketing?</h1>
        <p className='para text-center leading-normal pb-14'>Simple, relevant and jargon-free, our articles, guides and eBooks will beef up your <br/> digital knowledge without you breaking a sweat.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 gap-6 xl:w-5/6 lg:w-[96%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto">
        {DIGITAL_MARKETING_CARDS_INFO.map((elem) => {
            const {id, heading, button, img} = elem;
          return (
            <Link href="/posts/[pid]" as={"/posts/" + heading} >
           <div className='flex bg-[#fff] h-22 p-1 rounded-sm cursor-pointer' key={id} onClick={()=>setData(heading)}>
            <div>
                <Image src={img} width={100} height={100} alt="digital-marketing" className='rounded-sm h-[80px] w-[100px]'/>
            </div>
            <div className='pl-3'>
                <p className='md:text-sm xxs:text-[13px] md:leading-6 xxs:leading-5 lg:pt-0.5 md:pt-0 xxs:pt-0 text-[#676767]'>{heading}</p>
                <button className='text-sm text-lightb-1'>{button}</button>
            </div>
           </div>
           </Link>
          );
        })}
      </div>
    </div>
  )
}

export default DigitalMarketingCards;