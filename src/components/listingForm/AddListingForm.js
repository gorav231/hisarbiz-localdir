import React, { useState, useEffect, useContext, useRef } from "react";
import bcrypt from "bcryptjs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import isValidABN from "abn-validator";
import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import AllListingInput from "../common/AllListingInput";
import { AuthContext } from "@/src/Context/UserContext";
import useFetch from "@/src/hooks/useFetch";
import { geocode } from "@/src/utility/geocode";
// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const API_KEY = "AIzaSyDzLxooRzXh1axdLrfQLUFHHQ98gQz3zS0";
import Router from "next/router";
/**
 * File: src/components/listingForm/AddListingForm.js
 * Description: Business details form.
 * Data: 13/03/2023
 * Author: seema
 */
const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is mandatory")
    .matches(/^[a-zA-Z]+$/, "First name must only contain alphabets"),
  lastName: yup
    .string()
    .required("Last name is mandatory")
    .matches(/^[a-zA-Z]+$/, "Last name must only contain alphabets"),
  phone: yup
    .string()
    .required("Phone is mandatory")
    .matches(
      /^(\+\d{2}[ \-]{0,1}){0,1}(((\({0,1}[ \-]{0,1})0{0,1}\){0,1}[2|3|7|8]{1}\){0,1}[ \-]*(\d{4}[ \-]{0,1}\d{4}))|(1[ \-]{0,1}(300|800|900|902)[ \-]{0,1}((\d{6})|(\d{3}[ \-]{0,1}\d{3})))|(13[ \-]{0,1}([\d \-]{5})|((\({0,1}[ \-]{0,1})0{0,1}\){0,1}4{1}[\d \-]{8,10})))$/,
      "Phone number is invalid"
    ),
  email: yup.string().required("Email is mandatory").email("Enter valid email"),
  password: yup
    .string()
    .required("Password is mandatory")
    .min(
      8,
      "min 8 characters which contain at least one caps,numeric digit and a special character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is mandatory")
    .oneOf([yup.ref("password"), null], "Your passwords do no match"),
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

const AddListingForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  //business hooks
  const [addressVal, setAddressVal] = useState("");
  const [secondAdd, setSecondAdd] = useState("");
  const [error, setError] = useState("");
  const [des, setDes] = useState("");
  //listInfo
  const [businessCat, setBusinessCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [optionCat, setOptionCat] = useState("");
  const [optionEmail, setOptionEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [filterCat, setFilterCat] = useState("");
  const [businessCatError, setBusinessCatError] = useState("");
  const [businessSubError, setBusinessSubError] = useState("");
  const [advVal, setAdvVal] = useState("");
  const [pinCodeState, setPinCodeState] = useState("");

  // =======

  const { user } = useContext(AuthContext);
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      ABN: "",
    },
  });;
  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const cPasswordVisible = () => {
    setShowCPassword(showCPassword ? false : true);
  };

  const { signUp, updateUserDetails } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const geoResult = await geocode(addressVal.label);

    // ------------kulsuma code start here----------

    if (geoResult.lat) {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            latlng: `${geoResult?.lat},${geoResult?.lng}`,
            key: API_KEY,
          },
        }
      );

      if (response.data.status === "OK") {
        const arr = response?.data.results[0]?.address_components;
        setPinCodeState(arr[arr.length - 1]?.long_name);
      } else {
        console.log("trow error");
      }
    }

    // ------------kulsuma code end here---------

    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      businessName,
      ABN,
      businessContact,
    } = data;

    if (user) {
      console.log("user --->",user)
      await axios
        .post(
          `https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/list-business`,
          {
            businessName: businessName,
            businessAddress: addressVal?.label,
            addressAptSuitEtc: secondAdd || "-",
            ABN: ABN,
            listingPhone: businessContact,
            additionalDescription: des || "-",
            website: website || "-",
            contactEmail: optionEmail || "-",
            businessCategory: businessCat,
            businessSubCategory: subCat,
            email: user?.email,
            addOneLatitude: geoResult?.lat,
            addOneLongitude: geoResult?.lng,
            postCode: parseInt(pinCodeState),
          },
          {
            headers: {
              apikey: process.env.NEXT_PUBLIC_API_KEY,
              Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION,
            },
          }
        )
        .then((res) => {
          console.log("+++ res from profile +++", res);
          Router.push("/search/listing");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            confirmButtonColor: "#0077b6",
            text: err.message,
          });
        });
      await axios.post("api/profileMail", {
        businessName: businessName,
        businessAddress: addressVal?.label,
        addressAptSuitEtc: secondAdd || "-",
        ABN: ABN,
        listingPhone: businessContact,
        website: website || "-",
        contactEmail: optionEmail || "-",
        businessCategory: businessCat,
        businessSubCategory: subCat,
        additionalCategory: optionCat || "-",
        email: user?.email,
        advertise: advVal,
        description: des,
      });
    } else {
      signUp(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem(
            "user-uid",
            JSON.stringify({
              uid: user?.uid,
            })
          );
          Swal.fire({
            position: "top-end",
            timerProgressBar: true,
            title: "Successfully Registered Done !",
            width: "20%",
            iconColor: "#0077b6",
            toast: true,
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeInRight",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutRight",
            },
            showConfirmButton: false,
            timer: 3500,
          });
          const profileInfo = {
            displayName: firstName + lastName,
            phoneNumber: phone,
            role: "advertise",
          };
          updateUserDetails(profileInfo).then(async () => {
            try {
              const headers = {
                apikey: process.env.NEXT_PUBLIC_API_KEY,
                Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION,
                "Content-Type": "application/json",
              };
              await axios
                .post(
                  "https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/users",
                  {
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    role: "advertise",
                    email: email,
                    password: bcrypt.hashSync(password, 10),
                  },
                  { headers }
                )
                .then((response) => {
                  console.log("+++ user res +++", response.data);
                })
                .catch((error) => {
                  console.log("+++ auth error +++", error.data.details);
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    confirmButtonColor: "#0077b6",
                    text: error.message,
                  });
                });
              await axios
                .post(
                  `https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/list-business`,
                  {
                    businessName: businessName,
                    businessAddress: addressVal?.label,
                    addressAptSuitEtc: secondAdd || "-",
                    ABN: ABN,
                    listingPhone: businessContact,
                    additionalDescription: des || "-",
                    website: website || "-",
                    contactEmail: optionEmail || "-",
                    businessCategory: businessCat,
                    businessSubCategory: subCat,
                    email: user?.email,
                    addOneLatitude: geoResult?.lat,
                    addOneLongitude: geoResult?.lng,
                    postCode: parseInt(pinCodeState),
                  },
                  {
                    headers: {
                      apikey: process.env.NEXT_PUBLIC_API_KEY,
                      Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION,
                    },
                  }
                )
                .then((res) => {
                  console.log("+++ res from profile +++", res);
                  Router.push("/search/listing");
                })
                .catch((err) => {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    confirmButtonColor: "#0077b6",
                    text: err.message,
                  });
                });
                await axios.post("api/profileMail", {
                  businessName: businessName,
                  businessAddress: addressVal?.label,
                  addressAptSuitEtc: secondAdd || "-",
                  ABN: ABN,
                  listingPhone: businessContact,
                  website: website || "-",
                  contactEmail: optionEmail || "-",
                  businessCategory: businessCat,
                  businessSubCategory: subCat,
                  additionalCategory: optionCat || "-",
                  email: user?.email,
                  advertise: advVal,
                  description: des,
                });
            } catch (error) {
              console.log(error);
            }
          });
        })
        .catch((error) => {
          console.log("+++ authentication error +++", error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            confirmButtonColor: "#0077b6",
            text: "Auth/email-already-in-use",
          });
        });
    }
  };

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

  // =================== End Function Codewithashim ====================
  return (
    // by codewithashim
    <>
      <main>
        <section>
          <div className="grid grid-cols-1 py-20">
            {user ? (
              <>
                <div className="lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-[50px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Business details
                  </h4>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    Just a few more details and we&apos;re ready to go.
                  </p>
                  <div className="grid gap-6 grid-cols-1 justify-between pt-4">
                    <div>
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Business name"
                        required
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("businessName")}
                      />
                      <p className="text-red-500 text-sm">{errors.businessName?.message}</p>
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
                          onBlur: (e) => {
                            addressVal == ""
                              ? setError("Business address is mandatory")
                              : setError("");
                          },
                          onFocus: () => setError(""),
                          styles: {
                            placeholder: (p) => ({
                              ...p,
                              color: "#aba7a7",
                              fontSize: "15px",
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
                      <input
                        type="text"
                        name="secondAdd"
                        placeholder="Apt.,suite,etc (Optional)"
                        required
                        value={secondAdd}
                        onChange={(e) => setSecondAdd(e.target.value)}
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="businessContact"
                        required
                        placeholder="Business contact number"
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("businessContact")}
                      />
                      <p className="text-red-500 text-sm">{errors.businessContact?.message}</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="ABN"
                        placeholder="ABN"
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("ABN")}
                      />
                      <p className="text-red-500 text-sm">{errors.ABN?.message}</p>
                    </div>
                    <div>
                      <textarea
                        placeholder="Add description"
                        name="description"
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        className="text-[15px] font-[500] shadow rounded-lg h-32 w-full pl-2.5 pt-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-[50px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
                  <div className="flex">
                    <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                      Add additional business details
                    </h4>
                  </div>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    Choose your category.
                  </p>
                  <div className="grid gap-6 mb-6 md:grid-cols-1 justify-between pt-4">
                    <input
                      type="text"
                      name="email"
                      value={optionEmail}
                      placeholder="Contact email (optional)"
                      onChange={(e) => setOptionEmail(e.target.value)}
                      className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-ful123456789l p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                      type="text"
                      name="website"
                      value={website}
                      placeholder="Website (optional)"
                      onChange={(e) => setWebsite(e.target.value)}
                      // keyDownHandle={handleKeyDown}
                      className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="businessCat"
                        value={businessCat}
                        required
                        autoComplete="off"
                        ref={catoRef}
                        placeholder="Business category"
                        onChange={(e) => {
                          setBusinessCat(e.target.value);
                          setIsVisible(true);
                          if (e.target.value != "") {
                            setBusinessCat(e.target.value);
                            setBusinessCatError("");
                          }
                        }}
                       //onBlur={() => businessCat == "" ? setBusinessCatError("Business category is mandatory") : setBusinessCatError("")}
                        onFocus={() => setBusinessCatError("")}
                        onClick={() => setIsVisible(!isVisible)}
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <p className="text-red-500 text-sm">{businessCatError}</p>
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
                                        setBusinessCatError("");
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
                      <input
                        type="text"
                        name="subCat"
                        value={subCat}
                        autoComplete="off"
                        ref={subRef}
                        required
                        placeholder="Sub category"
                        onChange={(e) => {
                          setSubCat(e.target.value);
                          setSubVisible(true);
                        }}
                        // onBlur={() =>
                        //   subCat == ""
                        //     ? setBusinessSubError(
                        //         "Business sub category is mandatory"
                        //       )
                        //     : setBusinessSubError("")
                        // }
                        onFocus={() => setBusinessSubError("")}
                        onClick={() => setSubVisible(!subVisible)}
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                       <p className="text-red-500 text-sm">{businessSubError}</p>
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
                                        setBusinessSubError("");
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
                      <input
                        type="text"
                        name="optionCat"
                        value={optionCat}
                        autoComplete="off"
                        placeholder="Additional category"
                        onChange={(e) => setOptionCat(e.target.value)}
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-[50px] lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Do you want to increase your chances of being found online?
                  </h4>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    By having extra content in your listing, customers can find
                    you more easily.
                  </p>
                  <div className="text-center pt-5">
                    <input
                      type="text"
                      placeholder="No"
                      value="no"
                      readOnly
                      className={`placeholder-[#0D0D0D] outline-none cursor-pointer uppercase rounded-lg bg-${
                        advVal === "no" ? "[#3596DA]" : "[#75E3F1]"
                      } w-14 h-10 text-center font-semibold text-sm text-white`}
                      onClick={(e) => {
                        e.preventDefault();
                        setAdvVal("no");
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Yes"
                      value="yes"
                      readOnly
                      className={`placeholder-[#0D0D0D] ml-3 outline-none cursor-pointer uppercase rounded-lg bg-${
                        advVal === "yes" ? "[#3596DA]" : "[#75E3F1]"
                      } w-14 h-10 text-center font-semibold text-sm text-white`}
                      onClick={(e) => {
                        e.preventDefault();
                        setAdvVal("yes");
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="xl:w-[60%] lg:w-[75%] md:w-[80%] sm:w-[80%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60> 72px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#f7f7f7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Account details
                  </h4>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    Let&apos;s get started. we&apos;ll do the hard work, just
                    answer few simple questions.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2 xxs:grid-cols-1 justify-between pt-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        required
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue=""
                        {...register("firstName")}
                      />
                       <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px] w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue=""
                        {...register("lastName")}
                      />
                      <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        className="text-[15px] w-full h-[52px] font-[500] shadow-md rounded-lg px-2.5 py-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue=""
                        {...register("phone")}
                      />
                      <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px] w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("email", { required: true })}
                      />
                      <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px] block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("password")}
                      /> 
                      <p className="text-red-500 text-sm">{errors.password?.message}</p>
                      <span
                        className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-5 pr-3 flex"
                        onClick={passwordVisible}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                    </div>
                    <div className="relative xxs:mb-5">
                      <input
                        type={showCPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm password"
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px] block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("confirmPassword")}
                      />
                     <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
                      <span
                        className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-5 pr-3 flex"
                        onClick={cPasswordVisible}
                      >
                        {showCPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">
                      Login with social accounts
                    </p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      aria-label="Log in with Google"
                      className="p-3 rounded-sm"
                    >
                      <FaGoogle />
                    </button>
                    <button
                      aria-label="Log in with Twitter"
                      className="p-3 rounded-sm"
                    >
                      <FaTwitter />
                    </button>
                    <button
                      aria-label="Log in with FaceBook"
                      className="p-3 rounded-sm"
                    >
                      <FaFacebookF />
                    </button>
                  </div>
                </div>

                <div className="lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-[50px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Business details
                  </h4>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    {" "}
                    Just a few more details and we&apos;re ready to go.
                  </p>
                  <div className="grid gap-6 grid-cols-1 justify-between pt-4">
                    <div>
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Business name"
                        required
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("businessName")}
                      />
                       <p className="text-red-500 text-sm">{errors.businessName?.message}</p>
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
                          onBlur: (e) => {
                            addressVal == ""
                              ? setError("Business address is mandatory")
                              : setError("");
                          },
                          onFocus: () => setError(""),
                          styles: {
                            placeholder: (p) => ({
                              ...p,
                              color: "#aba7a7",
                              fontSize: "15px",
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
                      <input
                        type="text"
                        name="secondAdd"
                        placeholder="Apt.,suite,etc (Optional)"
                        required
                        value={secondAdd}
                        onChange={(e) => setSecondAdd(e.target.value)}
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="businessContact"
                        required
                        placeholder="Business contact number"
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("businessContact")}
                      />
                       <p className="text-red-500 text-sm">{errors.businessContac?.message}</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="ABN"
                        placeholder="ABN"
                        required
                        className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("ABN")}
                      />
                     <p className="text-red-500 text-sm">{errors.ABN?.message}</p>
                    </div>
                    <div>
                      <textarea
                        placeholder="Add description"
                        name="description"
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        className="text-[15px] font-[500] shadow rounded-lg h-32 w-full pl-2.5 pt-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-[50px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
                  <div className="flex">
                    <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                      Add additional business details
                    </h4>
                  </div>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    Choose your category.
                  </p>
                  <div className="grid gap-6 mb-6 md:grid-cols-1 justify-between pt-4">
                    <input
                      type="text"
                      name="email"
                      value={optionEmail}
                      placeholder="Contact email (optional)"
                      onChange={(e) => setOptionEmail(e.target.value)}
                      className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-ful123456789l p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                      type="text"
                      name="website"
                      value={website}
                      placeholder="Website (optional)"
                      onChange={(e) => setWebsite(e.target.value)}
                      // keyDownHandle={handleKeyDown}
                      className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="businessCat"
                        value={businessCat}
                        required
                        autoComplete="off"
                        ref={catoRef}
                        placeholder="Business category"
                        onChange={(e) => {
                          setBusinessCat(e.target.value);
                          setIsVisible(true);
                          if (e.target.value != "") {
                            setBusinessCat(e.target.value);
                            setBusinessCatError("");
                          }
                        }}
                        //handleBlur={() => businessCat == "" ? setBusinessCatError("Business category is mandatory") : setBusinessCatError("")}
                        onFocus={() => setBusinessCatError("")}
                        onClick={() => setIsVisible(!isVisible)}
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                        setBusinessCatError("");
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
                      <input
                        type="text"
                        name="subCat"
                        value={subCat}
                        autoComplete="off"
                        ref={subRef}
                        required
                        placeholder="Sub category"
                        onChange={(e) => {
                          setSubCat(e.target.value);
                          setSubVisible(true);
                        }}
                        onBlur={() =>
                          subCat == ""
                            ? setBusinessSubError(
                                "Business sub category is mandatory"
                              )
                            : setBusinessSubError("")
                        }
                        onFocus={() => setBusinessSubError("")}
                        onClick={() => setSubVisible(!subVisible)}
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                        setBusinessSubError("");
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
                      <input
                        type="text"
                        name="optionCat"
                        value={optionCat}
                        autoOff="off"
                        placeholder="Additional category"
                        onChange={(e) => setOptionCat(e.target.value)}
                        className="text-[15px] font-[500] shadow rounded-lg h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-[50px] lg:w-[60%] md:w-[80%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Do you want to increase your chances of being found online?
                  </h4>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    By having extra content in your listing, customers can find
                    you more easily.
                  </p>
                  <div className="text-center pt-5">
                    <input
                      type="text"
                      placeholder="No"
                      value="no"
                      readOnly
                      className={`placeholder-[#0D0D0D] outline-none cursor-pointer uppercase rounded-lg bg-${
                        advVal === "no" ? "[#3596DA]" : "[#75E3F1]"
                      } w-14 h-10 text-center font-semibold text-sm text-white`}
                      onClick={(e) => {
                        e.preventDefault();
                        setAdvVal("no");
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Yes"
                      value="yes"
                      readOnly
                      className={`placeholder-[#0D0D0D] ml-3 outline-none cursor-pointer uppercase rounded-lg bg-${
                        advVal === "yes" ? "[#3596DA]" : "[#75E3F1]"
                      } w-14 h-10 text-center font-semibold text-sm text-white`}
                      onClick={(e) => {
                        e.preventDefault();
                        setAdvVal("yes");
                      }}
                    />
                  </div>
                </div>
              </>
            )}
            <div className="col-span-5 md:w-[80%] pt-10">
              <div className="grid grid-cols-1">
                <div className="flex sm:justify-end xxs:justify-center">
                  <button
                    className="flex items-center justify-center text-white list_common_btn uppercase rounded-lg font-lato border-solid border-[#3596DA] bg-[#3596DA] font-semibold tracking-normal text-sm xl:w-[20%] md:w-[30%] xs:w-[40%] xxs:w-[100%] h-12"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddListingForm;
