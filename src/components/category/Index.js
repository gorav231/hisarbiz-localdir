import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORY_SPONSERED_CARD } from "@/src/utility/categorySponseredCard";
import { BUSINESS_CATEGORY_CARD } from "@/src/utility/businessCategoryData";
import { FaImages } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiChevronDown,BiChevronUp } from "react-icons/bi"
import ShowMoreCategory from "./ShowMoreCategory";

/**
 * File: src/components/category/Index.js
 * Description: business category cards.
 * Data: 17/03/2023
 * Author: Renu singroha
 */
const Index = () => {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  return (
    <section>
      <div className="grid grid-cols-12 xl:px-10 lg:px-8 md:px-8 sm:px-1 xs:px-1 xxs:px-1 pb-5">
        <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 xs:col-span-12 xxs:col-span-12 md:px-2 xxs:px-0">
          <h1 className="text-2xl border-b border-slate-400">Hisar Directory</h1>
          <div className="py-4 md:px-0 xxs:px-2">
            <button className="px-3 rounded-md mr-5 my-2 py-2 border border-slate-400">Restaurants & Eating Places</button>
            <button className="px-3 rounded-md mr-5 my-2 py-2 border border-slate-400">Beauty & Personal Care</button>
            <button className="px-3 rounded-md mr-5 my-2 py-2 border border-slate-400">Books & Stationary</button>
            <button className="px-3 rounded-md mr-5 my-2 py-2 border border-slate-400">Beauty & Personal Care</button>
            <button className="px-3 rounded-md mr-5 my-2 py-2 border border-slate-400">Automobiles</button>
            <button className="px-3 rounded-md mr-2 my-2 py-2 border border-slate-400 flex items-center" onClick={()=>setShowMoreCategories(!showMoreCategories)}>{`View More Categories`} {showMoreCategories ? ( <BiChevronUp className="h-6 w-6 ml-1" /> ) : ( <BiChevronDown className="h-6 w-6 ml-1" />)}</button>
          </div>
          {showMoreCategories && <ShowMoreCategory />}
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  pt-1 gap-5">
          {BUSINESS_CATEGORY_CARD.map((cards) => {
            const { id, img, heading, para1, para2, view, contact} = cards;
            return (
              <div key={id} className="shadow-lg mt-2 md:mx-0 xxs:mx-2 md:p-2 xxs:p-4 rounded-md border bg-[#f7f7f7] border-slate-400">
                  <div className="">
                    <Image src={img} height={100} width={100} className="w-full h-40 rounded-md" />
                  </div>
                  <div>
                    <h1 className="text-black1-1 pt-5 cursor-pointer hover:text-lightblue-10">{heading}</h1>
                    <p className="text-sm py-1">{para1}</p>
                    <p className="text-sm pb-1 flex items-center"><HiOutlineLocationMarker className="mr-1"/> {para2}</p>
                    <p className="text-sm pb-1">{contact} <span className="text-lightblue-10 font-semibold cursor-pointer px-1">{view}</span></p>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <p className="border border-slate-400 py-2 px-3 rounded-md mt-2 cursor-pointer"><FaImages className="h-5 w-5 text-black1-1"/></p>
                    <p className="border border-slate-400 py-2 px-3 rounded-md mt-2 cursor-pointer"><ImWhatsapp className="h-5 w-5 text-black1-1"/></p>
                  </div>
              </div>
            );
          })}
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 xs:col-span-12 xxs:col-span-12 px-2">
          {CATEGORY_SPONSERED_CARD.map((elem) => {
            const { id, img, category, heading, contact_btn, website_btn, link, } = elem;
            return (
              <div key={id} className="shadow-lg mt-2 xxs:mx-2 mb-8 md:p-8 xxs:p-4 rounded-md border-t-2 bg-[#f7f7f7] border-[#f7f7f7]">
                <div className="block mb-30 wow fadeInUp">
                  <div className="">
                    <Image src={img} height={100} width={100} />
                  </div>
                  <div className="info">
                    <h5 className="text-lg pt-2 pb-2">{heading}</h5>
                    <p className="text-gray-500 text-[15px] tracking-wide font-Mulish">
                      {category}
                    </p>
                  </div>
                  <div>
                    <button className="px-3 mt-3 text-sm py-2 mr-3 border border-slate-400 rounded hover:text-white hover:bg-lightblue-10 hover:border-lightblue-10 font-Mulish">
                      {contact_btn}
                    </button>
                    <Link href={link} target="_blank">
                      <button className="px-3 mt-3 text-sm py-2 border border-slate-400 rounded hover:text-white hover:bg-lightblue-10 hover:border-lightblue-10 font-Mulish">
                        {website_btn}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
