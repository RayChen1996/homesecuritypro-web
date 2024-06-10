import SectionTitle from "@/components/SectionTitle";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

import svg1 from "@/../public/service1.svg";
import svg2 from "@/../public/service2.svg";
import svg3 from "@/../public/service3.svg";
import svg4 from "@/../public/service4.svg";
import svg5 from "@/../public/service5.svg";
import svg6 from "@/../public/service6.svg";
import svg7 from "@/../public/service7.svg";
import svg8 from "@/../public/service8.svg";

interface ServiceItemProps {
  imgSrc: any;
  title: string;
}
/** -服務項目 */
export default function Service() {
  const datas: ServiceItemProps[] = [
    {
      imgSrc: svg1,
      title: "保護你的家庭安全",
    },
    {
      imgSrc: svg2,
      title: "發現潛在的安全隱患",
    },
    {
      imgSrc: svg3,
      title: "保護你所愛的人",
    },
    {
      imgSrc: svg4,
      title: "將家變成安全的港灣",
    },
    {
      imgSrc: svg5,
      title: "預防勝於治療早期發現安全問題",
    },
    {
      imgSrc: svg6,
      title: "建立可靠安全的防護系統",
    },
    {
      imgSrc: svg7,
      title: "將安全放在首位",
    },
    {
      imgSrc: svg8,
      title: "家的安全由你決定",
    },
  ];
  return (
    <div className="relative w-full bg-white">
      <SectionTitle
        subTitle="歡迎來到新屋屋況查詢網－讓你的家更安心"
        title="服務項目"
      />
      <div className="flex justify-center  mb-[60px] min-h-60">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {datas.map((item, idx) => (
            <div
              key={`item-${idx}`}
              className={clsx(
                "lg:relative",
                Math.floor(idx / 4) % 2 === 0 ? " lg:-left-20" : "lg:-right-28"
              )}
            >
              <figure className="rounded-5xl hover:cursor-pointer">
                <div
                  className={clsx(
                    "flex items-center justify-center",
                    " h-28 w-28",

                    "md:h-[306px] md:w-[306px]",
                    "lg:h-[306px] lg:w-[306px]",
                    "xl:h-[280px] xl:w-[280px]"
                  )}
                  data-aos="zoom-in"
                >
                  <div className="relative h-3/4   w-52   rounded-5xl hover:opacity-20">
                    <Image src={item.imgSrc} alt="" fill />
                  </div>
                </div>
                <figcaption className="absolute inset-0 flex items-center justify-center">
                  <strong className=" text-base md:text-2xl text-white px-6">
                    {item.title}
                  </strong>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
