import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoutSvg from "@/../public/svg/logout.svg";
export default function AppHeader() {
  return (
    <div className=" flex justify-between bg-white mx-3 md:mx-16 ">
      <div className=" my-6">
        <Link href={"/"}>
          <Image alt="" src={"/Logo.svg"} width={150} height={50} />
        </Link>
      </div>

      <button className="btn my-10 bg-primary-200 border-none rounded-3xl text-white">
        <span className=" hidden md:block">註冊 / 登入</span>
        <span className=" md:hidden">
          <Image alt="" src={logoutSvg} />
        </span>
      </button>
    </div>
  );
}
