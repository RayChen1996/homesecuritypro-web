import React from "react";
interface SectionTitleProps {
  title: string;
  subTitle: string;
}
export default function SectionTitle({ subTitle, title }: SectionTitleProps) {
  return (
    <div className=" text-center">
      <h2 className=" text-gray-600 font-bold text-3xl">{title}</h2>
      <p className=" text-gray-400 font-bold text-2xl">{subTitle}</p>
    </div>
  );
}
