import React from "react";
import Container from "./Container";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function HeroSection() {
  return (
    <div className="Hero-section h-full pt-10">
      <Container className={"flex flex-col mt-3"}>
        <div className="hero-content flex flex-col gap-3 justify-center items-center">
          <div className="flex md:gap-6 items-center border-[1px] border-[#4341C7] rounded-full p-1 px-5 text-center flex-wrap justify-center ">
            #1 Cleaning services in Ahmedabad{" "}
            <span className="text-nowrap">+91 97252 20107</span>
          </div>
          <div className="text-center md:text-left ">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center">
              Transform Your Space with
              <span className="text-[#4341C7]"> Wizard</span> The
              <span className="text-[#4341C7]"> Deep Cleaning</span> Services.
            </h1>
          </div>
          <div className="flex md:flex-nowrap flex-wrap  gap-3 md:gap-5 md:pt-10 z-40">
            <button className="bg-[#4341C7] hover:bg-[#6f6ccd] p-3 w-full  rounded-lg text-white px-5 font-semibold  text-md text-nowrap cursor-pointer">
              Contact Us Now
            </button>
            <button className="hover:bg-[#4341C7] w-full justify-center text-[#4341C7] border-[1px] border-[#4341C7] items-center flex gap-2 p-3 rounded-lg hover:text-white px-5 font-semibold hover:cursor-pointer text-md text-nowrap">
              View Services{" "}
              <span className="font-bold text-lg">
                <GoArrowUpRight />
              </span>
            </button>
          </div>
        </div>
        <div className="relative px-2 md:px-14 aspect-[16/9] lg:-mt-14 xl:-mt-24 xl:-mb-16">
          <Image
            src="/hero_section_image.png"
            fill
            alt="hero-image"
            className="object-contain"
          />
        </div>
      </Container>
    </div>
  );
}
