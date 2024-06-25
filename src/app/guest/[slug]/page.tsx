import SectionTitle from "@/components/SectionTitle";
import React from "react";

import Image from "next/image";

import avator from "@/../../public/avatar1.png";
interface ExpertParnerProps {
  name: string;
  expreince: number;
  starCount: number;
  completeCount: number;
  picture: string;
}
export default function Page() {
  const expert: ExpertParnerProps[] = [
    {
      name: "房地產經紀公司",
      completeCount: 100,
      expreince: 50,
      starCount: 5,
      picture: "/avatar4.png",
    },
    {
      name: "風險評估團隊",
      completeCount: 100,
      expreince: 25,
      picture: "/avatar1.png",
      starCount: 4,
    },
    {
      name: "房地產經紀公司",
      completeCount: 100,
      expreince: 5,
      picture: "/avatar4.png",
      starCount: 5,
    },
    {
      name: "風險評估團隊",
      completeCount: 100,
      expreince: 5,
      picture: "/avatar1.png",
      starCount: 4,
    },
  ];
  return (
    <div className=" h-full min-h-96  w-10/12 m-auto z-50">
      <SectionTitle subTitle="" title="推薦文章" />

      <div className=" p-2 rounded-md border-2 shadow-lg min-h-36 flex flex-col ">
        <span className=" flex-1">
          {" "}
          您的房屋屋齡是否超過50年，且是否需要進行結構補強？
        </span>

        <p className=" text-gray-300">
          {" "}
          這個問題用於檢查房屋是否使用了有害建材，這些建材可能對住戶的健康造成危害。
        </p>
      </div>

      <SectionTitle subTitle="專人協助您" title="推薦專家" />
      <div className=" grid grid-cols-1 md:grid-cols-3">
        {expert.map((item, idx) => (
          <div
            className=" text-center min-w-48 min-h-36 rounded-md shadow-md p-3 card"
            key={idx}
          >
            <figure>
              <Image alt="" width={100} height={100} src={item.picture} />
            </figure>
            <div className=" card-body">
              <span className=" font-bold text-2xl ">{item.name}</span>

              <p>具有 {item.expreince} 年以上資歷</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
