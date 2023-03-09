type StarProps = {
  isFilled: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function Star({ isFilled, onClick }: StarProps) {
  return (
    <svg
      data-testid="star-svg"
      onClick={onClick}
      className={`w-5 h-5 fill-current ${onClick ? 'cursor-pointer' : ''} `}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-testid="star-svg-path"
        d="M10 1L7.29 6.39L1 7.36L5.24 11.8L4.28 18L10 15.2L15.72 18L14.76 11.8L19 7.36L12.71 6.39L10 1Z"
        fill={isFilled ? '#eab308' : '#c5c5c5'}
      />
    </svg>
  );
}
export default Star;
