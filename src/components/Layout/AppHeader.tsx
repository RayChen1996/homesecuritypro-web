import React from "react";
import Image from "next/image";
export default function AppHeader() {
  return (
    <div className=" flex justify-around bg-white ">
      <Image alt="" src={"logo.svg"} width={150} height={50} />
      <button className="btn my-10 bg-primary-200 border-none rounded-3xl text-white">
        註冊 / 登入
      </button>
    </div>
  );
}
