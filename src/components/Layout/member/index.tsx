import Image from "next/image";
import React from "react";
import SettingPng from "@/../../public/SettingBg.svg";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" h-full relative bg-background overflow-hidden">
      <Image
        src={SettingPng}
        alt=""
        className=" absolute right-0 top-3 hidden md:block -mr-20 "
      />
      <Image
        src={SettingPng}
        alt=""
        className="absolute -left-32 bottom-3 hidden md:block"
      />
      {children}
    </div>
  );
}
