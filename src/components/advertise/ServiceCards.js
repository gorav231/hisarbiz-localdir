import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperCore, { Keyboard, Pagination, Navigation, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, A11y, Navigation]);
import { SERVICE_CARD_INFO } from "@/src/utility/serviceCardInfo";

const ServiceCards = () => {
    const sliderSettings = {
        260: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      };
  return (
    <div>
      <div className="lg:w-5/6 md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto pt-14 pb-5">
        <h1 className="text-center md:text-4xl xxs:text-2xl py-1">We Provide The Best Service </h1>
        <h1 className="text-center md:text-4xl xxs:text-2xl py-1">With Our Tools </h1>
        <p className="text-center text-[16px] font-[400] pt-5">OUR SERVICES</p>
        <Swiper
        
          slidesPerView={4}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={sliderSettings}
          modules={[Keyboard, Pagination, Navigation]}
          className="my-5"
          
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8">
            {SERVICE_CARD_INFO.map((data) => {
                const {id, img, heading, para} = data;
              return (
                <SwiperSlide>
                  <div key={id} className="text-center flex flex-col justify-center items-center bg-[#d0d3cf] rounded-md py-6 mb-14 md:px-3 xxs:px-3">
                    <div className="bg-[#3596DA] rounded-md p-3 w-10 mb-4">
                      <Image
                        src={img}
                        alt="service-card"
                        height={20}
                        width={20}
                        className=""
                      />
                    </div>
                    <h1 className="text-xl pb-5">{heading}</h1>
                    <p className="text-[16px] leading-6 pb-5">{para}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCards;
