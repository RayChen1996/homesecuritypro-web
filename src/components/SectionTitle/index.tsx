import React from "react";
interface SectionTitleProps {
  title: string;
  subTitle: string;
}
export default function SectionTitle({ subTitle, title }: SectionTitleProps) {
  return (
    <div className=" text-center my-[60px]">
      <strong className=" text-gray-600 font-bold text-2xl md:text-[32px]">
        {title}
      </strong>
      <p className=" text-gray-400 font-bold text-base md:text-2xl">
        {subTitle}
      </p>
    </div>
  );
}
