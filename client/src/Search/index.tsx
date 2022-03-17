import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Search({ setSearchTerm, disabled }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <TextField
        disabled={disabled}
        id="search-message"
        label="Search Message"
        variant="outlined"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Box>
  );
}
