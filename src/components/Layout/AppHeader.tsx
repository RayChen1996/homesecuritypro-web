import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AppHeader() {
  return (
    <div className=" flex justify-between bg-white mx-16 ">
      <div className=" my-6">
        <Link href={"/"}>
          <Image alt="" src={"logo.svg"} width={150} height={50} />
        </Link>
      </div>

      <button className="btn my-10 bg-primary-200 border-none rounded-3xl text-white">
        註冊 / 登入
      </button>
    </div>
  );
}
