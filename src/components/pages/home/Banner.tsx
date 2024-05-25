import Image from "next/image";
import React from "react";
import bannerPng from "@/../../public/bannerimage.png";

export default function Banner() {
  return (
    <div className=" relative w-full">
      <Image
        alt=""
        width={960}
        height={310}
        className="w-full"
        src={"building.svg"}
      />
      <div className=" absolute w-full  bottom-0   ">
        <div className="flex relative justify-center items-center w-full h-full ">
          <Image
            src={bannerPng}
            width={1296}
            height={438}
            alt="banner image"
            className=" rounded-3xl h-4/5 w-9/12 bottom-0 object-cover"
          />
          <CheckList />
          <CheckActionButton />
        </div>
      </div>
    </div>
  );
}

function CheckList() {
  return (
    <div className=" absolute top-8 left-1/4">
      <h1 className=" font-bold text-2xl text-white mb-9">
        您的房屋有以下狀況嗎？
      </h1>
      <div className=" grid grid-cols-3 gap-4">
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          逃生不易
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          門窗密閉
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          危樓
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          有裂縫
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          漏水
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          海砂屋
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          壁癌
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          輻射屋
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          線路老舊
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          缺乏消防安檢
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          屋齡超過 50 年
        </span>
        <span className=" bg-white opacity-75 rounded-3xl py-4 px-8 text-lg font-medium text-white-dark">
          老屋需補強
        </span>
      </div>
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
