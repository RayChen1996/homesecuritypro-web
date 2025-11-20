"use client";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ParnerProps {
  imgSrc: string;
  company: string;
  description: string;
  tags?: string[];
}

/** 合作專家 */
export default function Parner() {
  const datas: ParnerProps[] = [
    {
      company: "房地產經紀公司",
      description: "具有 20 年以上資歷",
      imgSrc: "/avator1.svg",
      tags: ["北部", "買賣", "估價"],
    },
    {
      company: "風險評估團隊",
      description: "專門評估 50 年以上老房",
      imgSrc: "/avator2.svg",
      tags: ["耐震", "老屋", "消防"],
    },
    {
      company: "房地產經紀公司",
      description: "具有 20 年以上資歷",
      imgSrc: "/avatar1.png",
      tags: ["貸款", "代銷", "驗屋"],
    },
    {
      company: "風險評估團隊",
      description: "專門評估 50 年以上老房",
      imgSrc: "/avatar4.png",
      tags: ["結構", "耐震", "水電"],
    },
  ];

  return (
    <section className="h-full bg-white py-12">
      <SectionTitle
        title="合作專家"
        subTitle="即時了解您的需求，安排最適合的合作廠商"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Swiper
          pagination={{ clickable: true }}
          navigation
          spaceBetween={16}
          autoplay={{ delay: 4800, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {datas.map((item, idx) => (
            <SwiperSlide key={`partner-${idx}`} className="h-auto pb-12">
              <PartnerCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 rounded-2xl bg-primary-50 px-6 py-8 text-center text-white-dark shadow-inner md:px-10">
          <h3 className="text-xl font-bold md:text-2xl">找不到適合的合作專家？</h3>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            填寫你的需求，我們將即時媒合最適合的團隊與你聯繫，節省反覆溝通的時間。
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a className="btn rounded-full bg-primary-200 text-white shadow" href="/guest">
              我要媒合
            </a>
            <a className="btn rounded-full bg-white text-primary-300 shadow" href="/experts">
              查看所有專家
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ company, description, imgSrc, tags }: ParnerProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-150 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-20 rounded-full border border-primary-50/40 bg-primary-50">
            <Image src={imgSrc} width={80} height={80} alt={company} className="object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#131313] md:text-xl">{company}</h3>
          <p className="text-sm text-[#626262] md:text-base">{description}</p>
        </div>
      </div>
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="btn btn-sm flex-1 rounded-full border-primary-200 bg-white text-primary-300 hover:border-primary-300">
          查看介紹
        </button>
        <button className="btn btn-sm flex-1 rounded-full border-none bg-primary-200 text-white">
          立即洽詢
        </button>
      </div>
    </div>
  );
}
