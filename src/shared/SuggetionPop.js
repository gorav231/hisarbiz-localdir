import React from "react";


const SuggetionPop = ({
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

  const setLocation = (e) => {
    
  };

  return (
    <div
      ref={rref}
      className="z-[289]  absolute right-0 left-0 top-[64px] w-full bg-white shadow-xl"
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
              onClick={() => {
                setSData([]);
                setIsVisible(false);
                setSQuery(val?.businessAddress);
                setLocation(val?.businessAddress);
              }}
            >
              {val?.businessAddress}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SuggetionPop;