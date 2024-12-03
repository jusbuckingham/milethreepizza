"use client";

import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary p-6 text-secondary flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
      {/* Logo and Text */}
      <div className="flex items-center space-x-2">
        <Link href="#home" legacyBehavior>
          <a className="flex items-center">
            <Image 
              src="/images/Mile3Pizza-Logo.png" 
              alt="Mile3Pizza Logo" 
              width={50} 
              height={50} 
              className="h-auto w-auto" 
            />
          </a>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="#home" legacyBehavior>
          <a className="text-lg text-white hover:text-gray-200 transition-colors duration-200">Home</a>
        </Link>
        <Link href="#menu" legacyBehavior>
          <a className="text-lg text-white hover:text-gray-200 transition-colors duration-200">Menu</a>
        </Link>
        <Link href="#contact" legacyBehavior>
          <a className="text-lg text-white hover:text-gray-200 transition-colors duration-200">Contact</a>
        </Link>

        {/* Order Now Button */}
        <a
          href="https://link.clover.com/urlshortener/hHVWhr"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center space-y-2 mt-4 md:hidden">
          <Link href="#home" legacyBehavior>
            <a className="text-lg text-white hover:text-gray-200 transition-colors duration-200" onClick={toggleMobileMenu}>
              Home
            </a>
          </Link>
          <Link href="#menu" legacyBehavior>
            <a className="text-lg text-white hover:text-gray-200 transition-colors duration-200" onClick={toggleMobileMenu}>
              Menu
            </a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a className="text-lg text-white hover:text-gray-200 transition-colors duration-200" onClick={toggleMobileMenu}>
              Contact
            </a>
          </Link>
          {/* Mobile Order Now Button */}
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
