import React,{ useRef,useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperCore, { Keyboard, Pagination, Navigation, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, A11y, Navigation]);
import { SERVICE_CARD_INFO } from "@/src/utility/serviceCardInfo";
import { TbArrowBigLeft,TbArrowBigRight } from "react-icons/tb"

const ServiceCards = () => {
  const sliderRef = useRef(null)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
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
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },  
      };
      
  return (
    <div>
      <div className="xl:w-5/6 lg:w-[88%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto md:pt-20 xxs:pt-20 xxs:mb-10 md:mb-0 relative">
        <h1 className="text-center md:text-4xl xxs:text-2xl pb-1">We Provide The Best Service </h1>
        <h1 className="text-center md:text-4xl xxs:text-2xl py-1">With Our Tools </h1>
        <p className="text-center text-[16px] font-[400] pt-2 pb-7">OUR SERVICES</p>
        <Swiper ref={sliderRef}
          slidesPerView={4}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
         loop={true}
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
                <SwiperSlide key={id}>
                  <div className="text-center flex flex-col justify-center items-center bg-[#f6f7fb] h-64 overflow-hidden rounded-md mb-14 md:px-3 xxs:px-3">
                    <div className="bg-[#3596DA] rounded-md mt-5 p-3 w-10 mb-4">
                      <Image
                        src={img}
                        alt="service-card"
                        height={20}
                        width={20}
                        className=""
                      />
                    </div>
                    <h1 className="text-xl pb-5">{heading}</h1>
                    <p className="para leading-6 pb-5">{para}</p>
                  </div>
                </SwiperSlide>
                
              );
            })}
          </div>
        </Swiper>
        <div className="flex justify-between items-center lg:block md:hidden xxs:hidden">
          <button className="prev-arrow cursor-pointer absolute -left-10 top-[63%] bg-lightblue-10 p-3 rounded-full" onClick={handlePrev} ><TbArrowBigLeft className="h-6 w-6 text-white" /></button>
          <button className="next-arrow cursor-pointer absolute -right-10 top-[63%] bg-lightblue-10 p-3 rounded-full" onClick={handleNext} ><TbArrowBigRight className="h-6 w-6 text-white"/></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
