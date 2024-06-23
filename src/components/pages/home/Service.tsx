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
      imgSrc: "/service1.jpg",
      title: "保護你的家庭安全",
    },
    {
      imgSrc: "/service2.jpg",
      title: "發現潛在的安全隱患",
    },
    {
      imgSrc: "/service3.jpg",
      title: "保護你所愛的人",
    },
    {
      imgSrc: "/service4.jpg",
      title: "將家變成安全的港灣",
    },
    {
      imgSrc: "/service5.jpg",
      title: "預防勝於治療早期發現安全問題",
    },
    {
      imgSrc: "/service6.jpg",
      title: "建立可靠安全的防護系統",
    },
    {
      imgSrc: "/service7.jpg",
      title: "將安全放在首位",
    },
    {
      imgSrc: "/service8.jpg",
      title: "家的安全由你決定",
    },
  ];
  return (
    <div className=" bg-white">
      <SectionTitle
        subTitle="歡迎來到新屋屋況查詢網－讓你的家更安心"
        title="服務項目"
      />
      <div className="mb-[60px] min-h-60 container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {datas.map((item, idx) => (
            <div
              data-aos="flip-left"
              key={`card-${idx}`}
              className={clsx(
                "card  image-full mx-3 my-1",
                idx % 8 < 4
                  ? "md:translate-x-[-100px] md:mb-6 lg:translate-x-[-10px]"
                  : "md:translate-x-[100px] lg:translate-x-[10px]"
              )}
            >
              <figure className="w-[164px] h-[164px] md:w-[306px] md:h-[306px] ">
                <Image
                  src={item.imgSrc}
                  alt=""
                  fill
                  className=" rounded-xl"
                  sizes="(min-width:1024px) 100vw,100vw"
                />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-white md:whitespace-nowrap text-base md:text-2xl">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
