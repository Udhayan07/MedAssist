import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MedAssist
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40', // Dark Green
    },
    secondary: {
      main: '#bdbdbd', // Light Gray
    },
    background: {
      default: '#303030', // Dark background for overall theme
    },
    text: {
      primary: '#ffffff', // White text
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default function SignUpDoc() {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    doctorid: '',
    password: '',
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email_id, doctor_id, password } = signupData;
    if (first_name && last_name && email_id && doctor_id && password) {
      try {
        await axios.post('http://localhost:8080/api/signup', signupData);
        alert('User Created');
        // next();
      } catch (error) {
        alert('Error creating user');
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(48, 48, 48, 0.9)', // Darker overlay for background
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Doctor Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleSignupChange}
                  InputLabelProps={{ style: { color: '#bdbdbd' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  onChange={handleSignupChange}
                  InputLabelProps={{ style: { color: '#bdbdbd' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email_id"
                  autoComplete="email"
                  onChange={handleSignupChange}
                  InputLabelProps={{ style: { color: '#bdbdbd' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="doctorid"
                  label="Doctor ID"
                  name="doctor_id"
                  autoComplete="doctorid"
                  onChange={handleSignupChange}
                  InputLabelProps={{ style: { color: '#bdbdbd' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleSignupChange}
                  InputLabelProps={{ style: { color: '#bdbdbd' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  sx={{ color: '#ffffff' }}
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSignupSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: 'secondary.main',
                '&:hover': { bgcolor: 'secondary.dark' },
                color: '#000000',
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/LoginDoctor" variant="body2" sx={{ color: '#bdbdbd' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
