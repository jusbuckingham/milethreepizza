"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="bg-primary p-6 text-secondary flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8"
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/Mile3Pizza-Logo.png"
            alt="Mile3Pizza Logo"
            width={50}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link
          href="#home"
          className="text-lg text-white hover:text-gray-200 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="#menu"
          className="text-lg text-white hover:text-gray-200 transition-colors duration-200"
        >
          Menu
        </Link>
        <Link
          href="#contact"
          className="text-lg text-white hover:text-gray-200 transition-colors duration-200"
        >
          Contact
        </Link>

        {/* Order Now Button (Desktop) */}
        <a
          href="https://link.clover.com/urlshortener/hHVWhr"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden focus:outline-none"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center space-y-2 mt-4 md:hidden">
          <Link
            href="#home"
            className="text-lg text-white hover:text-gray-200 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="#menu"
            className="text-lg text-white hover:text-gray-200 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Menu
          </Link>
          <Link
            href="#contact"
            className="text-lg text-white hover:text-gray-200 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>

          {/* Order Now Button (Mobile) */}
          <a
            href="https://link.clover.com/urlshortener/hHVWhr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}