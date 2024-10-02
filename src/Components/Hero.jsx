import React from 'react';
import Profile from '../assets/Profile.png';
function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-20 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 ml-5">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="text-purple-500">My Portfolio</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8">
          Sophomore @NIT Raipur | Senior Executive @Finance Club | Executive @ Turing club of Programmers| 5-Star HackerRank | Aspiring full-stack developer
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#Contact-me" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold">
              Contact Me
            </a>
            <a href="#Projects" className="bg-transparent border border-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all">
              Projects
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-2/5 lg:mb-0">
          <img src={Profile} alt="Hero" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
