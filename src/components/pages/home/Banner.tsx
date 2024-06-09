"use client";
import Image from "next/image";
import React from "react";
import bannerPng from "@/../../public/bannerimage.png";
import {
  DesktopContainer,
  TabletAndBelowContainer,
} from "@/components/MediaContainer/MediaContainer";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

/** - 房屋狀況Block */
export default function Banner() {
  return (
    <div className="relative flex justify-center min-h-[420px]">
      <Image alt="" fill className="  hidden md:block" src={"building.svg"} />
      <div className="absolute  w-4/5 bottom-0 mt-52">
        <div className="flex relative justify-center items-center w-full min-h-[420px]  ">
          <Image
            src={bannerPng}
            fill
            alt="banner image"
            className="rounded-3xl  w-9/12 bottom-0   md:mt-0 object-cover"
          />
          <CheckList />
          <CheckActionButton />
        </div>
      </div>
    </div>
  );
}

interface houseSymptoms {
  label: string;
}

function CheckList() {
  const _houseSymptoms: houseSymptoms[] = [
    {
      label: "逃生不易",
    },
    {
      label: "門窗密閉",
    },
    {
      label: "危樓",
    },
    {
      label: "有裂縫",
    },
    {
      label: "漏水",
    },
    {
      label: "海砂屋",
    },
    {
      label: "壁癌",
    },
    {
      label: "輻射屋",
    },
    {
      label: "線路老舊",
    },
    {
      label: "缺乏消防安檢",
    },
    {
      label: "屋齡超過 50 年",
    },
    {
      label: "老屋需補強",
    },
  ];
  return (
    <div className="absolute top-8 left-80 mt-[60px]">
      <h1 className="font-bold text-2xl text-white mb-9">
        您的房屋有以下狀況嗎？
      </h1>
      <DesktopContainer>
        <div className="flex  flex-wrap max-w-3xl gap-4">
          {_houseSymptoms.map((item, idx) => (
            <span
              key={`item-${idx}`}
              className="bg-white opacity-75 leading-6  rounded-full py-4 px-3 text-lg font-medium text-white-dark"
            >
              {item.label}
            </span>
          ))}
        </div>
      </DesktopContainer>
      <TabletAndBelowContainer>
        <Swiper
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {_houseSymptoms.map((item, idx) => (
            <SwiperSlide key={``}>
              <span
                key={`item-${idx}`}
                className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark"
              >
                {item.label}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </TabletAndBelowContainer>
    </div>
  );
}

function CheckActionButton() {
  return (
    <button className="rounded-3xl border-none text-white bottom-20 right-72 absolute btn bg-primary-200">
      立即檢測
      <i className="material-icons">arrow_forward</i>
    </button>
  );
}
