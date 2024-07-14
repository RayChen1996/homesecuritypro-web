import BasicLayout from "@/components/Layout/basic";
import MemberLayout from "@/components/Layout/member";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MemberLayout>{children}</MemberLayout>;
}
