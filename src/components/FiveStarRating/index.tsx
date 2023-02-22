import Star from '../Star';

type StarRatingProps = {
  rating: string;
};

function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(Number(rating));
  const halfStar = Number(rating) - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} isFilled={true} />
      ))}
      {halfStar && <Star isFilled={true} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i + fullStars + 1} isFilled={false} />
      ))}
    </div>
  );
}

export default StarRating;
