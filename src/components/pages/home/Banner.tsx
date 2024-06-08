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
    <div className=" relative w-full min-h-96">
      <Image
        alt=""
        width={960}
        height={310}
        className="w-full hidden md:block"
        src={"building.svg"}
      />
      <div className="absolute w-full bottom-0 mt-52">
        <div className="flex relative justify-center items-center w-full   ">
          <Image
            src={bannerPng}
            width={1296}
            height={438}
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
    <div className="absolute top-8 left-1/4">
      <h1 className="font-bold text-2xl text-white mb-9 mt-16">
        您的房屋有以下狀況嗎？
      </h1>
      <DesktopContainer>
        <div className="flex md:grid grid-cols-4 gap-4">
          {_houseSymptoms.map((item, idx) => (
            <span
              key={`item-${idx}`}
              className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark"
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
