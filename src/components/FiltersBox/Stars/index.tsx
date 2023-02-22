import { useState } from 'react';
import Star from 'src/components/Star';

type StarRatingFilterProps = {
  onChange: (rating: number) => void;
};

function StarRatingFilter({ onChange }: StarRatingFilterProps) {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    console.log('value', value, rating);
    if (value === rating) {
      // if the same star is clicked twice, reset the rating to 0
      setRating(0);
      onChange(0);
    } else {
      setRating(value);
      onChange(value);
    }
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} isFilled={value <= rating} onClick={() => handleClick(value)} />
      ))}
    </div>
  );
}

export default StarRatingFilter;
