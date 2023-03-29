import React from "react";
import Layout from "@/src/layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination } from "swiper";
import Image from "next/image";

const Index = () => {
    return (
        <div className="before:bg-[url('/images/advertise/webHosting-graphic.jpg')] before:block before:left-0 before:-z-20 before:bg-cover before:top-[-40px] before:absolute before:h-[110%] before:w-full relative ">
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
                  <div className="flex md:flex-row xxs:flex-col md:justify-between xxs:justify-center xxs:text-center md:text-left items-center pb-10">
                    <div className="md:mr-0 2xl:pl-48 lg:pl-28 md:pl-14">
                      <p className="xl:text-[4.3rem] lg:text-[3rem] md:mr-20 pt-5 font-extrabold tracking-[-.045em] md:text-5xl xxs:text-4xl md:mb-3 xxs:mb-2">Grow Your Online Business With Us & Make Success.</p>
                      {/* <p className="lg:text-[2.5rem] font-extrabold tracking-[-.045em] md:text-2xl xxs:text-xl md:mb-7 xxs:mb-2">We've done the hard yards.</p> */}
                      <p className="lg:text-[18px] md:text-[15px] xxs:text-[13px] leading-[27px] md:w-[55%]">As a business owner, we let you take control. Simply log in to your business centre to update or personalise your listing, receive customer enquiries and respond to reviews anytime, anywhere.</p>
                      <div className="my-5 text-[16px] text-white leading-5">
                        <button className="w-[161px] h-[44px] outline-none bg-[#3596DA] rounded-[4px] font-semibold md:mr-2 xxs:mx-1 xxs:my-2">See our products</button>
                        <button className="w-[161px] h-[44px] outline-none bg-white border text-[#1E1E1E] font-semibold border-[#1E1E1E] rounded-[4px] md:ml-2 xxs:mx-1 xxs:my-2">Get a free listing</button>
                      </div>
                    </div> 
                    <div className="">
                        <Image src="/images/advertise/lap.svg" height={100} width={100} alt="ipad-image" className="xxs:ml-1 text-center h-auto w-[1800px]"/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex md:flex-row xxs:flex-col md:justify-between xxs:justify-center xxs:text-center md:text-left items-center">
                    <div className="md:mr-0 xl:mr-24 2xl:px-48 xl:pt-5 xxs:pt-5 lg:px-28 md:pl-14">
                    <p className="xl:text-[4.3rem] lg:text-[3rem] md:mr-20 pt-5 font-extrabold tracking-[-.045em] md:text-5xl xxs:text-4xl md:mb-3 xxs:mb-2">The easier way to rank on Google.</p>
                      <p className="lg:text-[2.5rem] font-extrabold tracking-[-.045em] md:text-2xl xxs:text-xl md:mb-7 xxs:mb-2">We've done the hard yards.</p>
                      <p className="lg:text-[18px] md:text-[15px] xxs:text-[13px] leading-[27px] md:w-[72%]">As a business owner, we let you take control. Simply log in to your business centre to update or personalise your listing, receive customer enquiries and respond to reviews anytime, anywhere.</p>
                      <div className="my-5 text-[16px] text-white leading-5">
                        <button className="w-[161px] h-[44px] outline-none bg-[#3596DA] rounded-[4px] font-semibold md:mr-2 xxs:mx-1 xxs:my-2">See our products</button>
                        <button className="w-[161px] h-[44px] outline-none bg-white border text-[#1E1E1E] font-semibold border-[#1E1E1E] rounded-[4px] md:ml-2 xxs:mx-1 xxs:my-2">Get a free listing</button>
                      </div>
                    </div> 
                    <div>
                        <Image src="/images/advertise/line.svg" height={100} width={100} alt="ipad-image" className="xxs:ml-1 text-center  h-auto w-[1800px]"/>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
      );
}

export default Index;