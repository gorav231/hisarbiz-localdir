import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { RxTextAlignJustify, RxPerson } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch";
import { useRef } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const dropDownRef = useRef(null);
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen((p) => !p);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (!popupRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    let handler2 = (e) => {
      if (!dropDownRef.current?.contains(e.target)) {
        setdropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("mousedown", handler2);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("mousedown", handler2);
      window.addEventListener("keydown", close);
    };
  }, []);

  const close = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    }
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link
          href="/"
          aria-label="Home"
          title="Home"
          className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#29B5DA]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/advertise"
          aria-label="Blog"
          title="Blog"
          className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#29B5DA]"
        >
          Advertise
        </Link>
      </li>
      <li>
        <Link
          href="/contact-us"
          aria-label="Contact Us"
          title="Contact Us"
          className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#29B5DA]"
        >
          Contact Us
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div
      className={ scrolled ? "sticky top-0 z-10 transition delay-1000 duration-300 ease-in" : "navbar"} >
      <div className="bg-[#F7F7F7] xl:px-3 lg:px-1.5 md:px-3 xl:mx-4 lg:mx-2 xxs:mx-0 xxs:p-0 md:block xxs:hidden">
        {/* //** ----------- menu Items for large device----------- */}

        <div className="xl:w-[95%] lg:w-[100%] md:w-[95%] sm:w-[75%] xs:w-[80%] xxs:w-[90%] py-1 mx-auto z-10">
          <div className="relative flex items-center justify-between ">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Company" title="Company"
               className="inline-flex items-center"
              >
                <Image alt="logo" src="/images/home/gtslogo.png" width={110} height={80} />
              </Link>
              <ul className="xl:pl-14 lg:pl-5 items-center hidden space-x-8 lg:flex">
                {menuItems}
              </ul>
            </div>
            <ul className="md:flex items-center hidden space-x-5 lg:flex">
            <li className="flex items-center">
              <HiOutlineLocationMarker className="h-5 w-5 mr-1"/>Hisar
            </li>
              <li className="py-[10px] lg:w-[255px] xxs:w-[260px] outline-0 rounded-lg border-none hidden lg:block">
                <HeaderSearch />
              </li>
              <li>
                    <button
                      className="bg-[#75E3F1] border border-gray-300 relative p-3 rounded-lg hidden lg:block"
                      onClick={handleClick}>
                      <RxPerson className="text-[#000] outline-none text-[20px]" />
                    </button>
              </li>
              <li>
                <Link href="/add-listing"
                  className="lg:flex  items-center justify-center h-12 px-6 font-medium common_btn hidden">
                  Add Listing
                  <GoPlus className="ml-2 pr-0.5" />
                </Link>
              </li>
            </ul>
            <div className=" lg:hidden ">
              <button aria-label="Open Menu" title="Open Menu"
               className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <RxTextAlignJustify className="text-2xl " />
              </button>

              {/* //** ----------- menu Items for small device----------- */}
              <div
                className={`absolute z-40 p-2 -top-2 md:w-[50%] h-screen w-[80%] ease-linear duration-700  bg-white ${
                  isMenuOpen
                    ? "left-[-12.5%] sm:-left-24 md:-left-9"
                    : "left-[-1000px]"
                }`}
              >
                <div className="">
                  <div className="flex items-center justify-end p-3 mb-4">
                    <button aria-label="Close Menu" title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded-lg hover:bg-gray-200 focus:bg-gray-200 focus:outline-none "
                      onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                  <nav>
                    <ul className="space-y-4 ml-5 sm:ml-5 xxs:ml-10 md:ml-5">
                      {menuItems}
                        <li>
                            <Link href="/userLogin" aria-label="Log in" title="Log in"
                              className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#29B5DA]">
                              Log in
                            </Link>
                      </li>
                      <li className="">
                        <Link href="/add-listing"
                          className="lg:hidden flex  items-center justify-center h-12 px-6 font-medium common_btn">
                          Add Listing <GoPlus className="ml-2" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {!user && open && <UserInfoPopup reff={popupRef} close={setOpen} />} */}
    </div>
  );
};

export default Header;
