"use client";
import Banner from "@/components/pages/home/Banner";
import Parner from "@/components/pages/home/Parner";
import Service from "@/components/pages/home/Service";
import Feeback from "@/components/pages/home/Feeback";
import Carousel from "@/components/pages/home/Carousel";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col bg-gray-100">
        <Banner />
        <Carousel />
        <Parner />
        <Service />
        <Feeback />
      </div>
    </main>
  );
}
