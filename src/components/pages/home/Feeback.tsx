"use client";
import SectionTitle from "@/components/SectionTitle";
import React, { useEffect } from "react";
import Image from "next/image";
import SettingPng from "@/../../public/SettingBg.svg";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
interface userFeebacksProps {
  imgSrc: string;
  rating: number;
  name: string;
  message: string;
  location: string;
}

/** - 使用者心得 */
export default function Feeback() {
  useEffect(() => {
    AOS.init();
  }, []);
  const userFeebacks: userFeebacksProps[] = [
    {
      imgSrc: "/man_avatar.png",
      name: "台北林先生",
      rating: 5,
      message:
        "在尋找理想房屋的過程中，我一直在尋找一個能夠給予我安心保障的平台。幸運的是透過專家的檢測，我在簽約前就找到漏水風險，省下一大筆維修費用。",
      location: "台北市 | 老屋翻修",
    },
    {
      imgSrc: "/man_avatar.png",
      name: "高雄張先生",
      rating: 4,
      message:
        "這個平台的使用體驗非常良好。我可以輕鬆地瀏覽到最新上架的房屋案件，並透過分類快速找到符合需求的合作專家，報告也很易讀。",
      location: "高雄市 | 新成屋驗收",
    },
    {
      imgSrc: "/woman_avatar.png",
      name: "台中林小姐",
      rating: 5,
      message:
        "我是首次置產者，專家陪同驗屋讓我能看懂細節，並且在交屋後提供保固與修繕追蹤，真的很安心。",
      location: "台中市 | 首次購屋",
    },
  ];
  return (
    <div className=" h-full relative bg-background overflow-hidden">
      <Image
        src={SettingPng}
        alt=""
        className=" absolute right-0 top-3 hidden md:block -mr-20 "
      />
      <Image
        src={SettingPng}
        alt=""
        className="absolute -left-32 bottom-3 hidden md:block bg-opacity-25 opacity-50"
      />
      <SectionTitle subTitle="" title="使用者心得" />

      <div className="md:flex justify-center items-center flex-col gap-6 px-6 pb-12">
        {userFeebacks.map((item, idx) => (
          <div
            key={`${idx}`}
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos="fade-up"
            className={clsx(
              "md:flex w-full max-w-5xl items-start gap-5 rounded-2xl bg-white/80 p-6 shadow-md",
              idx % 2 === 0 && "flex-row-reverse"
            )}
          >
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <div className="avatar border-4 border-white">
                <div className="w-24 rounded-full">
                  <Image alt="" width={96} height={96} src={item.imgSrc} />
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white-dark">{item.name}</div>
                <div className="text-sm text-gray-500">{item.location}</div>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span
                      key={`${item.name}-star-${starIdx}`}
                      className={clsx(
                        "material-icons text-lg",
                        starIdx < item.rating ? "text-orange-400" : "text-gray-300"
                      )}
                    >
                      grade
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white p-5 text-base text-white-dark shadow-inner">
              {item.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
