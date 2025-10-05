import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Users, Leaf, Award, DollarSign, Wrench, Grid3x3 } from "lucide-react";

export default function WhyWe() {
  return (
    <div className="">
      <Container>
        <div className="text-center mt-20 flex flex-col justify-center items-center lg:-mb-10">
          <h1 className="text-3xl font-bold text-center">Why Choose Us?</h1>
          <p className="text-xl text-center max-w-5xl">
            At Wizard, we understand that cleanliness is essential for a healthy
            living and working environment. Our commitment to excellence,
            attention to detail, and customer satisfaction sets us apart in the
            cleaning industry across Ahmedabad.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-2">
          <div className="hidden lg:block relative">
            <div className="relative w-full max-w-4xl mx-auto aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] aspect-square rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300 opacity-30"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[50%] xl:w-[60%] aspect-square rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/whywe.png"
                    alt="Cleaning image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 space-y-6">
                <FeatureCard
                  icon={Users}
                  title="Experienced Professional"
                  className="translate-y-[-150px] xl:translate-x-[-100px]"
                />
                <FeatureCard
                  icon={Award}
                  title="Reliability"
                  className="
                translate-y-[-10px] xl:translate-x-[-200px] translate-x-[-70px]"
                />
                <FeatureCard
                  icon={Wrench}
                  title="Advanced Equipment"
                  className="translate-y-[160px]  xl:translate-x-[-100px]"
                />
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 space-y-6">
                <FeatureCard
                  icon={Leaf}
                  title="Eco-friendly Solutions"
                  className="translate-y-[-150px]  xl:translate-x-[100px]"
                />
                <FeatureCard
                  icon={DollarSign}
                  title="Best Price"
                  className="translate-x-[70px]   translate-y-[-10px] xl:translate-x-[200px]"
                />
                <FeatureCard
                  icon={Grid3x3}
                  title="Customized Services"
                  className=" translate-y-[160px]  xl:translate-x-[100px]"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden space-y-6">
            <div className="space-y-4 ld:max-w-md mx-auto">
              <FeatureCard icon={Wrench} title="Advanced Equipment" />
              <FeatureCard icon={Leaf} title="Eco-friendly Solutions" />
              <FeatureCard icon={Users} title="Experienced Professional" />
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] aspect-square rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300 opacity-30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[70%] aspect-square rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/whywe.png"
                      alt="Cleaning Professional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <FeatureCard icon={Award} title="Reliability" />
              <FeatureCard icon={DollarSign} title="Best Price" />
              <FeatureCard icon={Grid3x3} title="Customized Services" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, className }) => (
  <div
    className={`bg-blue-50 rounded-3xl border-2 lg:w-auto w-full border-indigo-600 flex items-center gap-3 p-4 ${className}`}
  >
    <div className="bg-indigo-600 rounded-full p-3 flex-shrink-0">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <p className="text-base lg:text-lg font-medium text-gray-800">{title}</p>
  </div>
);
