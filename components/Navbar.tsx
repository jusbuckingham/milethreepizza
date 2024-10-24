import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-primary p-6 text-secondary flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="text-2xl font-bold text-center">Mile3Pizza</div>
      <div className="flex space-x-4">
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
      <Bars3Icon className="h-6 w-6 md:hidden" />
    </nav>
  );
}