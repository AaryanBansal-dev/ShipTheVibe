import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has the correct styling classes', () => {
    render(<Button label="Styled Button" onClick={() => {}} />);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveClass('bg-blue-500', 'text-white', 'p-2', 'rounded');
  });
});
