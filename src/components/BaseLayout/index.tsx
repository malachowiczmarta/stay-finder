import { Link } from 'react-router-dom';
import { getHotelsList } from 'src/services/hotels';
import bed from 'src/assets/bed.svg';

export function mainLoader() {
  const hotels = getHotelsList();
  return hotels;
}

const TopNavigation = () => {
  return (
    <nav className="flex items-center  bg-white p-3 flex-wrap">
      <Link to="/" className="p-2 mr-4 inline-flex items-center">
        <img className="h-5 mr-1" src={bed} alt="logo stayfinder" />
        <span className="text-xl text-violet-600 uppercase tracking-wide">
          Stay<b>Finder</b>
        </span>
      </Link>
    </nav>
  );
};

const Footer = () => (
  <footer className="text-gray-600 body-font mt-auto">
    <div className="container px-5 py-8 flex items-center sm:flex-row flex-col">
      <Link
        to="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <span className="ml-3 text-xl">StayFinder</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <TopNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
