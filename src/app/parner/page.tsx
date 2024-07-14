"use client";
import React, { useEffect, useState } from "react";
import { Search, X, Clock } from "lucide-react";

import Image from "next/image";

import { searchText } from "@/jotai/search";

import avatorImg from "@/../../public/avatar4.png";
import useQueryQuestion from "@/apollo/hooks/home/useQueryQuestions";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";
interface SearchItmesProps {
  type: "相關問題" | "合作專家" | "發問紀錄";
  labelName: string;
}
const loadingAtom = atom(false);
export default function Page() {
  const [searchStr, setSearchStr] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [Query, { data, loading, networkStatus }] = useQueryQuestion({
    variables: {
      keyword: searchStr,
    },
  });
  const search = useAtomValue(searchText);
  const [_loading, setloading] = useAtom(loadingAtom);
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
  const _qData = data?.questions ?? [];
  useEffect(() => {
    Query({ variables: { keyword: search } });
    setloading(loading);
  }, [search, Query, loading, setloading]);
  return (
    <div className=" h-full  w-10/12 m-auto">
      <div className="container m-auto ">
        <div className=" w-1/3 card m-auto ">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

function SearchInput() {
  const setText = useSetAtom(searchText);

  const [_loading, setloading] = useAtom(loadingAtom);

  return (
    <div className=" flex  justify-around items-center gap-3 mx-20 mt-7 ">
      <div className="flex-1">
        <label className="flex gap-2 items-center rounded-t-xl bg-white input-lg input-bordered">
          <Search />
          <input
            className=" w-full"
            placeholder="請輸入您對房屋的擔憂?"
            type="search"
            name=""
            id=""
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </label>
      </div>

      <button className=" btn btn-primary">
        搜尋
        {_loading && <span className=" loading loading-spinner"></span>}
      </button>
      <button className=" btn btn-outline bg-white border-none">清除</button>
    </div>
  );
}
