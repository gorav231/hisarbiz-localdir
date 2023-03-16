import React, { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { RiSearchLine } from "react-icons/ri";

import { TfiInkPen } from "react-icons/tfi";
import useControlPopOutside from "@/src/hooks/useControlPopOutside";
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
    }
    localStorage.setItem("searchRes", JSON.stringify(filterdData));
  
    setSearchTerm("");
    setSearchByLocation("");
  };
  
  useControlPopOutside(setIsVisible, addressref);
  return (
        <div className="block">
          <div className="before:bg-homeBanner before:block before:left-0 before:-z-20 before:bg-cover before:top-[-40px] before:absolute before:h-[110%] before:w-full md:pt-8 xxs:pt-3 md:pb-24 xxs:pb-[70px] relative ">
            <div className="mx-auto xxs:max-w-xl  md:max-w-5xl xl:max-w-6xl lg:px-0 md:px-10">
              <div className="grid grid-cols-3 gap-4 relative">
                <div className="lg:col-span-2 xxs:col-span-3">
                  <div className="xxs:mx-1 md:pt-10 xxs:pt-2">
                    <div className="flex md:flex-row justify-between xxs:flex-row items-center">
                      <h1 className="lg:text-4xl md:text-[25px] xxs:text-[15px] leading-7 text-black1-1 font-bold font-roboto xxs:pb-5 xxs:px-2 xxs:text-left xs:text-left">
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
                    <div className="flex md:flex-row xxs:flex-row items-center ">
                      <p className="font-medium ml-1 xxs:pt-5 pb-5 leading-6 font-lato text-lightg-1 text-base xxs:text-center xs:text-left md:block xxs:hidden">
                        Find local businesses and professionals from the authentic
                        source.
                      </p>
                      <div className="md:ml-[132px] xxs:mx-0 md:pl-16 xxs:pl-0 md:block xxs:hidden">
                        <Image
                          src="/images/pre-loader/home-loader.gif"
                          width={150}
                          height={150}
                          className="h-12 w-12"
                          alt="loader"
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white md:p-2 xxs:px-2.5 xxs:py-4 xxs:mx-1.5 rounded-lg xxs:-mt-4">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="md:flex gap-2">
                        <div className="md:w-11/12 w-full grid gap-2 grid-cols-1 md:grid-cols-1">
                          <div className="bg-[#f7f7f7] rounded-lg relative">
                            <div className="">
                              <div>
                                <input
                                  type="text"
                                  value={val === "" ? searchTerm : val }
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
                              <RiSearchLine />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="md:col-span-1 xxs:col-span-3 animate-fade-in-down">
                  <Image
                    src="/images/home/herobanner-side.svg"
                    alt="hero-one-bg"
                    className="object-cover bg-contain lg:block xxs:hidden"
                    width={1000}
                    height={1000}
                    href="/"
                  />
                </div>
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