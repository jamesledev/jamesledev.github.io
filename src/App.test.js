import { render } from '@testing-library/react';
import App from './App';

describe('Run home page', () => {
  it('runs home page successfully', () => {
    const { container } = render(<App />);
    const homePage = container.querySelector('.home');
    expect(homePage).not.toBeNull();
  });
  it('not runs home page successfully', () => {
    const { container } = render(<App />);
    const homePage = container.querySelector('.notOnHomePage');
    expect(homePage).toBeNull();
  });
});
