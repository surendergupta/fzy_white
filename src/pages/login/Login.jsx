import './login.scss';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import MyRegImage from '../../assets/images/hometop.jpg'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ip,setIP] = useState('');
  const [emailAddress, setEmailAddress] = useState(''); 
  const [userPassword, setUserPassword] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
    <div className='login'>
      <div className='loginContainer'>
        <div className='loginImage'>
          <img src={MyRegImage} alt='fzy' />
        </div>
        <div className='loginForm'>          
          <form className=''>
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
              <FormControlLabel sx={{ ml: '0' }} control={<Checkbox  />} label="Remember Me" />
            </FormGroup>
            <FormGroup>
              <Button variant='contained' color='primary' fullWidth>Login</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;