// src/components/BookingForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';

function BookingForm() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(null);

  useEffect(() => {
    axios.get('/planets')
      .then((response) => setPlanets(response.data))
      .catch((error) => console.error('Error fetching planets:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/bookings', {
      planet_id: selectedPlanet,
      departure_date: departureDate,
    })
      .then(() => {
        setBookingSuccess(true);
        setSelectedPlanet('');
        setDepartureDate('');
      })
      .catch((error) => {
        console.error('Error creating booking:', error);
        setBookingSuccess(false);
      });
  };

  return (
    <div>
      <h2>Book Your Trip</h2>
      {bookingSuccess === true && <p style={{ color: 'green' }}>Booking successful!</p>}
      {bookingSuccess === false && <p style={{ color: 'red' }}>Booking failed.</p>}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="planet-select-label">Select Planet</InputLabel>
          <Select
            labelId="planet-select-label"
            id="planet-select"
            value={selectedPlanet}
            label="Select Planet"
            onChange={(e) => setSelectedPlanet(e.target.value)}
          >
            {planets.map((planet) => (
              <MenuItem key={planet.id} value={planet.id}>
                {planet.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Departure Date"
          type="date"
          fullWidth
          margin="normal"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained">
          Book Trip
        </Button>
      </form>
    </div>
  );
}

export default BookingForm;