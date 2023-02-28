import { render, fireEvent } from '@testing-library/react';
import Slider from '.';

const images = [
  {
    url: 'https://example.com/image1.jpg',
    alt: 'Image 1'
  },
  {
    url: 'https://example.com/image2.jpg',
    alt: 'Image 2'
  },
  {
    url: 'https://example.com/image3.jpg',
    alt: 'Image 3'
  }
];

describe('Slider', () => {
  it('renders without crashing', () => {
    render(<Slider images={images} />);
  });

  it('displays the first image by default', () => {
    const { getByAltText } = render(<Slider images={images} />);
    expect(getByAltText('Image 1')).toBeInTheDocument();
  });

  it('switches to the next image when clicking the "next" button', () => {
    const { getByAltText, getByLabelText } = render(<Slider images={images} />);
    fireEvent.click(getByLabelText('next'));
    expect(getByAltText('Image 2')).toBeInTheDocument();
  });

  it('switches to the previous image when clicking the "previous" button', () => {
    const { getByAltText, getByLabelText } = render(<Slider images={images} />);
    fireEvent.click(getByLabelText('previous'));
    expect(getByAltText('Image 3')).toBeInTheDocument();
  });
});
