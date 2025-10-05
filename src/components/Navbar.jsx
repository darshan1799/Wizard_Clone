"use client";
import Image from "next/image";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 shadow-gray-300 shadow-md relative z-50">
      <Container className={"flex items-center justify-between w-full"}>
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </div>

        <div className="hidden md:flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Our Services</Link>
          <Link href={"/"}>Join Us</Link>
        </div>

        <div className="hidden md:block border-[1px] border-[#4341C7] rounded-full p-2 px-4 hover:bg-[#4341C7] hover:text-white text-[#4341C7] group transition-all">
          <Link href={"/"} className="flex gap-2 items-center">
            <span className="font-semibold">Get a Free Quote</span>
            <div className="bg-[#4341C7] text-white p-1 rounded-full group-hover:bg-white group-hover:text-[#4341C7] group-hover:rotate-45 transition-all duration-300">
              <GoArrowUpRight className="text-xl font-bold" />
            </div>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <FiMenu className="text-2xl text-[#4341C7]" />
          </button>
        </div>
      </Container>

      <div
        className={`fixed top-0 right-0 h-full w-64 md:hidden bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <button onClick={() => setOpen(false)}>
            <FiX className="text-2xl text-[#4341C7]" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-lg">
          <Link href={"/"} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href={"/"} onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href={"/"} onClick={() => setOpen(false)}>
            Our Services
          </Link>
          <Link href={"/"} onClick={() => setOpen(false)}>
            Join Us
          </Link>
          <div
            onClick={() => setOpen(false)}
            className="border-[1px] border-[#4341C7] rounded-md p-2 px-4 hover:bg-[#4341C7] hover:text-white text-[#4341C7] group w-fit transition-all"
          >
            <Link href={"/"} className="flex gap-2 items-center">
              <span className="font-semibold">Get a Free Quote</span>
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 md:hidden bg-black/30 z-40"
        />
      )}
    </div>
  );
}
