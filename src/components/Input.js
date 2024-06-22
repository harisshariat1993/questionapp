// src/components/Input.js
import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      value={value}
      onChange={onChange}
      label="Your Question"
    />
  );
};

export default Input;
