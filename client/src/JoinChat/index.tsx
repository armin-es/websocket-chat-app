import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export function JoinChat({ setUserName }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <Stack spacing={2} direction="row">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>Enter name to join chat</CardContent>
        <CardActions style={{ height: '10em' }}>
          <TextField
            id="name-input"
            label="Name"
            variant="outlined"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (inputValue) {
                setUserName(inputValue);
                sessionStorage.setItem('userName', inputValue);
              }
            }}>
            Enter
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
