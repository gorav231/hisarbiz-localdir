import React, { useState, useRef, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { TfiInkPen } from "react-icons/tfi";
import useControlPopOutside from "../hooks/useControlPopOutside";
import SuggetionNameCategory from "../shared/SuggetionNameCategory";
import { supabase } from "@/supabase";
import UsecontrolPopWithEsc from "../hooks/useControlPopWithEsc";
import { TbSearch } from "react-icons/tb";


/**
 * File: src/layouts/HeaderSearch.js
 * Description: search component for header.
 * Data: 16/03/2023
 * Author: Renu singroha
 */

const HeaderSearch = ({ logo }) => {
  let filterRef = useRef(null);
  const router = useRouter();
  let catoRef = useRef(null);
  const [showFilter, setshowFilter] = useState(false);
  const [CData, setCData] = useState([]);

 const defaultSpanStyle = {
    left: "3%",
    top: "0%",
    backgroundColor: "#fff",
    height: "40px",
    zIndex: "3",
    position: "absolute",
    color: "black",
    width: "40px",
    transform: "rotate(45deg)",
    boxShadow: '0px 0px 5px'
  };
  const defaultSuggestionBoxStyle = {
    backgroundColor: "#fff",
    overflow: "auto",
    zIndex: "8",
    maxHeight: "170px",
    padding: "10px 0px",
    color: "black",
    position: "absolute",
    width: "100%",
    textAlign: "left",
    boxShadow: '0px 0px 5px',
    borderRadius: '5px',
  };

  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  console.log(searchByLocation);

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
     // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // ------for current location add code end--------
  const [isVisibleLocation, setIsVisibleLocation] = useState(false);

  useControlPopOutside(setIsVisible, addressref);
  UsecontrolPopWithEsc(setIsVisible);

  // ------for current location add code end--------

  useControlPopOutside(setIsVisibleLocation, addressref);

  useEffect(() => {
    let handler = (e) => {
      if (!catoRef.current?.contains(e.target)) {
        setCData([]);
      }
    };
    document.addEventListener("mousedown", handler);

    let handler2 = (e) => {
      if (!filterRef.current?.contains(e.target)) {
        setshowFilter(false);
      }
    };
    document.addEventListener("mousedown", handler2);

    const close = (e) => {
      if (e.keyCode === 27) {
        setshowFilter(false);
      }
    };
    window.addEventListener("keydown", close);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("mousedown", handler2);
      window.removeEventListener("keydown", close);
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
        <div
          ref={filterRef}
          className="z-10 rounded-lg pt-2  w-full  "
        >
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="md:col-span-6 xxs:col-span-12">
                <div className="relative flex items-center justify-between">
                  <div className="bg-white rounded-lg mb-2 w-full mr-2">
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
                        }}
                      />
                      {isVisible && (
                        <div>
                          {suggestionInfo?.length > 0 && searchTerm != "" && (
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
                    <span className="text-[20px] w-1/12 absolute text-gray-400 top-[15px] inset-y-0 right-5  flex">
                      <TfiInkPen />
                    </span>
                  </div>
                  <div >
                    <button
                      className="z-10 -mr-2" onClick={() => handelSerch()}> 
                      <TbSearch className="h-5 w-5"/>
                    </button>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </div>
  );
};

export default HeaderSearch;
