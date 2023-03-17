import React, { useContext } from "react";
import { DataContextCommon } from "../Context/DataContext";

const SuggetionNameCategory = ({
  rref,
  addressData,
  spanStyle,
  setSData,
  setIsVisible,
  setSQuery,
  defaultSpanStyle,
  defaultSuggestionBoxStyle,
  suggestionBoxStyle,
 
}) => {
  const {
    searchVal, setSearchVal
  } = useContext(DataContextCommon);
  return (
    <div
      ref={rref}
      className="z-[449] absolute right-0 left-0 top-[64px] w-full shadow-md shadow-black"
    >
      <span style={spanStyle ? spanStyle : defaultSpanStyle}></span>
      <div
        style={
          suggestionBoxStyle ? suggestionBoxStyle : defaultSuggestionBoxStyle
        }
      >
        {addressData.map((val, key) => {
          return (
            <p
              className=" text-lightg-1 hover:bg-gray-200 hover:text-gray-800 capitalize cursor-pointer font-bold pl-5 p-1.5 text-sm"
              key={key}
              onClick={(e) => {
                setSData([]);
                setIsVisible(false);
                setSQuery(val);
                setSearchVal(val)
              }}
            >
              {val}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SuggetionNameCategory;
