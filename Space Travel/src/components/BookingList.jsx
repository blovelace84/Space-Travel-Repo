// src/components/BookingList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('/bookings')
      .then((response) => setBookings(response.data))
      .catch((error) => console.error('Error fetching bookings:', error));

    axios.get('/planets')
      .then((response) => setPlanets(response.data))
      .catch((error) => console.error('Error fetching planets:', error));

  }, []);

  const getPlanetName = (planetId) => {
    const planet = planets.find((p) => p.id === planetId);
    return planet ? planet.name : 'Unknown Planet';
  };

  return (
    <div>
      <h2>Your Booked Trips</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Planet</TableCell>
              <TableCell align="right">Departure Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {getPlanetName(booking.planet_id)}
                </TableCell>
                <TableCell align="right">{booking.departure_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BookingList;