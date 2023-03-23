import React, { useEffect, useState } from "react";
import AllListingInput from "../common/AllListingInput";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useForm } from "react-hook-form";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import isValidABN from "abn-validator";
import { geocode } from "@/src/utility/geocode";
import ListInfo from "./ListInfo";

/**
 * File: src/components/listing/BusinessInfo.js
 * Description: Business details form.
 * Data: update 3/10/2023
 * Author: seema
 */
const schema = yup.object({
  businessName: yup.string().required("Business name is mandatory"),
  ABN: yup
    .string()
    .required("ABN is mandatory")
    .test("isValidABN", "Invalid ABN", (value) => isValidABN(value)),
     businessContact: yup
    .string()
    .required("Business contact is mandatory")
    .matches(
      /^(\+\d{2}[ \-]{0,1}){0,1}(((\({0,1}[ \-]{0,1})0{0,1}\){0,1}[2|3|7|8]{1}\){0,1}[ \-]*(\d{4}[ \-]{0,1}\d{4}))|(1[ \-]{0,1}(300|800|900|902)[ \-]{0,1}((\d{6})|(\d{3}[ \-]{0,1}\d{3})))|(13[ \-]{0,1}([\d \-]{5})|((\({0,1}[ \-]{0,1})0{0,1}\){0,1}4{1}[\d \-]{8,10})))$/,
      "Business contact is invalid"
    ),
   
});
const BusinessInfo = ({addreq}) => {
  const [addressVal, setAddressVal] = useState("");
  const [secondAdd, setSecondAdd] = useState("");
  const [error, setError] = useState("");
  const [des, setDes] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      ABN: "",
    },
  });
  const handleBlur = (e) => {
    if (!addressVal) {
      setError("Business address is mandatory");
    }
  };
  const handleClick = () => {
   
    if (!addressVal) {
      setError("Business address is mandatory");
    }
  };
  const onSubmit = async (data) => {
    addreq()
    const { businessName, ABN, businessContact } = data;
    const isValid = isValidABN(ABN);
    if (addressVal == "") {
      setError("Business address is mandatory");
    } else {
      const geoResult = await geocode(addressVal.label);
      localStorage.setItem(
        "business-info",
        JSON.stringify({
          businessName: businessName,
          businessContact: businessContact,
          businessLocation: addressVal?.label,
          optionalAdd: secondAdd || "-",
          ABN: ABN,
          addDes:des,
          latitude: geoResult?.lat,
          longitude: geoResult?.lng,
          // addOneCoordinates:geoResult
        })
      );
     
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pb-20 pt-6">
      {/* Business details first info */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Business details second info */}
        <div className="lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-[50px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
          <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
            Business details
          </h4>
          <p className="mt-4 text-[15px] text-[#676767] font-[400]">
            Just a few more details and we&apos;re ready to go.
          </p>
          <div className="grid gap-6 grid-cols-1 justify-between pt-4 ">
            <div>
              <AllListingInput
                text="text"
                name="businessName"
                holder="Business name"
                className="placeholder-[#0D0D0D] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                register={{ ...register("businessName") }}
                errorMessage={errors.businessName?.message}
              />
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 justify-between pt-4">
            <div>
              <GooglePlacesAutocomplete
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["au"],
                  },
                }}
                minLengthAutocomplete={2}
                selectProps={{
                  value: addressVal,
                  placeholder: "Business Location",
                  onChange: setAddressVal,
                  onBlur: (e) => handleBlur(e),
                  onFocus: () => setError(""),
                  styles: {
                    placeholder: (p) => ({
                      ...p,
                      color: "#0D0D0D",
                      fontSize: "17px",
                      fontWeight: "500",
                    }),
                    input: (provided) => ({
                      ...provided,
                      width: "100%",
                      border: "none",
                      outline: "none",
                      color: "#0D0D0D",
                      fontWeight: "500",
                      borderRadius: "8px",
                    }),
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: state.isFocused ? "none" : "none",
                      outline: state.isFocused ? "none" : "none",
                      outline: "none",
                      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
                      borderRadius: "8px",
                    }),
                    indicatorsContainer: (p) => ({
                      ...p,
                      display: "none",
                    }),
                    indicatorSeparator: (p) => ({
                      display: "none",
                    }),
                    dropdownIndicator: (p) => ({
                      display: "none",
                    }),
                    container: (provided) => ({
                      ...provided,
                      outline: "none",
                      border: "none",
                    }),
                    valueContainer: (p, state) => ({
                      ...p,
                      outline: state.isFocused ? "none" : "none",
                      border: "none",
                      padding: "8px",
                      fontSize: "17px",
                      color: "#0D0D0D",
                      fontWeight: "500",
                      border: "none",
                      backgroundColor: "white",
                      borderRadius: "8px",
                    }),
                  },
                }}
              />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
            <div>
              <AllListingInput
                text="text"
                name="secondAdd"
                inputVal={secondAdd}
                holder="Apt.,suite,etc (Optional)"
                inputhandle={(e) => setSecondAdd(e.target.value)}
                className="placeholder-[#0D0D0D] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <AllListingInput
                text="text"
                name="businessContact"
                holder="Business contact number"
                className="placeholder-[#0D0D0D] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                register={{ ...register("businessContact") }}
                errorMessage={errors.businessContact?.message}
              />
            </div>
           <div>
           <AllListingInput
              text="text"
              name="ABN"
              holder="ABN"
              className="placeholder-[#0D0D0D] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              register={{ ...register("ABN") }}
              errorMessage={errors.ABN?.message}
            />
           </div>
           <div>
            <textarea placeholder="Add description" value={des} name="description" onChange={(e) => setDes(e.target.value
            )}
             className="placeholder-[#0D0D0D] text-[17px] font-[500] shadow rounded-lg h-32 w-full pl-2.5 pt-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           
            >
            </textarea>
           </div>
          </div>
        </div>
        <ListInfo />
        <div className="col-span-5 md:w-[80%]">
        <div className="grid grid-cols-1">
            <div className="flex sm:justify-end xxs:justify-center">
              <button
                className="flex items-center justify-center text-white list_common_btn uppercase rounded-lg font-lato border-solid border-[#3596DA] bg-[#3596DA] font-semibold tracking-normal text-sm xl:w-[20%] md:w-[30%] xs:w-[40%] xxs:w-[100%] h-12"
                onClick={handleClick}
              >
                Submit{" "}
              </button>
            </div>
            </div>
          </div>
      </form>
    </div>
  );
};
export default BusinessInfo;
