import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { WEBSITE_DETAILS_INFO } from "@/src/utility/websiteDetailsInfo";

const WebsiteDetails = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 gap-6 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto lg:border-t-2 lg:border-slate-500 text-center md:mb-20 xxs:mb-20 lg:mt-10 md:pt-0 xxs:pt-5">
        {WEBSITE_DETAILS_INFO.map((data,id) => {
          return (
            <div className="2xl:-mt-[8%] xl:-mt-[12%] lg:-mt-[14%] xxs:-mt-0 md:mb-20 xxs:mb-4" key={id}>
              <div className="flex justify-center border rounded-full w-32 h-20 bg-lightb-1 items-center mx-auto mb-4">
                <Image src={data.img} alt="website-details" height={200} width={100} className="rounded-full" />
              </div>
              <h1 className="text-lg">{data.heading}</h1>
              <p className="leading-6 text-sm text-black1-1 pb-6">{data.para1}</p>
              <p className="flex md:justify-start xxs:justify-center 2xl:ml-32 xl:ml-10 lg:ml-8 items-center text-sm mb-1">
                <BsCheck className="h-6 w-6 mr-1" />
                {data.para2}
              </p>
              <p className="flex md:justify-start xxs:justify-center 2xl:ml-32 xl:ml-10 lg:ml-8 items-center text-sm mb-1">
                <BsCheck className="h-6 w-6 mr-1" />
               {data.para3}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebsiteDetails;
