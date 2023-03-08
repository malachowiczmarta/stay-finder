import { Link } from 'react-router-dom';
import traveling from 'src/assets/traveling.svg';
import PronsSection from './components/PronsSection';

const LandingPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 gap-6">
        <div className="flex flex-col md:flex-row items-center p-6 lg:p-14 bg-violet-50 rounded-lg">
          <div className="md:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Find your perfect stay with StayFinder
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              StayFinder helps you find the best hotels and accommodations for your next trip. With
              our easy-to-use search feature, you can filter by price, location, and more to find
              the perfect stay.
            </p>
            <Link
              to="/hotels"
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
            >
              Find your stay
            </Link>
          </div>
          <div className="md:w-1/2 md:ml-8 mt-auto">
            <img src={traveling} alt="traveling illustration" className="rounded-lg" />
          </div>
        </div>
        <PronsSection />
      </div>
    </div>
  );
};

export default LandingPage;
