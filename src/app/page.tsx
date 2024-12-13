import About from "@/components/about";
import FindUs from "@/components/findus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/newsletter";
import PhotoGallery from "@/components/photo-gallery";
import TodaySpecial from "@/components/today-special";
import VideoSection from "@/components/video-section";
import WhatWeBelieve from "@/components/what-we-believe";

export default function Home() {
  return (
    <main className=" mx-auto h-full ">
      <Navbar />
      <Hero />
      <About />
      <TodaySpecial />
      <WhatWeBelieve />
      <VideoSection />
      <PhotoGallery />
      <FindUs />
      <NewsLetter />
      <Footer />
    </main>
  );
}
