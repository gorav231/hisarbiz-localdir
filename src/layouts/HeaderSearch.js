import React, { useState, useRef, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { DataContextCommon } from "../Context/DataContext";
import { SlLocationPin } from "react-icons/sl";
import { TfiInkPen } from "react-icons/tfi";
import useControlPopOutside from "../hooks/useControlPopOutside";
import SuggetionNameCategory from "../shared/SuggetionNameCategory";
import { supabase } from "@/supabase";
import UsecontrolPopWithEsc from "../hooks/useControlPopWithEsc";
import axios from "axios";
import { BiCurrentLocation } from "react-icons/bi";
import SuggetionPop from "../shared/SuggetionPop";
const API_KEY = "AIzaSyDzLxooRzXh1axdLrfQLUFHHQ98gQz3zS0";

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
  const [CQuery, setCQuery] = useState("");
  const [CData, setCData] = useState([]);
  const [SQuery, setSQuery] = useState("");
  const [SData, setSData] = useState([]);
  const { searchVal, handelSerch } = useContext(DataContextCommon);

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

  const handleShowFilter = () => {
    setshowFilter(true);
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

  const [searchValue, setSearchValue] = useState("");
  const { currenLetitude, currentLongitude } = useContext(DataContextCommon);
  const [isVisibleLocation, setIsVisibleLocation] = useState(false);

  const address = combainSearchData?.filter((n) =>
    n?.businessAddress.toLowerCase().includes(searchByLocation.toLowerCase())
  );

  const handleCurrentLocation = async () => {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          latlng: `${currenLetitude},${currentLongitude}`,
          key: API_KEY,
        },
      }
    );
    if (response.data.status === "OK") {
      const result = response.data.results;
      const city = result[0].address_components.find((component) => {
        return component.types.includes("locality");
      }).long_name;
      setSearchByLocation(city);
    } else {
      throw new Error(`Geocoding failed: ${response.data.status}`);
    }
  };

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
  }, []);

  return (
    <div>
      <input
        type="text"
        onClick={handleShowFilter}
        placeholder="Search..."
        className="h-12 px-4 border border-gray-300 rounded-lg outline-none w-full"
      />
      {showFilter && (
        <div
          ref={filterRef}
          className="absolute z-10 top-10 right-[14%] bg-white rounded-lg p-5 ml-[-150px] w-[35%]  -mt-10"
        >
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="md:col-span-6 xxs:col-span-12">
                <div className="relative grid grid-cols-1 gap-2">
                  <div className="bg-[#f7f7f7] rounded-lg mb-2">
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
                    <span className="text-[20px] w-1/12 absolute text-gray-400 top-[15px] inset-y-0 right-0  flex">
                      <TfiInkPen />
                    </span>
                  </div>
                  {/* <div className="relative">
                    <div className="bg-[#f7f7f7] rounded-lg ">
                      <div>
                        <div className="relative">
                          <input
                            type="text"
                            className="mb-0 bg-inherit  h-12 text-sm w-11/12 px-4 outline-none"
                            value={searchByLocation}
                            autoComplete="off"
                            ref={addressref}
                            onClick={() =>
                              setIsVisibleLocation(!isVisibleLocation)
                            }
                            onChange={(e) => setSearchByLocation(e.target.value)}
                            placeholder={"Suburb or Postcode"}
                            addressRef={addressref}
                            name="location"
                            required=""
                          />
                        </div>

                        {isVisibleLocation && (
                          <>
                            {address?.length > 0 && searchByLocation != "" && (
                              <div>  
                                <SuggetionPop
                                  rref={addressref}
                                  SQuery={searchByLocation}
                                  setSQuery={setSearchByLocation}
                                  SData={SData}
                                  addressData={address}
                                  setSData={setSData}
                                  setIsVisible={setIsVisibleLocation}
                                  defaultSpanStyle={defaultSpanStyle}
                                  defaultSuggestionBoxStyle={ defaultSuggestionBoxStyle}
                                />
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <span className="text-[20px] w-1/12 absolute text-gray-400  top-[12px] right-0">
                        <SlLocationPin />
                      </span>
                    </div>
                  </div>
                  {isVisibleLocation && (
                    <div>
                      {searchByLocation.length === 0 && (
                        <div
                          className="mt-2 rounded-md w-8/12 bg-white border border-gray-300  shadow-xl"
                          ref={addressref}
                        >
                          <button
                            className=" py-2 mb-2 rounded-lg text-bold w-full text-gray-500 flex items-center justify-center gap-2"
                            onClick={() => handleCurrentLocation()}
                          >
                            <BiCurrentLocation className="text-2xl"></BiCurrentLocation>
                            Select Current Location
                          </button>
                        </div>
                      )}
                    </div>
                  )}  */}
                  <div className="relative">
                    <button
                      onClick={() => handelSerch()}
                      className="mt-2 hover:text-white hover:bg-hoverColor inline-flex relative z-10 bg-lightblue-10 items-center
                         justify-center h-12 text-white text-sm font-bold leading-7 uppercase rounded-lg w-full"
                    >
                      Search Now
                    </button>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
