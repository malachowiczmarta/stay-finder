import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <Link to="/" className="p-2 mr-4 inline-flex items-center">
        <span className="text-xl text-white font-bold uppercase tracking-wide">StayFinder</span>
      </Link>
      <button
        onClick={toggleMenu}
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler">
        Menu
      </button>
      <div
        className={`top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto ${
          !isOpen ? 'hidden' : ''
        }`}
        id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            to="/hotels"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>All hotels</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="text-gray-600 body-font mt-auto">
    <div className="container px-5 py-8 flex items-center sm:flex-row flex-col">
      <Link
        to="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">StayFinder</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <TopNavigation />
      {children}
      <Footer />
    </div>
  );
}
