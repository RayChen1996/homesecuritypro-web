import React from "react";
import { Search, X, Clock } from "lucide-react";

import Image from "next/image";

import avatorImg from "@/../../public/avatar4.png";
interface SearchItmesProps {
  type: "相關問題" | "合作專家" | "發問紀錄";
  labelName: string;
}
export default function Page() {
  const searchItmes: SearchItmesProps[] = [
    {
      labelName: "您的房屋屋齡是否超過50年，且是否需要進行結構補強？",
      type: "相關問題",
    },
    {
      labelName:
        "您是否知道房屋使用的建材是否含有海砂或其他有害物質，例如輻射物質？",
      type: "相關問題",
    },
    {
      labelName: "您是否知道房屋使用的建材是否含有海砂或其他有害物質",
      type: "發問紀錄",
    },
    {
      labelName: "房地產經紀公司",
      type: "合作專家",
    },
    {
      labelName: "風險評估團隊",
      type: "合作專家",
    },
  ];
  return (
    <div className="h-screen ">
      <div className="h-full   container m-auto ">
        <div className=" h-2/3 relative bg-primary-300 rounded-b-[90px]">
          <div className="absolute   bottom-10 w-full  left-0">
            {/* <div className=" flex  justify-around items-center gap-3 mx-20 ">
              <div className="flex-1">
                <label className="flex gap-2 items-center rounded-xl bg-white input-lg input-bordered">
                  <Search />
                  <input
                    className=" w-full"
                    placeholder="請輸入您對房屋的擔憂?"
                    type="search"
                    name=""
                    id=""
                  />
                </label>
              </div>

              <button className=" btn btn-primary">搜尋</button>
              <button className=" btn btn-outline bg-white border-none">
                清除
              </button>
            </div> */}
            <SearchInput />
            <div className="min-h-40 bg-white container w-4/5 ml-20">
              <ul>
                {searchItmes.map((item, idx) => (
                  <li
                    key={`item-${idx}`}
                    className="flex items-center gap-3 p-3 justify-between"
                  >
                    <div>
                      {item.type === "發問紀錄" && (
                        <Clock className=" text-gray-400" />
                      )}
                      {item.type === "相關問題" && <Search />}
                      {item.type === "合作專家" && (
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <Image src={avatorImg} alt="" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className=" flex-1">
                      <label htmlFor="" className=" font-extrabold">
                        {item.labelName}
                      </label>
                      <div className=" text-gray-400">{item.type}</div>
                    </div>
                    <X />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex-1 h-full  text-center">
          <span className=" loading loading-spinner "></span>
        </div>
      </div>
    </div>
  );
}

function SearchInput() {
  return (
    <div className=" flex  justify-around items-center gap-3 mx-20 ">
      <div className="flex-1">
        <label className="flex gap-2 items-center rounded-t-xl bg-white input-lg input-bordered">
          <Search />
          <input
            className=" w-full"
            placeholder="請輸入您對房屋的擔憂?"
            type="search"
            name=""
            id=""
          />
        </label>
      </div>

      <button className=" btn btn-primary">搜尋</button>
      <button className=" btn btn-outline bg-white border-none">清除</button>
    </div>
  );
}
