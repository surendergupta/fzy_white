import React from 'react';
import './footer.scss';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContainer'>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={6}>
                    <h4>About</h4>
                    <p>The dynamics to preserve a fixed number of coins determine the distribution of the coins. In the purview of dynamics the circulation and consumption are determined too. The original value of the token supported by transactional values play an important role to determine the quantity of FZY coin release in the market.</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h4>Important Link</h4>
                    <ul>
                        <li><Link to={'/about'} >About</Link></li>
                        <li><Link to={'/contact'} >Contact</Link></li>
                        <li><Link to={'/term-and-condition'} target='_blank' rel="noreferrer">Term & Condition</Link></li>
                        <li><Link to={'/privacy-policy'} target='_blank' rel="noreferrer">Privacy & Policy</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h4>Social Links</h4>
                    <ul className='socialFooter'>
                        <li><Link to={'https://www.facebook.com/fzytoken'} target='_blank' rel="noreferrer"><FacebookIcon /></Link></li>
                        <li><Link to={'https://www.linkedin.com/in/fzy-token-b124b4267/'} target='_blank' rel="noreferrer"><LinkedInIcon /></Link></li>
                        <li><Link to={'/'} target='_blank' rel="noreferrer"><TelegramIcon /></Link></li>
                        <li><Link to={'https://twitter.com/FzyToken'} target='_blank' rel="noreferrer"><TwitterIcon /></Link></li>
                    </ul>
                </Grid>
                
            </Grid>
            <div className='footerDivider'>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12} md={12}>
                        <p className="text-center">Copyright © 2023 - 2024. All rights reserved by <a href="https://fizzyfycoin.com"> Fizzyfycoin.com </a>.</p>
                    </Grid>
                </Grid>
            </div>            
        </div>
    </div>
  )
}

export default Footer;