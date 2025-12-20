import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

function BookingPage() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI ? window.submitAPI(formData) : true;

    if (success) {
      navigate('/confirmed');  // navigate to confirmation page
    } else {
      alert('Sorry, this time is already booked.');
    }
  };

  return (
    <div className="container" style={{ padding: '50px' }}>
      <h1>Reserve a Table</h1>
      <p>Fill out the form below to book your table.</p>
      <BookingForm submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
