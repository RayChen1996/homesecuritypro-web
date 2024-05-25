import React from "react";

import AppHeader from "@/components/Layout/AppHeader";
// import { drawerId } from "./options";
// import DrawerSide from "./DrawerSide";
import AppFooter from "@/components/Layout/basic/AppFooter";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="drawer bg-gray-100 flex flex-col h-screen">
      <div className="drawer-content   bg-[#ffffff]">
        <AppHeader />

        <div className="flex-1">{children}</div>

        <AppFooter />
      </div>
    </div>
  );
}
