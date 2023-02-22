import React from 'react';
import './contact.scss';
import Iframe from 'react-iframe';
// import GoogleMapReact from 'google-map-react';
import Navbar from '../../components/navbar/Navbar';

import Footer from '../../components/sections/footer/Footer';
import { Button, Grid } from '@mui/material';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
  return (
        <div className='contactpage'>
            <div className='contactpageConatiner'>
                <Navbar />
                <div className='contactTop'>
                    <div className='contactTopContent'>
                        <h1>Building the foundations for iGaming in web3</h1>
                        <p>Building the largest iGaming community and enabling players and operators to access alternative crypto revenue streams worldwide.</p>                        
                    </div>
                </div>
                <section className='userContact'>
                    <Grid container spacing={12}>
                        <Grid item xs={12} md={6}>
                            <h2>Contact Us</h2>
                            <form className='formContact'>
                                <input type={'text'} placeholder='Your Name' autoComplete='off' />
                                <input type={'email'} placeholder='Your email' autoComplete='off' />
                                <input type={'text'} placeholder='Your Mobile Number' autoComplete='off' />
                                <textarea rows={4} placeholder='Your message here...'  autoComplete='off' ></textarea>
                                <Button variant='contained' color='primary' fullWidth={true} >Submit</Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* <div style={{ height: '100vh', width: '100%' }}>
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                                >
                                   <AnyReactComponent
                                   lat={59.955413}
                                   lng={30.337844}
                                   text="My Marker"
                                   />
                                </GoogleMapReact>
                            </div> */}
                            <Iframe 
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.876237622715!2d77.36999217116258!3d28.585702011116325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7d7a0aed2f%3A0xc08e66a08281036!2sSector%2072%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1677069798661!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                id=""
                                className=""
                                display="block"
                                position="relative"
                            />
                        </Grid>
                    </Grid>
                </section>
                <Footer />
            </div>
        </div>
    
  )
}

export default Contact;