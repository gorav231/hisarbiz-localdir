import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { WEBSITE_DETAILS_INFO } from "@/src/utility/websiteDetailsInfo";

const WebsiteDetails = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 gap-6 lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto lg:border-t-2 lg:border-slate-500 text-center lg:mt-20 md:pt-0 xxs:pt-5">
        {WEBSITE_DETAILS_INFO.map((data,id) => {
          return (
            <div className="2xl:-mt-[14%] xl:-mt-[18%] lg:-mt-[25%] xxs:-mt-0 mb-20" key={id}>
              <div className="flex justify-center border-2 border-slate-600 rounded-full w-32 bg-white items-center mx-auto mb-4">
                <Image src={data.img} alt="website-details" height={200} width={200} className="p-3" />
              </div>
              <h1 className="text-lg">{data.heading}</h1>
              <p className="leading-6 text-sm text-black1-1 pb-6">{data.para1}</p>
              <p className="flex justify-center items-center text-sm mb-1">
                <BsCheck className="h-6 w-6 mr-1" />
                {data.para2}
              </p>
              <p className="flex justify-center items-center text-sm mb-1">
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
