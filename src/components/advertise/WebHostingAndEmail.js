import React from "react";
import Image from "next/image";
import { WEB_AND_EMAIL } from "@/src/utility/web&Email";

const WebHostingAndEmail = () => {
  return (
    <div className='bg-[url("/images/advertise/webHosting-graphic.jpeg")] py-20 md:mb-32 xxs:mb-20'>
      <div className="grid grid-cols-2 gap-8 xl:w-5/6 lg::w-[100%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto">
        {
           WEB_AND_EMAIL.map((data)=>{
             const { id, img, head, heading, para, button } = data;
             return(
              <div className="relative bg-white rounded-sm lg:col-span-1 md:col-span-2  xxs:col-span-2 md:text-left xxs:text-center" key={id}>
              <button className="absolute right-10 -top-3 bg-[#403b53] rounded-sm text-white text-sm px-4 py-1">Enquiry</button>
              <h1 className="text-xl rounded-t-sm bg-[#3596DA] text-white px-6 py-3">{head}</h1>
              <div className="p-6 flex md:flex-row xxs:flex-col md:justify-between xxs:justify-center">
                  <div className="md:w-[30%] xxs:w-[30%] xxs:mx-auto">
                      <Image src={img} height={200} width={190} alt="web hostaing & graphic" />
                  </div>
                  <div className="md:w-[70%] xxs:w-[95%] xxs:mx-auto lg:pl-0 md:pl-5 xxs:pl-0">
                      <h1 className="text-xl pb-2 md:pt-0 xxs:pt-10">{heading}</h1>
                      <p className="para">{para}</p>
                      <div className="float-right">
                         <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-5'>{button}</button>
                      </div>
                  </div>
              </div>
           </div>
             )
           })
        }
        
      </div>
    </div>
  );
};

export default WebHostingAndEmail;
