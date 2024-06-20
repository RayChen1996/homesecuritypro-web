import AdminLayout from "@/components/Layout/admin";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

import avatorSvg from "@/../public/avatar1.png";
import Link from "next/link";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout>
      <div className=" w-1/4 rounded-3xl h-screen bg-primary-300">
        <div className=" flex items-center gap-2 text-white p-5">
          <Image alt="" src={avatorSvg} width={80} height={80} />
          <div className=" flex flex-col">
            <label htmlFor="">Ray</label>
            <label className=" bg-orange-600 p-1 px-5 rounded-3xl">
              一般會員
            </label>
          </div>
        </div>
        <div className=" w-10/12 h-2 bg-white m-auto"></div>

        <ul className="  m-auto p-5 [&>*]:text-white [&>*]:mt-5 text-center text-2xl cursor-pointer">
          <li>
            <Link href={"/admin/dashboard"}>諮詢紀錄</Link>
          </li>
          <li>
            <Link href={"/admin/dashboard"}>收藏合作專家</Link>
          </li>
          <li>
            <Link href={"/admin/dashboard/basic"}>會員資料</Link>
          </li>
          <li>
            <Link href={"/admin/dashboard/forgot-password"}>修改密碼</Link>
          </li>
          <li>
            <Link href={"/"}>登出</Link>
          </li>
        </ul>
      </div>
      <div className=" w-4/5">{children}</div>
    </AdminLayout>
  );
}
