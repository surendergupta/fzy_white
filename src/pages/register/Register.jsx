import './register.scss';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import MyRegImage from '../../assets/images/hometop.jpg'
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [ip,setIP] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState(''); 
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPass, setUserConfirmPass] = useState('');
  const [referUser, setReferUser] = useState(''); 

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getData = async()=>{
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4)
  }
  useEffect(() => {
    getData();
  }, [ip]);
  return (
    <div className='register'>
      <div className='registerContainer'>
        <div className='registerImage'>
          <img src={MyRegImage} alt='fzy' />
        </div>
        <div className='registerForm'>
          <form className=''>
            <FormGroup>            
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-first-name">First Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-first-name"
                  inputProps={{ inputMode: 'text', pattern: '[0-9]*' }}
                  startAdornment={<InputAdornment position="start"><PersonIcon /></InputAdornment>}
                  label="First Name"
                  size="small"
                  value={firstName}
                  onChange={(e) => {setFirstName(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>           
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-last-name">Last Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-last-name"
                  startAdornment={<InputAdornment position="start"><PersonIcon /></InputAdornment>}
                  label="Last Name"
                  size="small"
                  value={lastName}
                  onChange={(e) => {setLastName(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>            
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-email-address">Email Address</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-address"
                  startAdornment={<InputAdornment position="start"><EmailIcon /></InputAdornment>}
                  label="Email Address"
                  size="small"
                  value={emailAddress}
                  onChange={(e) => {setEmailAddress(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-mobile-number">Mobile Number</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-mobile-number"
                  startAdornment={<InputAdornment position="start"><SmartphoneIcon /></InputAdornment>}
                  label="Mobile Number"
                  size="small"
                  value={mobileNumber}
                  onChange={(e) => {setMobileNumber(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  size="small"
                  value={userPassword}
                  onChange={(e) => {setUserPassword(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password"
                  startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  size="small"
                  value={userConfirmPass}
                  onChange={(e) => {setUserConfirmPass(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-refer-code">Refer Code</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-refer-code"
                  startAdornment={<InputAdornment position="start"><PersonIcon /></InputAdornment>}
                  label="Refer Code"
                  size="small"
                  value={referUser}
                  onChange={(e) => {setReferUser(e.target.value)}}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControlLabel sx={{ ml: '0' }} control={<Checkbox  />} label="I have read and understood the Terms and Privacy Policy" />
            </FormGroup>
            <FormGroup>
              <Button variant='contained' color='primary' fullWidth>Register</Button>
            </FormGroup>
          </form>
          <div className='otherButton'>
            <NavLink to={'/login'}>
              <Button className='mybtn' variant='contained' color='warning' fullWidth>Login</Button>              
            </NavLink>
          </div>
        </div>
        
      </div>
    </div>

  )
}

export default Register;