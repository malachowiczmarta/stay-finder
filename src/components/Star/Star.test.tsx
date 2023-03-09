import { fireEvent, render } from '@testing-library/react';
import Star from '.';

describe('Star component', () => {
  it('should render an unfilled star', () => {
    const { getByTestId } = render(<Star isFilled={false} />);
    const starPath = getByTestId('star-svg-path');
    expect(starPath).toHaveAttribute('fill', '#c5c5c5');
  });

  it('should render a filled star', () => {
    const { getByTestId } = render(<Star isFilled />);
    const starPath = getByTestId('star-svg-path');
    expect(starPath).toHaveAttribute('fill', '#eab308');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Star isFilled onClick={handleClick} />);
    const star = getByTestId('star-svg');
    fireEvent.click(star);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
