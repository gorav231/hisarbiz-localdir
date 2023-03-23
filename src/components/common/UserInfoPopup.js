import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"

/**
 * File: src/components/common/UserInfoPopup.js
 * Description: UserInfoPopup section.
 * Data: 5/02/2023
 * Author: Mukesh verma
 */
const UserInfoPopup = ({ reff,close }) => {
  return (
    <>
      <div className="left-0 right-0 top-0  bottom-0 fixed bg-[rgba(0,0,0,0.88)] z-50">
        <div className="mx-auto">
          <div
            className="xl:w-6/12 lg:w-1/2  md:w-[80%] sm:w-[85%] xs:w-[92%] xxs:w-[98%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md absolute bg-gray-50 py-10 "
            ref={reff}
          >
            <RxCross2 className="mx-2 absolute right-0 top-3 cursor-pointer" onClick={()=>close(false)}/>
            <h3 className="text-3xl pb-3 justify-center flex">
              Login to Business directory
            </h3>
            <div className="justify-center  mt-1 flex rounded-lg tracking-[.8px] py-2">
              <Link href="/" className="w-8/12">
                <button className="common_btn w-full">
                  Continue as User
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <FaArrowDown />
            </div>
            <div className="py-1 justify-center flex">
              <Link href="/userSignup">
                <button className="common_btn">sign up</button>
              </Link>
            </div>
            <div className="justify-center flex  border-b pb-1 text-2xl font-bold">
              or
            </div>
            <div></div>
            <div className="pt-2 justify-center my-2 flex">
              <Link href="/" className="w-8/12">
                <button className="common_btn w-full ">
                  Continue as Advertiser
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <FaArrowDown />
            </div>
            <div className="pt-1 justify-center flex pb-3">
              <Link href="/add-listing">
                <button className="common_btn">sign up</button>
              </Link>
            </div>
            <hr />
            <p className="p-2 justify-center flex">
              Already have an account please sign in
            </p>
            <div className="flex items-center justify-center">
              <Link href="/userLogin">
                <button className="common_btn">sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoPopup;
