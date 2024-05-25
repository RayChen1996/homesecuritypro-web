import Image from "next/image";
import React from "react";

export default function AppFooter() {
  return (
    <div className=" bg-primary-300 pt-1 ">
      <footer className=" md:flex justify-center items-start gap-3 mt-[72px] ">
        <Image
          alt=""
          src={"footerLogo.svg"}
          width={150}
          height={150}
          className=" md:mr-36"
        />
        <div className=" flex flex-col justify-center items-center md:mr-12">
          <button className="btn bg-primary-300 border-primary-100 text-primary-100  rounded-3xl">
            會員登入
          </button>
          <a href="" className=" my-6 text-white">
            會員好評
          </a>
        </div>

        <div className=" flex flex-col justify-center items-center md:mr-12">
          <button className="btn bg-primary-300 border-primary-100  text-primary-100 rounded-3xl">
            成為合作專家
          </button>
          <a href="" className=" my-6 text-white">
            申請成為合作夥伴
          </a>
          <a href="" className=" my-6 text-white">
            合作夥伴儀錶板
          </a>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <button className="btn bg-primary-300 border-primary-100 text-primary-100  rounded-3xl">
            關於我們
          </button>
          <a href="" className=" my-6 text-white">
            聯絡我們
          </a>
          <a href="" className=" my-6 text-white">
            常見問題
          </a>
        </div>
      </footer>

      <footer className=" text-gray-200 text-center mt-16 pb-16">
        此網站為六角學院 Node.js 專題作品，非供營利使用
      </footer>
    </div>
  );
}
