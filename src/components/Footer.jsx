import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#1C1C2C] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 py-9 lg:grid-cols-4 gap-8">
          <div>
            <div className=" relative w-16 h-16 rounded-full mb-4 flex items-center justify-center">
              <Image
                src={"/logo.png"}
                fill
                alt="logo.png"
                className="object-contain"
              ></Image>
            </div>
            <p className="text-gray-300 mb-6">
              At Wizard Cleaning Services, we provide all kinds of cleaning
              services to help people maintain a spotless space.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Join Us Today
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Bathroom Cleaning Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Kitchen Cleaning Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  House Cleaning Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Parking Cleaning Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Commercial Area Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Address</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  8 dipan apartment bhaikaka nagar thaltej ahmedabad.
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 97252 20107</p>
                  <p className="text-gray-300">+91 82398 07332</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">
                Stay Connected With Us
              </h4>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600"
                >
                  <BsWhatsapp className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-gray-800 bg-black">
        <Container>
          <div className=" py-2 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © 2025 Wizard Cleaning Services | All Rights Reserved.
            </p>
            <p className="text-white text-sm">Developed by Darshan Sutariya</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
