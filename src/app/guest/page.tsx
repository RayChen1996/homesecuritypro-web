import React from "react";
import { Search } from "lucide-react";
export default function Page() {
  return (
    <div className=" h-screen ">
      <div className="   h-full   container m-auto ">
        <div className=" h-2/3 relative bg-primary-300 rounded-b-[90px]">
          <div className="absolute  w-full bottom-1/2 left-0">
            <div className=" flex  justify-around items-center gap-3 mx-20 ">
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
