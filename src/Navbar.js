import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#333', 
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledTitle = styled(Typography)({
  flexGrow: 0,
});

const StyledLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StyledButton = styled(Button)({
  marginLeft: '16px', 
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTitle variant="h6">Food Blogger</StyledTitle>
        <StyledLinks>
          <StyledButton color="inherit">Home</StyledButton>
          <StyledButton color="inherit">Food</StyledButton>
          <StyledButton color="inherit">Login</StyledButton>
        </StyledLinks>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
