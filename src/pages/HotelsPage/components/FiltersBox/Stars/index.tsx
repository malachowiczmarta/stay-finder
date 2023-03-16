import React from 'react';
import Star from 'src/components/Star';

type StarRatingFilterProps = {
  onChange: (rating: number) => void;
  stars: number;
};

const StarRatingFilter = React.memo(function StarRatingFilter({
  onChange,
  stars
}: StarRatingFilterProps) {
  const handleClick = (value: number) => {
    console.log('value', value);
    if (value === stars) {
      // if the same star is clicked twice, reset the rating to 0
      onChange(0);
    } else {
      onChange(value);
    }
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} isFilled={value <= stars} onClick={() => handleClick(value)} />
      ))}
    </div>
  );
});

export default StarRatingFilter;
