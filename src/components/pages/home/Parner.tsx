"use client";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

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
      <Swiper
        pagination={false}
        navigation={false}
        spaceBetween={20}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full aspect-[1200/1000] md:aspect-[1200/400]"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mb-[124px] place-items-center relative">
            {datas.map((item, idx) => (
              <div
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement;
                  if (modal) {
                    modal.showModal();
                  }
                }}
                key={`item-${idx}`}
                className={clsx(
                  " cursor-pointer md:flex md:w-2/3 w-full gap-2 items-center py-6 px-9 bg-white rounded-2xl mb-12  ",

                  idx % 4 === 0 || idx % 4 === 1
                    ? "relative -left-20"
                    : "relative -right-20"
                  // idx % 2 === 0 && " relative -left-20"
                )}
              >
                <span className="flex justify-center items-center">
                  <Image src={item.imgSrc} width={120} height={120} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mb-[124px] place-items-center relative">
            {datas.map((item, idx) => (
              <div
                key={`item-${idx}`}
                className={clsx(
                  "md:flex md:w-2/3 w-full gap-2 items-center py-6 px-9 bg-white rounded-2xl mb-12  ",

                  idx % 4 === 0 || idx % 4 === 1
                    ? "relative -left-20"
                    : "relative -right-20"
                  // idx % 2 === 0 && " relative -left-20"
                )}
              >
                <div className="flex justify-center items-center">
                  <Image src={item.imgSrc} width={120} height={120} alt="" />
                </div>
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
        </SwiperSlide>
      </Swiper>
      <dialog id="my_modal_1" className="modal w-full ">
        <div className=" w-11/12 h-full bg-white ">
          <h3 className="font-bold text-lg">
            <SectionTitle
              title="合作專家"
              subTitle="即時了解您的需求，安排最適合的合作廠商"
            />
          </h3>
          <div>
            <Swiper
              pagination={false}
              navigation={false}
              spaceBetween={20}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className="flex">
                  {datas.map((item, idx) => (
                    <div
                      key={`item-${idx}`}
                      className={clsx(
                        "md:w-2/3 w-full gap-2 items-center py-6 px-9 bg-white rounded-2xl mb-12  "
                      )}
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src={item.imgSrc}
                          width={120}
                          height={120}
                          alt=""
                        />
                      </div>
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
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
