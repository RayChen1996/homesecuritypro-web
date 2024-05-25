import AppHeader from "@/components/Layout/AppHeader";
import Banner from "@/components/pages/home/Banner";
import Parner from "@/components/pages/home/Parner";
import BasicLayout from "@/components/Layout/basic";

import Image from "next/image";
import Service from "@/components/pages/home/Service";
import Feeback from "@/components/pages/home/Feeback";

export default function Home() {
  return (
    <main className="    ">
      <BasicLayout>
        <div className="flex flex-col   bg-gray-100 ">
          <Banner />
          <Parner />
          <Service />
          <Feeback />
        </div>
      </BasicLayout>
    </main>
  );
}
