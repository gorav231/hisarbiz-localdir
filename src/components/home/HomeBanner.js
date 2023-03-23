import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { RiSearchLine } from "react-icons/ri";

import { TfiInkPen } from "react-icons/tfi";
import UseControlPopOutside from "@/src/hooks/UseControlPopOutside";
import SuggetionNameCategory from "@/src/shared/SuggetionNameCategory";
import { supabase } from "@/supabase";
/**
 * File: src/components/home/HomeBanner.js
 * Description: home banner section.
 * Data: 16/03/2023
 * Author: Renu singroha
 */
const HomeBanner = () => {
    const router = useRouter();
    const [CData, setCData] = useState([]);
  
    const defaultSpanStyle = {
      left: "4%",
      top: "70%",
      backgroundColor: "#fff",
      height: "40px",
      zIndex: "3",
      position: "absolute",
      color: "black",
      width: "40px",
      transform: "rotate(45deg)",
    };
    const defaultSuggestionBoxStyle = {
      backgroundColor: "white",
      overflow: "auto",
      zIndex: "8",
      maxHeight: "170px",
      padding: "10px 0px",
      color: "black",
      position: "absolute",
      width: "100%",
      textAlign: "left",
      shadow: "10px 5px black",
      borderRadius: '5px',
    };
  
    const [searchData, setSearchData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchByLocation, setSearchByLocation] = useState("");
  
    useEffect(() => {
      try {
        const searchData = async () => {
          const { data, error } = await supabase
            .from("list-business")
            .select("*")
            .filter("businessName", "ilike", `%${searchTerm}%`)
            .filter("businessCategory", "ilike", `%${searchTerm}%`)
            .filter("businessAddress", "ilike", `%${searchByLocation}%`);
          if (data) {
            setSearchData(data);
          } else {
            console.log(error);
          }
        };
        searchData();
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    const categoryBy = searchData?.filter((n) =>
      n.businessCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const buisnessNameBy = searchData?.filter((n) =>
      n.businessName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const combainSearchData = categoryBy.concat(buisnessNameBy);
  
    const filterdData = combainSearchData.filter(
      (f) =>
        f?.businessAddress.toLowerCase() ===
          searchByLocation.toLocaleLowerCase() || searchByLocation === ""
    );
  
    const businessName = searchData?.map((n) => n.businessName);
    const businessCategory = searchData?.map((n) => n.businessCategory);
  
    const suggestData = businessName.concat(businessCategory) || [];
  
    const [isVisible, setIsVisible] = useState(false);
    let addressref = useRef(null);
    const [val, setVal] = useState("");
  
    const suggestionInfos = suggestData.filter((text) =>
    text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  let previousText = "";
  const suggestionInfo = suggestionInfos.filter((text) => {
    if (text.toLowerCase() !== previousText.toLowerCase()) {
      previousText = text;
      return true;
    }
    return false;
  });
  
  const handelSerch = (e) => {
    if (searchTerm || searchByLocation) {
      router.push(`/search/listing`);
    }else if (searchTerm || searchByLocation == ""){
      alert("Enter your business first!")
    }
    localStorage.setItem("searchRes", JSON.stringify(filterdData));
  
    setSearchTerm("");
    setSearchByLocation("");
  };
  
  UseControlPopOutside(setIsVisible, addressref);
  return (
        <div className="grid grid-cols-6">
          <div className="col-span-6 relative -z-10 -top-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.06572257436!2d75.6854991157293!3d29.156322701334577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1678954693348!5m2!1sen!2sin"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            height="340"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
          <div className="2xl:w-2/6 xl:w-[42%] lg:w-4/6 mx-4 my-4  bg-[rgb(0,0,0,0.7)] rounded-md absolute">
          <div className="xxs:mx-1 md:pt-8 xxs:pt-2 md:m-2 rounded-md pt-2 pb-7">
           
            <div className="flex md:flex-row justify-between xxs:flex-row items-center">
              <h1 className="lg:text-3xl md:text-[25px] xxs:text-[15px] leading-7 text-white font-bold font-roboto xxs:pb-5 md:pb-5 xxs:px-2 xxs:text-left md:text-center">
                One-stop solution for every business & household needs
              </h1>
              <div className="md:mx-auto xxs:mx-0 xxs:pl-0 xxs:mb-4 md:hidden xxs:mr-5 xxs:block">
                <Image
                  src="/images/pre-loader/home-loader.gif"
                  width={150}
                  height={150}
                  className="h-12 w-12"
                  alt="loader"
                ></Image>
              </div>
            </div>
            <div className="flex md:flex-row xxs:flex-row items-center justify-center">
              <p className="font-medium ml-1 leading-6 pb-2 font-lato text-white text-base text-[15.5px] xxs:text-center md:text-center md:block xxs:hidden">
                Find local businesses and professionals from the authentic source.
              </p>
              <div className=" xxs:mx-0 xxs:pl-0  md:block xxs:hidden">
                <Image
                  src="/images/pre-loader/home-loader.gif"
                  width={150}
                  height={150}
                  className="h-12 w-12"
                  alt="loader"
                ></Image>
              </div>
            </div>

            <div className="md:p-2 xxs:px-2.5 xxs:py-4 xxs:mx-1.5 rounded-lg xxs:-mt-4 2xl:mx-8 md:mx-0">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="md:flex gap-2">
                  <div className="md:w-11/12 w-full grid gap-2 grid-cols-1 md:grid-cols-1">
                    <div className="bg-[#f7f7f7] rounded-lg relative">
                      <div className="">
                        <div>
                          <input
                            type="text"
                            value={val === "" ? searchTerm : val}
                            onChange={(e) => {
                              setSearchTerm(e.target.value);
                            }}
                            className="w-11/12 text-sm bg-inherit h-12  px-4  outline-none "
                            placeholder="Bussiness type or name"
                            name="search"
                            autoComplete="off"
                            required=""
                            onClick={() => {
                              setIsVisible(!isVisible);
                              setVal("");
                            }}
                          />

                          {isVisible && (
                            <div>
                              {suggestionInfo?.length > 0 &&
                                searchTerm != "" && (
                                  <SuggetionNameCategory
                                    rref={addressref}
                                    addressData={suggestionInfo}
                                    setSData={setCData}
                                    setIsVisible={setIsVisible}
                                    setSQuery={setSearchTerm}
                                    defaultSpanStyle={defaultSpanStyle}
                                    defaultSuggestionBoxStyle={
                                      defaultSuggestionBoxStyle
                                    }
                                    val={val}
                                    setVal={setVal}
                                  />
                                )}
                            </div>
                          )}
                        </div>
                        <span className="text-[20px] w-1/12 text-gray-400 absolute top-3.5 right-0">
                          <TfiInkPen />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/12 w-full mt-4 md:mt-0">
                    <div className="flex items-center  justify-center border border-gray-300 rounded-md text-2xl w-full">
                      <button
                        title="Search-Now"
                        onClick={() => handelSerch()}
                        className="p-2.5"
                      >
                        <RiSearchLine className="text-white"/>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
          <Link href="/get-quotes">
            <div className="z-50 absolute md:block xxs:hidden">
              <button className="fixed right-5 bottom-2 common_btn">
                Get-Quotes
              </button>
            </div>
          </Link>
        </div>
      );
}

export default HomeBanner