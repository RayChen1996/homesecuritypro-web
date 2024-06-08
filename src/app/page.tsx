import AppHeader from "@/components/Layout/AppHeader";
import Banner from "@/components/pages/home/Banner";

import Parner from "@/components/pages/home/Parner";
import BasicLayout from "@/components/Layout/basic";

import Image from "next/image";
import Service from "@/components/pages/home/Service";
import Feeback from "@/components/pages/home/Feeback";
import Carousel from "@/components/pages/home/Carousel";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col   bg-gray-100 ">
        <Banner />
        <Carousel />
        <Parner />
        <Service />
        <Feeback />
      </div>
    </main>
  );
}
