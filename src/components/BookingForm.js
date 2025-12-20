import React, { useState, useReducer } from 'react';

function BookingForm({ submitForm }) {  // receive submitForm via props
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Reducer for times
  const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00'];
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'DATE_CHANGED':
        return window.fetchAPI ? window.fetchAPI(action.payload) : state;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'DATE_CHANGED', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);  // call the function passed via props
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={date} onChange={handleDateChange} required />

      <label htmlFor="time">Time</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input type="number" id="guests" min="1" max="20" value={guests} onChange={(e) => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" style={{ padding: '10px', backgroundColor: '#f4ce14', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;
