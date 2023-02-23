import React from 'react';
import './contact.scss';
import Navbar from '../../components/navbar/Navbar';
import Subscription from '../../components/sections/subscription/Subscription';
import Footer from '../../components/sections/footer/Footer';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {FaLinkedinIn, FaFacebookF, FaTelegramPlane, FaTwitter} from 'react-icons/fa';


const Contact = () => {
  return (
        <div className='contactpage'>
            <div className='contactpageConatiner'>
                <Navbar />
                <div className='contactTop'>
                    <div className='contactTopContent'>
                        <h1>Contact Us</h1>
                        <p>The easiest way to get in touch is to fill out the form below.</p>
                    </div>
                </div>
                <section className='userContact'>
                    <Grid container spacing={12}>
                        <Grid item xs={12} md={4}>
                            <div className='contactSocial'>
                                <h4>Follow us …</h4>
                                <div className='icons'>
                                    <Link to='https://www.facebook.com/fzytoken' target='_blank' rel="noreferrer"><FaFacebookF className='icon' /></Link>
                                    <Link to='https://www.linkedin.com/in/fzy-token-b124b4267/' target='_blank' rel="noreferrer"><FaLinkedinIn className='icon' /></Link>
                                    <Link to='' target='_blank' rel="noreferrer"><FaTelegramPlane className='icon' /></Link>
                                    <Link to='https://twitter.com/FzyToken' target='_blank' rel="noreferrer"><FaTwitter className='icon' /></Link>
                                </div>

                                <h4>Contact Info</h4>
                                <p>Email: <span>support@fizzyfycoin.com</span></p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <form className='formContact'>
                                <input type={'text'} placeholder='Your Name' autoComplete='off' />
                                <input type={'email'} placeholder='Your email' autoComplete='off' />
                                <input type={'text'} placeholder='Your Mobile Number' autoComplete='off' />
                                <textarea rows={4} placeholder='Your message here...'  autoComplete='off' ></textarea>
                                <Button variant='contained' color='primary' fullWidth={true} >Submit</Button>
                            </form>
                        </Grid>
                    </Grid>
                </section>
                <Subscription />
                <Footer />
            </div>
        </div>
    
  )
}

export default Contact;