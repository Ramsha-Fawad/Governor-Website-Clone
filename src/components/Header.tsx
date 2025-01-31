"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-sky-800 text-white p-2 gap-9 pl-8">
      {/* Logo positioned absolutely */}
      <div className="absolute top-20 pl-11 transform -translate-y-1/2">
        <Image
          src="/logo-gs.jpg"
          alt="Logo Of Governor Sindh"
          width={90}
          height={90}
          className="z-10"
        />
      </div>

      {/* Navbar content */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Title text (hidden on mobile) */}
        <div className="ml-24 text-2xl pl-16 text-sky-200 font-bold hidden sm:block">
          Tuition Free Education Program on Latest Technologies
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-sky-200 font-semibold">
          <Link href="/" className="hover:text-sky-400">
            Home
          </Link>
          <Link href="/apply" className="hover:text-sky-400">
            Apply
          </Link>
          <Link href="/jobs" className="hover:text-sky-400">
            Jobs
          </Link>
          <Link href="/result" className="hover:text-sky-400">
            Result
          </Link>
          <Link href="/courses" className="hover:text-sky-400">
            Courses
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-sky-400 focus:outline-none"
            >
              <IoIosArrowDown
                className={`transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-sky-800 rounded shadow-lg w-40">
                <Link
                  href="/courses/frontend"
                  className="block px-4 py-2 hover:bg-sky-100"
                >
                  Frontend Development
                </Link>
                <Link
                  href="/courses/backend"
                  className="block px-4 py-2 hover:bg-sky-100"
                >
                  Backend Development
                </Link>
                <Link
                  href="/courses/cloud"
                  className="block px-4 py-2 hover:bg-sky-100"
                >
                  Cloud Computing
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden focus:outline-none text-white"
          onClick={toggleMenu}
        >
          <IoMdMenu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col items-start px-6 space-y-4 font-semibold">
          <Link href="/" className="hover:text-sky-400">
            Home
          </Link>
          <Link href="/apply" className="hover:text-sky-400">
            Apply
          </Link>
          <Link href="/jobs" className="hover:text-sky-400">
            Jobs
          </Link>
          <Link href="/result" className="hover:text-sky-400">
            Result
          </Link>
          <Link href="/courses" className="hover:text-sky-400">
            Courses
          </Link>
          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-sky-400 focus:outline-none"
            >
              <IoIosArrowDown
                className={`transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white text-sky-800 rounded shadow-lg w-40">
                <Link
                  href="/courses/frontend"
                  className="block px-4 py-2 hover:bg-sky-100"
                >
                  Frontend Development
                </Link>
                <Link
                  href="/courses/backend"
                  className="block px-4 py-2 hover:bg-sky-100"
                >
                  Backend Development
                </Link>
                <Link
                  href="/courses/cloud"
                  className="block px-4 py-2 hover:bg-sky-100"
                >
                  Cloud Computing
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
