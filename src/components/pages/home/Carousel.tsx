"use client";
import React from "react";
import Image from "next/image";
import swiperImage from "@/../../public/image (1).png";
import swiperImage2 from "@/../../public/earthquake.png";
import swiperImage3 from "@/../../public/earthquake2.png";
import dbArrowSvg from "@/../../public/dbArrow.svg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="mt-[60px] min-h-[420px] relative">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full aspect-[1200/500]"
      >
        <SwiperSlide className="   flex justify-center items-center">
          <Image alt="" src={swiperImage} fill className="object-cover" />
          <div className="mt-80  w-1/4  m-auto     rounded-xl flex justify-center items-center p-12 flex-col bg-primary-300 opacity-75">
            <h3 className=" text-white text-2xl md:text-[40px] text-nowrap font-bold mt-12">
              您的家安全嗎？
            </h3>
            <Link href={"/"} className=" flex items-center justify-center ">
              <span className=" text-white md:text-2xl text-base font-bold mt-[18px] md:mt-6">
                找專家，保護家
              </span>

              <Image alt="" src={dbArrowSvg} width={40} height={40} />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image alt="" src={swiperImage3} fill className="object-cover" />
          <div className=" m-auto  mt-80 h-1/5   w-1/4   rounded-xl flex justify-center items-center p-12 flex-col top-1/3 bg-primary-300 opacity-75 ">
            <h3 className=" text-white text-[40px] font-bold">
              您的家安全嗎？
            </h3>
            <Link href={"/"} className=" flex items-center">
              <span className=" text-white text-2xl font-bold">
                找專家，保護家
              </span>

              <Image alt="" src={dbArrowSvg} width={40} height={40} />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            alt=""
            src={swiperImage2}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
          <div className=" m-auto  mt-80 h-1/5  w-1/4  rounded-xl flex justify-center items-center p-12 flex-col top-1/3 bg-primary-300 opacity-75 ">
            <h3 className=" text-white text-[40px] font-bold">
              您的家安全嗎？
            </h3>
            <Link href={"/"} className=" flex items-center">
              <span className=" text-white text-2xl font-bold">
                找專家，保護家
              </span>

              <Image alt="" src={dbArrowSvg} width={40} height={40} />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
