import { useState } from 'react';
import { IImage } from 'src/types/hotels';

type Props = {
  images: IImage[];
};

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function Slider({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full">
      {images?.map((image, index) => (
        <img
          key={image.url}
          src={image.url}
          alt={image.alt || ''}
          className={`absolute top-0 left-0 w-full lg:h-60 object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-y-1/2 w-full flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="px-1 py-0.5 bg-gray-400/50 hover:bg-gray-400/75 text-white rounded-md focus:outline-none"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-1 py-0.5 bg-gray-400/50 hover:bg-gray-400/75 text-white rounded-md focus:outline-none"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;
