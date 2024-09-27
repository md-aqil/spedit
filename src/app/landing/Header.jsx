import React from "react";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container mb-12">
      <div className="bg-transparent border-b border-gray-800">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <Link href="#" title="" className="flex">
              <Image className="w-auto h-8 lg:h-10" src={logo} alt="Logo" />
            </Link>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#" title="" className="text-base  text-gray-400 hover:text-[#9BEC00]">
                Copy Traders
              </a>
              <a href="#" title="" className="text-base  text-gray-400 hover:text-[#9BEC00]">
                About
              </a>
              <a href="#" title="" className="text-base  text-gray-400 hover:text-[#9BEC00]">
                Contact Us
              </a>
            </div>

            <button type="button" className="flex items-center justify-center ml-auto text-gray-300 bg-transparent rounded-full w-9 h-9 lg:hidden hover:text-[#9BEC00]">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex p-2 ml-5 text-gray-300 transition-all duration-200 rounded-md lg:hidden hover:text-[#9BEC00] focus:bg-transparent hover:bg-transparent"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#" title="" className="text-base  text-gray-400 hover:text-[#9BEC00]">
                Sign up
              </a>
              <a href="#" title="" className="text-base  text-gray-400 hover:text-[#9BEC00]">
                Sign in
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* xs to lg */}
      <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

            <button type="button" className="inline-flex p-2 text-gray-300 transition-all duration-200 rounded-md focus:bg-transparent hover:bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <a href="#" title="" className="py-2 text-base font-medium text-gray-300 transition-all duration-200 focus:text-[#9BEC00] hover:text-[#9BEC00]">
                Features
              </a>
              <a href="#" title="" className="py-2 text-base font-medium text-gray-300 transition-all duration-200 focus:text-[#9BEC00] hover:text-[#9BEC00]">
                Solutions
              </a>
              <a href="#" title="" className="py-2 text-base font-medium text-gray-300 transition-all duration-200 focus:text-[#9BEC00] hover:text-[#9BEC00]">
                Resources
              </a>
              <a href="#" title="" className="py-2 text-base font-medium text-gray-300 transition-all duration-200 focus:text-[#9BEC00] hover:text-[#9BEC00]">
                Pricing
              </a>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex flex-col space-y-2">
              <a href="#" title="" className="py-2 text-base font-medium text-gray-300 transition-all duration-200 focus:text-[#9BEC00] hover:text-[#9BEC00]">
                Sign up
              </a>
              <a href="#" title="" className="py-2 text-base font-medium text-gray-300 transition-all duration-200 focus:text-[#9BEC00] hover:text-[#9BEC00]">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
