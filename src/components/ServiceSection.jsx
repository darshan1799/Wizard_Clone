import Image from "next/image";
import React from "react";
import Container from "./Container";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    title: "Bathroom Cleaning Service",
    bgimage: "/service_image_1.png",
    frame_image: "/Frame1.png",
  },
  {
    title: "Full House Cleaning Service",
    bgimage: "/service_2.png",
    frame_image: "/Frame 1000002047.svg_updatedAt=1745152814514.png",
  },
  {
    title: "Kitchen Cleaning Service",
    bgimage: "/service_3.png",
    frame_image: "/Frame 1000002047-2.svg_updatedAt=1745152813750.png",
  },
  {
    title: "Commercial Area Service",
    bgimage: "/Rectangle 31.svg_updatedAt=1745648917573.png",
    frame_image: "/Frame1.png",
  },
];

export default function ServiceSection() {
  return (
    <div className="service-main">
      <Container>
        <div>
          <h1 className="text-3xl font-bold text-center">
            We Have All Your Cleaning Needs Covered!
          </h1>
          <p className="text-xl text-center">
            From deep cleaning to everyday shine, we've got it all covered—easy,
            fast, and spotless!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-14 gap-4 ">
          {services.map((item, index) => (
            <div
              className="rounded-xl shadow-sm shadow-gray-300 cursor-pointer hover:shadow-sm hover:shadow-blue-400"
              key={index}
            >
              <div className="relative h-52">
                <Image
                  src={item.bgimage}
                  alt={item.bgimage}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-full  flex justify-center relative bottom-12">
                <Image
                  src={item.frame_image}
                  alt="Frame.png"
                  height={105}
                  width={105}
                />
              </div>
              <div className="text-center -mt-6 pb-4">
                <h1 className="text-xl font-[550]">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center">
          <button className="hover:bg-[#4341C7]  justify-center text-[#4341C7] border-[1px] border-[#4341C7] items-center flex gap-2 p-3 rounded-xl hover:text-white px-5 font-semibold hover:cursor-pointer  text-nowrap">
            <span className="text-md">View All Services </span>
            <span className="font-bold text-lg">
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}
