import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm static text', () => {
  render(<BookingForm />);
  
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit Reservation/i })).toBeInTheDocument();
});
