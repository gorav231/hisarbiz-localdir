import React from "react";
import Layout from "@/src/layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination } from "swiper";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import ServiceCards from "./ServiceCards";

const Index = () => {
    return (
        <div>
            <div className="md:px-0 xxs:w-full xxs:px-2 mx-auto">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex md:flex-row xxs:flex-col md:justify-between xxs:justify-center xxs:text-center md:text-left items-center py-5 2xl:px-48 xl:px-48 lg:px-28 md:px-14">
                    <div className="md:mr-24">
                      <h1 className="lg:text-4xl md:text-2xl xxs:text-xl pb-5">Grow Your <br/> <span className="leading-normal"> Online Business With Us</span> <br/> <span> & Make Success.</span></h1>
                      <p className="lg:text-[18px] md:text-[15px] xxs:text-[13px] leading-[27px] ">As a business owner, we let you take control. Simply log in to your business centre to update or personalise your listing, receive customer enquiries and respond to reviews anytime, anywhere.</p>
                      <div className="my-5 text-[16px] text-white leading-5">
                        <button className="w-[161px] h-[44px] outline-none bg-[#3596DA] rounded-[4px] font-semibold md:mr-2 xxs:mx-1 xxs:my-2">See our products</button>
                        <button className="w-[161px] h-[44px] outline-none bg-white border text-[#1E1E1E] font-semibold border-[#1E1E1E] rounded-[4px] md:ml-2 xxs:mx-1 xxs:my-2">Get a free listing</button>
                      </div>
                    </div> 
                    <div>
                        <Image src="/images/advertise/ipad.png" height={800} width={800} alt="ipad-image" className="xxs:ml-1 text-center"/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex md:flex-row xxs:flex-col md:justify-between xxs:justify-center xxs:text-center md:text-left items-center">
                    <div className="md:mr-0 xl:mr-24 2xl:px-48 xl:pt-5 xxs:pt-5 lg:px-28 md:pl-14">
                      <h1 className="lg:text-4xl md:text-2xl xxs:text-xl pb-5">Grow Your <br/> <span className="leading-normal"> Online Business With Us</span> <br/> <span> & Make Success.</span></h1>
                      <p className="lg:text-[18px] md:text-[15px] xxs:text-[13px] leading-[27px] ">As a business owner, we let you take control. Simply log in to your business centre to update or personalise your listing, receive customer enquiries and respond to reviews anytime, anywhere.</p>
                      <div className="my-5 text-[16px] text-white leading-5">
                        <button className="w-[161px] h-[44px] outline-none bg-[#3596DA] rounded-[4px] font-semibold md:mr-2 xxs:mx-1 xxs:my-2">See our products</button>
                        <button className="w-[161px] h-[44px] outline-none bg-white border text-[#1E1E1E] font-semibold border-[#1E1E1E] rounded-[4px] md:ml-2 xxs:mx-1 xxs:my-2">Get a free listing</button>
                      </div>
                    </div> 
                    <div>
                        <Image src="/images/advertise/vector.png" height={1000} width={1000} alt="ipad-image" className="xxs:ml-1 text-center"/>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
      );
}

export default Index;