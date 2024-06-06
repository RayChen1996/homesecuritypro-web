"use client";
import React from "react";
import Image from "next/image";
import swiperImage from "@/../../public/image (1).png";
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
    <div className="mt-[60px]">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full aspect-[1200/500]"
      >
        <SwiperSlide>
          <Image
            alt=""
            src={swiperImage}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
          <div className=" m-auto  mt-80 h-1/5  w-1/5    rounded-xl flex justify-center items-center p-12 flex-col top-1/3 bg-primary-300 opacity-75 ">
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
            src={swiperImage}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
          <div className=" m-auto  mt-80 h-1/5  w-1/5    rounded-xl flex justify-center items-center p-12 flex-col top-1/3 bg-primary-300 opacity-75 ">
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
  // return (
  //   <div className=" h-full relative mt-[60px]">
  //     <div className=" absolute md:w-96 left-1/3 rounded-xl flex justify-center items-center p-12 flex-col top-1/3 bg-primary-300 opacity-75 ">
  //       <h3 className=" text-white text-[40px] font-bold">您的家安全嗎？</h3>
  //       <Link href={"/"} className=" flex items-center">
  //         <span className=" text-white text-2xl font-bold">
  //           {" "}
  //           找專家，保護家
  //         </span>

  //         <Image alt="" src={dbArrowSvg} width={40} height={40} />
  //       </Link>
  //     </div>
  //   </div>
  // );
}
