import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { STARTER_PLAN } from "@/src/utility/starterPlanInfo";

const StarterPlan = () => {
  return (
    <div>
      <div className="lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto pt-5 pb-5">
        <p className="text-center text-[15px] font-[400] pb-3">Our Plans</p>
        <h1 className="text-center md:text-3xl xxs:text-2xl py-1">
          Select A Suitable Plan For
        </h1>
        <h1 className="text-center md:text-3xl xxs:text-2xl pt-1 pb-24">
          Your Next Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 2xl:gap-16 xl:gap-8 md:gap-6">
          {STARTER_PLAN.map((plan) => {
            const { id, price, heading, para1, para2, para3, para4, button } = plan;
            return (
              <div key={id} className="shadow-card text-center flex flex-col justify-center items-center bg-[#FBFBFB] rounded-md py-6 mb-14 md:px-3 xxs:px-3">
                <h1 className="text-2xl pb-5">{heading}</h1>
                <p className="text-[36px] font-[900] leading-6 pt-1 pb-5">
                  {price}<span className="text-sm font-light">Per Month</span>
                </p>
                <div className="pb-2 text-[14px] flex items-center">
                    <p><FcCheckmark className="h-4 mr-1 w-4 text-start"/>
                    </p><p>{para1}</p>
                </div>
                <div className="pb-2 text-[14px] flex items-center">
                <p><FcCheckmark className="h-4 mr-1 w-4 text-start"/>
                    </p><p>{para2}</p>
                </div>
                <div className="pb-2 text-[14px] flex items-center">
                <p><FcCheckmark className="h-4 mr-1 w-4"/>
                    </p><p>{para3}</p>
                </div>
                <div className="pb-2 text-[14px] flex items-center">
                <p><FcCheckmark className="h-4 mr-1 w-4"/>
                    </p><p>{para4}</p>
                </div>
                <button className="bg-[#3596DA] rounded-md text-white text-sm py-2 px-4 mt-3 mb-2">
                  {button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarterPlan;
