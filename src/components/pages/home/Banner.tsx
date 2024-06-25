"use client";
import Image from "next/image";
import React from "react";
import bannerPng from "@/../../public/bannerimage.png";
import {
  DesktopContainer,
  TabletAndBelowContainer,
} from "@/components/MediaContainer/MediaContainer";
import axios from "axios";
import useQueryHouseSymptoms from "@/apollo/hooks/home/useQueryHouseSymptoms";
import Link from "next/link";
//NOTE -  Hook

//NOTE - Schema
import { houseSymptoms } from "@/schema/houseSymptoms";
/** - 房屋狀況Block */
export default function Banner() {
  return (
    <div className="relative flex justify-center min-h-[520px]">
      <Image alt="" fill className="  hidden md:block" src={"building.svg"} />
      <div className="absolute  w-4/5 bottom-0 mt-52">
        <div className="flex relative justify-center items-center w-full min-h-[520px]  ">
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

function CheckList() {
  const { data, loading, networkStatus } = useQueryHouseSymptoms();

  // console.log(data);

  const _data: houseSymptoms[] = data?.houseSymptoms || [];
  if (loading) return <span className=" loading loading-spinner"></span>;
  return (
    <div className="absolute top-8 left-2 md:left-80 mt-[60px]">
      <h1 className="font-bold text-2xl text-white mb-9">
        您的房屋有以下狀況嗎？
      </h1>
      <div className="flex flex-wrap max-w-3xl gap-4">
        {_data.map((item, idx) => (
          <span
            key={`item-${idx}`}
            className="bg-white opacity-75 leading-6  rounded-full py-4 px-3 text-lg font-medium text-white-dark"
          >
            {item.labelName}
          </span>
        ))}
      </div>
    </div>
  );
}

function CheckActionButton() {
  return (
    <Link
      href={"/guest"}
      className="rounded-3xl border-none text-white bottom-5 md:bottom-20 md:right-72 absolute btn bg-primary-200"
    >
      立即檢測
      <i className="material-icons">arrow_forward</i>
    </Link>
  );
}
