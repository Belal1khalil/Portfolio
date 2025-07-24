import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
export default function Home() {
  return (
    <section className="h-full mt-10 sm:mt-0 px-5">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-end Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-emerald-500">Belal-Khalil</span></h1>
            <p className="max-w-[550px] mb-6">
              I’m Belal-Khalil, a Front-End Developer SEO-optimized web applications using React, Next.js, and modern styling tools. I combine strong UI skills with deep technical SEO knowledge to build fast, scalable, and search-friendly digital experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant='outline' size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </Button>
              <div className="flex mb-8 xl:mb-0">
                <Socials/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
