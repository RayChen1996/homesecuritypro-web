import SectionTitle from "@/components/SectionTitle";
import React from "react";
import Image from "next/image";
interface ServiceItemProps {
  imgSrc: string;
  title: string;
}
/** -服務項目 */
export default function Service() {
  const datas: ServiceItemProps[] = [
    {
      imgSrc: "/service1.svg",
      title: "保護你的家庭安全",
    },
    {
      imgSrc: "/service2.svg",
      title: "發現潛在的安全隱患",
    },
    {
      imgSrc: "/service3.svg",
      title: "保護你所愛的人",
    },
    {
      imgSrc: "/service4.svg",
      title: "將家變成安全的港灣",
    },
    {
      imgSrc: "/service5.svg",
      title: "預防勝於治療早期發現安全問題",
    },
    {
      imgSrc: "/service6.svg",
      title: "建立可靠安全的防護系統",
    },
    {
      imgSrc: "/service7.svg",
      title: "將安全放在首位",
    },
    {
      imgSrc: "/service8.svg",
      title: "家的安全由你決定",
    },
  ];
  return (
    <div className="relative w-full bg-white">
      <SectionTitle
        subTitle="歡迎來到新屋屋況查詢網－讓你的家更安心"
        title="服務項目"
      />
      <div className="flex justify-center  mb-[60px]">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {datas.map((item, idx) => (
            <div key={`item-${idx}`} className="relative">
              <figure className="rounded-5xl">
                <Image
                  alt=""
                  src={item.imgSrc}
                  className="rounded-5xl"
                  width={250}
                  height={150}
                />
              </figure>

              <strong className="absolute top-1/2 left-20 text-2xl text-white">
                {item.title}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
