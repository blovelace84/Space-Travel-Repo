// frontend/src/components/BookingList.js

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { supabase } from '../supabaseClient';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase.from('bookings').select('*');
        if (error) {
          throw error;
        }
        setBookings(data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    };

    const fetchPlanets = async () => {
      try {
        const { data, error } = await supabase.from('planets').select('id, name');
        if (error) {
          throw error;
        }
        setPlanets(data);
      } catch (err) {
        console.error('Error fetching planets:', err);
      }
    };

    fetchBookings();
    fetchPlanets();

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