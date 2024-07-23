// CheckinPage.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkin.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const CheckinPage = () => {
  const [ticketNumber, setTicketNumber] = useState('');

  const handleInputChange = (event) => {
    setTicketNumber(event.target.value);
  };

  const handleCheckIn = () => {
    // Simulate an asynchronous call to check the flight ticket number
    setTimeout(() => {
      if (ticketNumber === '123456') {
        toast.success('Check-in successful!');
      } else {
        toast.error('Unable to check-in. Please verify your flight ticket number.');
      }
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <ToastContainer />
      <h1>Check-in Online</h1>
      <TextField
        variant="outlined"
        label="Flight Ticket Number"
        value={ticketNumber}
        onChange={handleInputChange}
        fullWidth
        className="checkin-textfield" // Apply the CSS class to the text field
        margin="normal"
      />
      <Button variant="contained" onClick={handleCheckIn} sx={{ marginTop: '15px' }}>
        Check In
      </Button>
    </Box>
  );
}

export default CheckinPage;
