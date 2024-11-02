import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary p-6 text-secondary flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="text-2xl font-bold text-center">Mile3Pizza</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        <Link href="#home" className="text-lg hover:text-white">
          Home
        </Link>
        <Link href="#menu" className="text-lg hover:text-white">
          Menu
        </Link>
        <Link href="#contact" className="text-lg hover:text-white">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden"
        aria-label="Toggle mobile menu"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center space-y-2 mt-4 md:hidden">
          <Link href="#home" className="text-lg hover:text-white" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="#menu" className="text-lg hover:text-white" onClick={toggleMobileMenu}>
            Menu
          </Link>
          <Link href="#contact" className="text-lg hover:text-white" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
