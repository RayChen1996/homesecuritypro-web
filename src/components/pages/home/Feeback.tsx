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
        "在尋找理想房屋的過程中，我一直在尋找一個能夠給予我安心保障的平台。幸運的是......",
    },
    {
      imgSrc: "/man_avatar.png",
      name: "高雄張先生",
      rating: 5,
      message:
        "這個平台的使用體驗非常良好。我可以輕鬆地瀏覽到最新上架的房屋案件，並透過分類............",
    },
    {
      imgSrc: "/woman_avatar.png",
      name: "台中林小姐",
      rating: 5,
      message:
        "林小姐是一位首次置業者，她希望能夠找到一個安全可靠的房屋，讓她可以開始自己的獨立生活。......",
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

      <div className="md:flex justify-center items-center flex-col">
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
              " md:flex gap-5 mb-16",
              idx % 2 === 0 && "flex-row-reverse"
            )}
          >
            <div className={clsx("flex items-center gap-2")}>
              <div className="avatar ">
                <div className="w-24 rounded-full">
                  <Image alt="" width={50} height={50} src={item.imgSrc} />
                </div>
              </div>
              <div>
                <div className="text-white-dark">{item.name}</div>
                <div>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white p-5 shadow-md rounded-tl-2xl rounded-bl-2xl rounded-br-2xl text-white-dark ">
              {item.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
