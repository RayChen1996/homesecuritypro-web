import React from "react";
import clsx from "clsx";
interface AdminLayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}
export default function AdminLayout({ children, ...props }: AdminLayoutProps) {
  return (
    <div className=" min-h-screen max-h-dvh my-12">
      <div
        className={clsx(
          "container m-auto w-4/5 border-2 rounded-3xl min-h-screen flex",
          props
        )}
      >
        {children}
      </div>
    </div>
  );
}
