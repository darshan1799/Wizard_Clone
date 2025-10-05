"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Reviews = [
  {
    id: 1,
    name: "Vikram Joshi",
    location: "Ahmedabad",
    image: "/joshi.png",
    feedback:
      "Best cleaning service in Ahmedabad! Wizard Cleaning Services' attention to detail is unmatched, and they use quality products that leave my home smelling fresh for days.",
  },
  {
    id: 2,
    name: "Neha Patel",
    location: "Ahmedabad",
    image:
      "/medium-shot-smiley-man-posing.jpg_updatedAt=1746160662970&w=640&q=75.png",
    feedback:
      "Extremely professional team! My sofa looks brand new again. Highly recommended for anyone in Ahmedabad.",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    location: "Vadodara",
    image: "/joshi.png",
    feedback:
      "They arrived on time and did an amazing job. My carpets have never looked this clean before!",
  },
];

export default function Review() {
  return (
    <div className="mt-20">
      <Container>
        <h1 className="text-3xl font-bold text-center">
          Our Valuable Client's Responses
        </h1>
        <div className="w-full py-10 md:mb-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper px-4 sm:px-6"
          >
            {Reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-2 sm:px-3 grid sm:grid-cols-[1fr_2fr] grid-rows-[auto_auto] sm:grid-rows-1 gap-5 items-center h-auto sm:h-[260px]">
                  <Image
                    src="/qoute.png"
                    width={100}
                    height={100}
                    alt="quote"
                    className="absolute right-3 top-4 "
                  />

                  <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mx-auto sm:mx-0">
                    <Image
                      src={item?.image}
                      fill
                      alt="Customer photo"
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="text-gray-800 text-center sm:text-left">
                    <p className="italic text-base sm:text-lg leading-relaxed">
                      {item.feedback}
                    </p>
                    <p className="mt-4 font-semibold text-gray-900 text-sm sm:text-base">
                      {item.name}, {item.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
