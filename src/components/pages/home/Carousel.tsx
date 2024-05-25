import React from "react";
import Image from "next/image";
import swiperImage from "@/../../public/image (1).png";
import dbArrowSvg from "@/../../public/dbArrow.svg";
import Link from "next/link";
export default function Carousel() {
  return (
    <div className=" h-full relative">
      <Image
        alt=""
        src={swiperImage}
        width={1024}
        height={768}
        className=" w-full object-contain"
      />
      <div className=" absolute w-96 left-1/3 rounded-xl flex justify-center items-center p-12 flex-col top-1/3 bg-primary-300 opacity-75 ">
        <h3 className=" text-white text-[40px] font-bold">您的家安全嗎？</h3>
        <Link href={"/"} className=" flex items-center">
          <span className=" text-white text-2xl font-bold">
            {" "}
            找專家，保護家
          </span>

          <Image alt="" src={dbArrowSvg} width={40} height={40} />
        </Link>
      </div>
    </div>
  );
}
