import Image from "next/image";
import React from "react";
import Container from "./Container";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function OurResult() {
  return (
    <div className="py-2">
      <Container>
        <div>
          <h1 className="text-3xl font-bold text-center">Our Results</h1>
          <p className="text-xl text-center">
            Not only do our clients love our work, but they also recommend us.
            Now, it's your turn!
          </p>
        </div>
        <div className="py-6  mx-auto">
          <div className="grid grid-rows-[1fr_2fr] md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="relative w-full h-full">
              <Image
                src="/ba2.png"
                fill
                alt="Before and After cleaning comparison"
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>

            <div className="grid grid-rows-3 gap-4">
              <div className="relative w-full aspect-[3/1]">
                <Image
                  src="/Rectangle 31.svg_updatedAt=1745648917573.png"
                  fill
                  alt="Window cleaning service"
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-full aspect-[3/1]">
                <Image
                  src="/Rectangle 38.svg_updatedAt=1745247817826.png"
                  fill
                  alt="Kitchen cleaning service"
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-full aspect-[3/1]">
                <Image
                  src="/Rectangle 38.svg_updatedAt=1745247817826.png"
                  fill
                  alt="Deep cleaning service"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <div className="border-[1px] border-[#4341C7] rounded-lg p-2 px-4 hover:bg-[#4341C7] hover:text-white text-[#4341C7] group transition-all flex justify-center items-center ">
            <Link href={"/"} className="flex gap-2 items-center">
              <span className="">Add Many More</span>
              <div className=" text-[#4341C7] p-1 rounded-full group-hover:bg-white group-hover:text-[#4341C7] group-hover:rotate-45 transition-all duration-300">
                <GoArrowUpRight className="text-xl font-bold" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
