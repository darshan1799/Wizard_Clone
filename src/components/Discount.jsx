"use client";

import Image from "next/image";
import Container from "./Container";

export default function DiscountBanner() {
  return (
    <Container>
      <div className="relative w-full h-[350px]  sm:h-[400px] rounded-3xl overflow-hidden mb-20">
        <Image
          src="/hero_section_image.png"
          alt="Cleaning Services Banner"
          fill
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Get 25% Discount on your first Cleaning Services.
          </h2>

          <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-medium rounded-xl shadow-md transition hover:bg-blue-700 cursor-pointer hover:text-white ">
            Contact Us Now
          </button>
        </div>
      </div>
    </Container>
  );
}
