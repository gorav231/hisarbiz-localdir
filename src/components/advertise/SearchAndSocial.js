import React from "react";
import Image from "next/image";
import { SEARCH_SOCIAL_INFO } from "@/src/utility/searchSocialInfo";

const SearchAndSocial = () => {
  return (
    <div className="bg-[#ebeaeb]">
      <div className="grid grid-cols-12 gap-4 2xl:w-5/6 xl:w-[100%] lg:w-[100%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto md:mt-20 xxs:mt-2 md:mb-16 xxs:mb-20 pt-14 md:pb-14 xxs:pb-5">
        <div className="lg:col-span-5 md:col-span-12 xxs:col-span-12 xl:block lg:hidden md:hidden xxs:hidden">
          <Image
            src="/images/advertise/search-social.jpg"
            height={500}
            width={600}
            alt="social-search"
          />
        </div>
        <div className="xl:col-span-7 lg:col-span-12 md:col-span-12 xxs:col-span-12">
          <h1 className="lg:text-4xl md:text-3xl xxs:text-2xl text-[#282828] pb-8 md:text-left xxs:text-center">Harness Search and Social</h1>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:gap-6 lg:gap-4 md:gap-4 xxs:gap-4">
            {
                SEARCH_SOCIAL_INFO.map((data)=>{
                    const {id, heading, para, button} = data;
                    return(
                        <div key={id} className="2xl:px-10 xl:px-7 lg:px-0 md:px-3 xxs:px-3">
                           <h1 className="lg:text-[20px] md:text-2xl xxs:text-xl text-[#282828] cursor-pointer">{heading}</h1>
                           <p className="text-sm leading-6 pt-1">{para}</p>
                           <button className="text-lightblue-10 mt-3 font-medium">{button}</button>
                      </div>
                    );
                })
            }
          </div>
          <div className="text-center">
             <button className='bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-12 mb-10'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSocial;
