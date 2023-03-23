import React, { useState, useEffect, useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import bcrypt from "bcryptjs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AllListingInput from "../common/AllListingInput";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "@/src/Context/UserContext";
import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

/**
 * File: src/components/listing/AccountInfo.js
 * Description: Business details form.
 * Data: update 3/10/2023
 * Author: seema
 */

const schema = yup.object({
  firstName: yup.string().required("First name is mandatory"),
  lastName: yup.string().required("Last name is mandatory"),
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
});

const AccountInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const cPasswordVisible = () => {
    setShowCPassword(showCPassword ? false : true);
  };

  const { signUp, updateUserDetails } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { firstName, lastName, email, phone, password } = data;
    const role = "advertiser";
    localStorage.setItem(
      "business-account",
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: bcrypt.hashSync(password, 10),
      })
    );
    signUp(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Router.push("/userLogin");
        console.log(user);
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
        localStorage.setItem(
          "user-uid",
          JSON.stringify({
            uid: user?.uid,
          })
        );
        const profileInfo = {
          displayName: firstName + lastName,
          phoneNumber: phone,
          role: role,
        };
        updateUserDetails(profileInfo)
          .then(async () => {
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
                    role: role,
                    email: email,
                    password: bcrypt.hashSync(password, 10),
                  },
                  { headers }
                )
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.error(error);
                });
            } catch (error) {
              console.log("error", error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                confirmButtonColor: "#0077b6",
                text: error.message,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-5 py-20">
        <div className="xl:w-[60%] lg:w-[75%] md:w-[80%] sm:w-[80%] xs:w-[80%] xxs:w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#f7f7f7] shadow-md rounded-lg">
          <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
            Account details
          </h4>
          <p className="mt-4 text-[15px] text-[#676767] font-[400]">
            Let&apos;s get started. we&apos;ll do the hard work, just answer few
            simple questions.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 md:grid-cols-2 xxs:grid-cols-1 justify-between pt-4">
              <div>
                <AllListingInput
                  text="text"
                  name="firstName"
                  holder="First name"
                  className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue=""
                  register={{ ...register("firstName") }}
                  errorMessage={errors.firstName?.message}
                />
              </div>
              <div>
                <AllListingInput
                  text="text"
                  name="lastName"
                  holder="Last name"
                  className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg h-[50px] w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue=""
                  register={{ ...register("lastName") }}
                  errorMessage={errors.lastName?.message}
                />
              </div>
              <div>
                <AllListingInput
                  text="text"
                  name="phone"
                  holder="Phone number"
                  className="placeholder-[#676767] font-Mulish text-[17px] w-full h-[52px] font-[500] shadow-md rounded-lg px-2.5 py-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue=""
                  register={{ ...register("phone") }}
                  errorMessage={errors.phone?.message}
                />
              </div>
              <AllListingInput
                text="email"
                name="email"
                holder="Email address"
                className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg h-[50px] w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                register={{ ...register("email") }}
                errorMessage={errors.email?.message}
              />
              <div className="relative">
                <AllListingInput
                  text={showPassword ? "text" : "password"}
                  name="password"
                  holder="Password"
                  className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg h-[50px] block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  register={{ ...register("password") }}
                  errorMessage={errors.password?.message}
                />
                <span
                  className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-5 pr-3 flex"
                  onClick={passwordVisible}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
              <div className="relative xxs:mb-5">
                <AllListingInput
                  text={showCPassword ? "text" : "password"}
                  name="confirmPassword"
                  holder="Confirm password"
                  className="placeholder-[#676767] text-[17px] font-[500] shadow rounded-lg h-[50px] block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  register={{ ...register("confirmPassword") }}
                  errorMessage={errors.confirmPassword?.message}
                />

                <span
                  className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-5 pr-3 flex"
                  onClick={cPasswordVisible}
                >
                  {showCPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
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
            <div className="float-right">
              <button
                onClick={handleSubmit}
                className="text-white list_common_btn uppercase rounded-lg font-lato border-solid border-[#3596da] bg-[#3596da] font-semibold tracking-normal text-sm px-5 py-3"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
