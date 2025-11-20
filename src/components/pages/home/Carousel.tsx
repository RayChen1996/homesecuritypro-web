"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
};

export default function Carousel() {
  const slides: Slide[] = [
    {
      image: "/image (1).png",
      title: "家的安全由你掌握",
      subtitle: "快速找尋專家，完成屋況健檢與修繕建議",
      cta: "開始諮詢",
    },
    {
      image: "/earthquake2.png",
      title: "耐震、消防、漏水一次看懂",
      subtitle: "以專業檢測報告拆解風險，陪你做出安心選擇",
      cta: "查看服務方案",
    },
    {
      image: "/earthquake.png",
      title: "守護家人的每一天",
      subtitle: "嚴選合作專家，提供全台在地的即時支援",
      cta: "搜尋合作專家",
    },
  ];

  return (
    <div className="relative mt-[60px] min-h-[420px]">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        loop
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full rounded-3xl shadow-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
            <Image
              alt={slide.title}
              src={slide.image}
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-4 px-8 py-10 text-white md:px-16 lg:px-24">
              <p className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                Home Security Pro
              </p>
              <h3 className="text-3xl font-bold leading-tight drop-shadow md:text-5xl">{slide.title}</h3>
              <p className="max-w-2xl text-lg text-white/90 md:text-xl">{slide.subtitle}</p>
              <Link
                href="/guest"
                className="btn mt-2 rounded-full border-none bg-primary-200 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {slide.cta}
                <span className="material-icons">arrow_forward</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
