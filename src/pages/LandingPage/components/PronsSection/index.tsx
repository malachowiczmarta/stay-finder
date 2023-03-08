import family from 'src/assets/family.svg';
import staing from 'src/assets/staing.svg';
import Adventure from './components/Adventure';

const PronsSection = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2  p-6 lg:p-14 mt-8">
      <div className="py-3 lg:py-6 h-34 rounded-lg">
        <h2 className="text-gray-800 text-4xl">We offer following services for you </h2>
      </div>
      <div className="bg-violet-50 h-34 p-3 lg:p-6 rounded-lg flex items-center justify-start gap-4">
        <Adventure />
        <h3>Various of destination</h3>
      </div>
      <div className="bg-violet-50 relative h-34 p-3 lg:p-6 rounded-lg flex items-center justify-start gap-4">
        <img className="max-h-20" src={family} alt="family" />
        <h3>Hotels tailored to your needs</h3>
      </div>
      <div className="bg-violet-50 h-34 p-3 lg:p-6 rounded-lg">
        <div className="flex items-center justify-start gap-4">
          <img className="max-h-20" src={staing} alt="family" />
          <h3>Find the perfect room</h3>
        </div>
      </div>
    </section>
  );
};

export default PronsSection;
