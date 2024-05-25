import SectionTitle from "@/components/SectionTitle";
import React from "react";
import Image from "next/image";
interface ParnerProps {
  imgSrc: string;
  compony: string;
  description: string;
}

/** - 合作專家 */
export default function Parner() {
  const datas: ParnerProps[] = [
    {
      compony: "房地產經紀公司",
      description: "具有 20 年以上資歷",
      imgSrc: "/avator1.svg",
    },
    {
      compony: "風險評估團隊",
      description: "專門評估 50 年以上老房",
      imgSrc: "/avator2.svg",
    },
    {
      compony: "房地產經紀公司",
      description: "具有 20 年以上資歷",
      imgSrc: "/avatar1.png",
    },
    {
      compony: "風險評估團隊",
      description: "專門評估 50 年以上老房",
      imgSrc: "/avatar4.png",
    },
  ];
  return (
    <div className=" h-full">
      <SectionTitle
        title="合作專家"
        subTitle="即時了解您的需求，安排最適合的合作廠商"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mb-[124px] place-items-center">
        {datas.map((item, idx) => (
          <div
            key={`item-${idx}`}
            className=" flex w-2/3 gap-2 items-center py-6 px-9 bg-white rounded-2xl mb-12 "
          >
            <span>
              <Image src={item.imgSrc} width={90} height={90} alt="" />
            </span>
            <div>
              <h3 className=" ml-9 mb-4 text-2xl font-bold text-[#131313]">
                {item.compony}
              </h3>
              <p className=" ml-9 text-2xl text-[#626262] font-medium ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
