"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import useQueryHouseSymptoms from "@/apollo/hooks/home/useQueryHouseSymptoms";
import bannerPng from "@/../../public/bannerimage.png";
import { houseSymptoms } from "@/schema/houseSymptoms";

/** 房屋狀況 Block */
export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary-100 via-primary-200/80 to-primary-400 text-white">
      <div className="absolute inset-0">
        <Image
          alt="建築外觀"
          src={"/building.svg"}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:px-12 lg:px-16">
        <div className="relative -mb-10 overflow-hidden rounded-3xl shadow-2xl md:order-2 md:mb-0 md:w-1/2">
          <Image
            src={bannerPng}
            alt="專業檢測人員進行房屋檢測"
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
            priority
          />
        </div>

        <div className="md:w-1/2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Home Security Pro
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
            您的房屋有以下狀況嗎？
          </h1>
          <p className="mb-8 max-w-xl text-lg text-white/90">
            由專業團隊提供即時檢測與處理建議，協助你在翻修、購屋或出租前掌握每一個潛在風險，讓家的安全更有保障。
          </p>
          <CheckList />
          <CheckActionButton />
        </div>
      </div>
    </section>
  );
}

function CheckList() {
  const { data, loading, error } = useQueryHouseSymptoms();
  const symptoms: houseSymptoms[] = data?.houseSymptoms || [];

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-white/90">
        <span className="loading loading-spinner loading-md" />
        <span>正在為你載入常見房屋症狀…</span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="rounded-xl bg-white/10 px-4 py-3 text-sm text-red-50 shadow">
        無法取得房屋症狀清單，請稍後再試。
      </p>
    );
  }

  return (
    <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {symptoms.map((item) => (
        <span
          key={item.id}
          className="rounded-full bg-white/80 px-4 py-3 text-base font-semibold text-white-dark backdrop-blur"
        >
          {item.labelName}
        </span>
      ))}
    </div>
  );
}

function CheckActionButton() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/guest"
        className="btn rounded-full border-none bg-white text-primary-400 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        立即檢測
        <i className="material-icons">arrow_forward</i>
      </Link>
      <Link
        href="/experts"
        className="flex items-center text-sm font-semibold text-white/85 underline-offset-4 hover:underline"
      >
        了解合作專家流程
      </Link>
    </div>
  );
}
