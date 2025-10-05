"use client";
import React, { useState } from "react";
import { User, Phone, Sparkles } from "lucide-react";
import Container from "./Container";

export default function ContactSections() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    console.log({ name, service, phone });
    alert("Quote request submitted!");
  };

  return (
    <div className="bg-[#F0F0FF] py-16 md:px-4">
      <Container>
        <div className="bg-white rounded-3xl py-6 md:px-2 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13291.635937842926!2d72.5559743!3d23.026197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1759645063992!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              ></iframe>
            </div>

            <div className="px-8 py-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Get A Free Quote Today!
              </h2>
              <p className="mb-8 text-xl font-thin max-w-md">
                Enter your details and get a free quote for your cleaning
                service.
              </p>

              <div className="space-y-5">
                <div className="-mt-3">
                  <label className="relative top-3  left-2 px-2 text-gray-800 font-mediums bg-white z-40">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="-mt-3">
                  <label className=" text-gray-800 font-medium mb-2 relative top-3 left-2 px-2 bg-white z-40">
                    Select your service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
                    >
                      <option value="">Select a cleaning service</option>
                      <option value="bathroom">Bathroom Cleaning</option>
                      <option value="kitchen">Kitchen Cleaning</option>
                      <option value="house">House Cleaning</option>
                      <option value="parking">Parking Cleaning</option>
                      <option value="commercial">Commercial Area</option>
                    </select>
                  </div>
                </div>

                <div className="-mt-3">
                  <label className="relative top-3 left-2 px-2 text-gray-800 font-medium mb-2  bg-white z-40">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter Your Phone Number"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="w-full md:w-auto bg-[#4341C7] p-3 px-4  text-white rounded-lg  hover:bg-[#6e6ddc] transition-colors cursor-pointer"
                >
                  Send Me Free Quote Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
