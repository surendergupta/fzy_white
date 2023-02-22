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
            <Grid container rowSpacing={2}>
                <Grid item xs={6} md={3}>
                    <h4>Company</h4>
                    <ul>
                        <li><Link to={'/about'} >About</Link></li>
                        <li><Link to={'/feature'} >Feature</Link></li>
                        <li><Link to={'/product'} >Product</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h4>ICO Funding</h4>
                    <ul>
                        <li><Link to={'/roadmap'} >Roadmap</Link></li>
                        <li><Link to={'/token'} >Token</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h4>About</h4>
                    <p>The dynamics to preserve a fixed number of coins determine the distribution of the coins. In the purview of dynamics the circulation and consumption are determined too. The original value of the token supported by transactional values play an important role to determine the quantity of FZY coin release in the market.</p>
                </Grid>
            </Grid>
            <div className='footerDivider'></div>
            <Grid container rowSpacing={2}>
                <Grid item xs={12} md={6}>
                    <p className="copyright-txt">Copyright © 2021. All rights reserved by <a href="https://fizzyfycoin.com"> Fizzyfycoin.com </a>.</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <ul className='socialFooter'>
                        <li><Link to={'https://facebook.com/fizzyfycoin'}><FacebookIcon /></Link></li>
                        <li><Link to={'https://linkedin.com/fizzyfycoin'}><LinkedInIcon /></Link></li>
                        <li><Link to={'https://telegram.com/fizzyfycoin'}><TelegramIcon /></Link></li>
                        <li><Link to={'https://twitter.com/fizzyfycoin'}><TwitterIcon /></Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <ul className='socialFooter'>
                        <li><Link to={'/term-and-condition'}>Term & Condition</Link></li>
                        <li><Link to={'/privacy-policy'}>Privacy & Policy</Link></li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer;