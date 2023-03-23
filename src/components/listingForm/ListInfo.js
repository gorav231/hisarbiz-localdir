import React, { useState, useEffect, useRef } from "react";
import AllListingInput from "../common/AllListingInput";
import { RxDoubleArrowRight } from "react-icons/rx";
import useFetch from "@/src/hooks/useFetch";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
/**
 * File: src/components/listing/ListInfo.js
 * Description: Business details form.
 * Data:update 3/10/2023
 * Author: seema
 */
const ListInfo = ({ num, setNum }) => {
  const [businessCat, setBusinessCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [optionCat, setOptionCat] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [filterCat, setFilterCat] = useState("");
  const [showText, setShowText] = useState(false);
  let catoRef = useRef(null);
  let subRef = useRef(null);
  // fetch business category
  let businessData;
  const fetchListInfo = useFetch(
    `https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/business-category?select=*&title=ilike.%25${businessCat}%25`
  );
  businessData = fetchListInfo.data;
  const fetchSublistInfo = useFetch(
    `https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/business-sub-category?select=*&title=ilike.%25${subCat}%25`
  );
  let filterSubResult = fetchSublistInfo?.data?.filter(
    (category) => category.category_id === filterCat.id
  );
  //sort category
  const sortByTitle = () => {
    const sortData = [...businessData].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    businessData = sortData;
  };
  sortByTitle();
  const handleChange = (e) => {
    setBusinessCat(e.target.value);
    if (e.target.value != "") {
      setBusinessCat(e.target.value);
    }
  };
  const handleKeyDown = async (event) => {
    if (event.key === "Tab") {
      const res = await axios.get(
        `https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/business-category?select=*&title=ilike.%25${businessCat}%25`,
        {
          headers: {
            apiKey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbnFyb3dmcWtudmR3bmdicGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjIzMDMsImV4cCI6MTk5MTkzODMwM30.B1nMH85b6ENzM1h8ZiG2qRmYMBB-J9LttgVhZPUY61s`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbnFyb3dmcWtudmR3bmdicGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjIzMDMsImV4cCI6MTk5MTkzODMwM30.B1nMH85b6ENzM1h8ZiG2qRmYMBB-J9LttgVhZPUY61s`,
          },
        }
      );
      businessData = res.data;
    }
  };
  useEffect(()=>{
    localStorage.setItem(
        "list-info",
        JSON.stringify({
          email: email || "-",
          website: website || "-",
          businessCategory: businessCat || "-",
          subCategory: subCat || "-",
          optinalCategory: optionCat || "-",
        })
      );
  },[email,website,businessCat,subCat,optionCat])
  useEffect(() => {
    window.scrollTo(0, 0);
    let handler = (e) => {
      if (!catoRef.current?.contains(e.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  useEffect(() => {
    let handlerSub = (e) => {
      if (!subRef.current?.contains(e.target)) {
        setSubVisible(false);
      }
    };
    document.addEventListener("mousedown", handlerSub);
    return () => {
      document.removeEventListener("mousedown", handlerSub);
    };
  }, []);
  return (
    <div className="grid grid-cols-5 py-20">
      <div className="lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
        <div className="flex">
          <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
            Add additional details
          </h4>
          {!showText ? (
            <AiFillCaretDown
              className="mt-3 ml-2 text-md cursor-pointer"
              onClick={() => setShowText(!showText)}
            />
          ) : (
            <AiFillCaretUp
              className="mt-3 ml-2 text-md cursor-pointer"
              onClick={() => setShowText(!showText)}
            />
          )}
        </div>
        <p className="mt-4 text-[15px] text-[#676767] font-[400]">
          What business name would you like featured in your listing? Also, give
          us the contact details you&apos;d like your customers to use.
        </p>
        {showText && (
            <form>
          <div className="grid gap-6 mb-6 md:grid-cols-1 justify-between pt-4">
            <AllListingInput
              text="text"
              name="email"
              inputVal={email}
              holder="Contact email (optional)"
              inputhandle={(e) => setEmail(e.target.value)}
              className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <AllListingInput
              text="text"
              name="website"
              inputVal={website}
              holder="Website (optional)"
              inputhandle={(e) => setWebsite(e.target.value)}
              keyDownHandle={handleKeyDown}
              className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="relative">
              <AllListingInput
                text="text"
                name="businessCat"
                inputVal={businessCat}
                autoOff="off"
                reff={catoRef}
                holder="Business category (optional)"
                inputhandle={(e) => handleChange(e)}
                inputClick={() => setIsVisible(!isVisible)}
                keyDownHandle={handleKeyDown}
                className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             
              />
              <span className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-5 pr-3 flex">
                <FiChevronDown
                  className="cursor-pointer"
                  onClick={() => setIsVisible(!isVisible)}
                />
              </span>
              {isVisible && (
                <div>
                  {businessData?.length > 0 && (
                    <div ref={catoRef}>
                      <div className="px-0 py-2 w-full bg-white border border-slate-300 h-44 rounded-md overflow-scroll overflow-x-hidden mt-2">
                        {businessData?.map((val, index) => {
                          return (
                            <p
                              className="text-black cursor-pointer px-5 py-1 hover:bg-cyan-100 text-[16px] font-bold"
                              key={index}
                              onClick={() => {
                                setBusinessCat(val.title);
                                setIsVisible(false);
                                setFilterCat(val);
                              }}
                            >
                              {val.title}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative">
              <AllListingInput
                text="text"
                name="subCat"
                inputVal={subCat}
                autoOff="off"
                reff={subRef}
                holder="Sub category (optional)"
                inputhandle={(e) => {
                  setSubCat(e.target.value);
                }}
                inputClick={() => setSubVisible(!subVisible)}
                className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-5 pr-3 flex">
                <FiChevronDown
                  className="cursor-pointer"
                  onClick={() => setSubVisible(!subVisible)}
                />
              </span>
              {subVisible && (
                <div ref={subRef}>
                  {filterSubResult?.length > 0 && (
                    <div>
                      <div className="px-0 py-2 w-full bg-white border border-slate-300 h-44 rounded-md overflow-scroll overflow-x-hidden mt-2">
                        {filterSubResult?.map((val, index) => {
                          return (
                            <p
                              className="text-black cursor-pointer px-5 py-1 hover:bg-cyan-100 text-[16px] font-bold"
                              key={index}
                              onClick={() => {
                                setSubCat(val.title);
                                setSubVisible(false);
                              }}
                            >
                              {val.title}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <AllListingInput
                text="text"
                name="optionCat"
                inputVal={optionCat}
                autoOff="off"
                holder="Additional category"
                inputhandle={(e) => setOptionCat(e.target.value)}
                className="placeholder-[#605C5C] text-[17px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};
export default ListInfo;
