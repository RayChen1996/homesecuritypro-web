"use client";
import MemberLayout from "@/components/Layout/member";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
interface LoginForm {
  username: string;
  password: string;
}
export default function Page() {
  const { push } = useRouter();
  function gotoDashboard() {
    push("/");
  }
  const { control, watch, handleSubmit } = useForm<LoginForm>({});
  const _submit: SubmitHandler<LoginForm> = (param) => {
    // console.log(param.username);
    // alert(param.username);
    // alert(param.password);
    push("/admin/dashboard");
  };
  return (
    <MemberLayout>
      <div className=" min-h-screen h-full py-10   container">
        <SectionTitle title="管理後台" subTitle="登入" />
        <div className=" w-2/3 m-auto h-2/3 flex justify-center items-center">
          <form onSubmit={handleSubmit(_submit)}>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <label htmlFor="username">帳號</label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="username"
                    type="text"
                    className="grow input-lg input-primary"
                    placeholder=""
                  />
                )}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <label htmlFor="password">密碼</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    id="password"
                    className="grow"
                  />
                )}
              />
            </label>

            <button type="submit" className="btn btn-primary">
              登入
            </button>
          </form>
        </div>
      </div>
    </MemberLayout>
  );
}
