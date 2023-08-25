import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Paper, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const StyledRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: (theme) => theme.palette.background.default,
});

const StyledPaper = styled(Paper)({
  padding: (theme) => theme.spacing(3),
  width: 400,
});

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    meal: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);
  
    } catch (error) {
      console.error(error);
  
    
    }
  };

  return (
    <StyledRoot>
      <StyledPaper elevation={3}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Meal</InputLabel>
                <Select name="meal" value={formData.meal} onChange={handleInputChange}>
                  <MenuItem value="snacks">Snacks</MenuItem>
                  <MenuItem value="dinner">Dinner</MenuItem>
                  <MenuItem value="lunch">Lunch</MenuItem>
                  <MenuItem value="breakfast">Breakfast</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </StyledPaper>
    </StyledRoot>
  );
};

export default Home;
