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

  it('has the correct styling classes for primary variant', () => {
    render(<Button label="Styled Button" onClick={() => {}} variant="primary" />);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveClass('rounded-xl', 'font-medium');
  });

  it('renders secondary variant correctly', () => {
    render(<Button label="Secondary" onClick={() => {}} variant="secondary" />);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('bg-zinc-100');
  });

  it('shows loading spinner when loading', () => {
    render(<Button label="Loading" onClick={() => {}} loading />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Disabled" onClick={() => {}} disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button label="Small" onClick={() => {}} size="sm" />);
    expect(screen.getByText('Small')).toHaveClass('px-3', 'py-1.5', 'text-sm');
    
    rerender(<Button label="Large" onClick={() => {}} size="lg" />);
    expect(screen.getByText('Large')).toHaveClass('px-6', 'py-3', 'text-lg');
  });
});
