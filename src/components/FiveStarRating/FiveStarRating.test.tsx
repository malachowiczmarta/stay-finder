import { render } from '@testing-library/react';
import StarRating from '../FiveStarRating';

describe('StarRating component', () => {
  it('renders the correct number of full stars', () => {
    const { getAllByTestId } = render(<StarRating rating="3" />);
    const fullStars = getAllByTestId('star-svg-path', { exact: false }).filter(
      (star) => star.getAttribute('fill') === '#eab308'
    );
    expect(fullStars.length).toBe(3);
  });

  it('renders the correct number of empty stars', () => {
    const { getAllByTestId } = render(<StarRating rating="3" />);
    const emptyStars = getAllByTestId('star-svg-path', { exact: false }).filter(
      (star) => star.getAttribute('fill') === '#c5c5c5'
    );
    expect(emptyStars.length).toBe(2);
  });
});
