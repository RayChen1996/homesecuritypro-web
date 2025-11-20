import SectionTitle from "@/components/SectionTitle";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface ServiceItemProps {
  imgSrc: string;
  title: string;
  description: string;
}
/** -服務項目 */
export default function Service() {
  const datas: ServiceItemProps[] = [
    {
      imgSrc: "/service1.jpg",
      title: "保護你的家庭安全",
      description: "專業檢測團隊深入巡檢結構、水電與消防，提供完整的修繕建議。",
    },
    {
      imgSrc: "/service2.jpg",
      title: "發現潛在的安全隱患",
      description: "利用科學儀器排查漏水、白蟻或壁癌等問題，及早處理不留遺憾。",
    },
    {
      imgSrc: "/service3.jpg",
      title: "保護你所愛的人",
      description: "為長輩與孩子打造安全的居家動線，減少跌倒與意外風險。",
    },
    {
      imgSrc: "/service4.jpg",
      title: "將家變成安全的港灣",
      description: "客製化的防護方案，從監視、門禁到保全一次到位。",
    },
    {
      imgSrc: "/service5.jpg",
      title: "預防勝於治療早期發現安全問題",
      description: "透過週期性健康檢查，追蹤房屋老化指標，避免小問題拖成大災難。",
    },
    {
      imgSrc: "/service6.jpg",
      title: "建立可靠安全的防護系統",
      description: "串聯智慧感測器、煙霧偵測與災害警示，守護每一天。",
    },
    {
      imgSrc: "/service7.jpg",
      title: "將安全放在首位",
      description: "協助投保住宅險與天災險，讓修繕與賠付流程更順利。",
    },
    {
      imgSrc: "/service8.jpg",
      title: "家的安全由你決定",
      description: "從驗屋、翻修到出租一條龍服務，陪你完成每個里程碑。",
    },
  ];
  return (
    <div className=" bg-white">
      <SectionTitle
        subTitle="歡迎來到新屋屋況查詢網－讓你的家更安心"
        title="服務項目"
      />
      <div className="mb-[60px] min-h-60 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {datas.map((item, idx) => (
            <div
              data-aos="flip-left"
              key={`card-${idx}`}
              className={clsx(
                "group relative overflow-hidden rounded-2xl bg-black/60 shadow-lg",
                idx % 8 < 4
                  ? "md:translate-x-[-40px] md:mb-6 lg:translate-x-[-20px]"
                  : "md:translate-x-[40px] lg:translate-x-[60px]"
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
                  sizes="(min-width:1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
              <div className="relative flex h-full flex-col justify-end gap-3 p-5 text-white">
                <h2 className="text-lg font-bold md:text-xl">{item.title}</h2>
                <p className="text-sm text-gray-200 md:text-base">{item.description}</p>
                <button className="btn btn-sm w-fit rounded-full border-none bg-white/90 text-primary-300 shadow hover:bg-white">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
