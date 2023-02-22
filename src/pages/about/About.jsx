import React from 'react';
import './about.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/sections/footer/Footer';
import { Grid } from '@mui/material';

import myMission from '../../assets/images/about/img-my-mission.jpg';
import FZYICON from '../../assets/icons/fzy.png';
import USERICON from '../../assets/images/avatar4.png';
const About = () => {
    return (
        <div className='aboutpage'>
            <div className='aboutpageConatiner'>
                <Navbar />
                <div className='aboutTop'>
                    <div className='aboutTopContent'>
                        <h1>Building the foundations for iGaming in web3</h1>
                        <p>Building the largest iGaming community and enabling players and operators to access alternative crypto revenue streams worldwide.</p>                        
                    </div>
                </div>
                <section className='ourmission'>
                    <Grid container spacing={12}>
                        <Grid item xs={12} md={6}>
                            <h2>Our mission</h2>
                            <h4>To build breakthrough crypto iGaming solutions for the global gaming community.</h4>
                            <p>Through blockchain technology, FZYToken enables gaming operators, players, and developers transparency, provably fair gaming, and seamless integration to the world's leading crypto iGaming solutions, helping to unlock greater economic opportunity and to tokenize value for users globally.</p>
                            <p>FZYToken's XFZY token on the Polygon blockchain is more performant and less expensive than Ethereum. This new technology allows for efficient on-chain transactions with zero cost and low latency.</p>
                            <p>FZYToken is actively working with major operators to increase content for its users. Access to the substantial FZYToken community coupled with a fast and efficient token positions FZY/XFZY as the premium gaming token.</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={myMission} alt='FZY Token Misssion ' />
                        </Grid>
                    </Grid>
                </section>
                <section className='aboutTokenMission'>
                    <Grid container spacing={12} rowSpacing={3}>
                        <Grid item xs={12} md={12}>
                            <h2>The World's #1 Gaming token</h2>
                            <p>Helping to unlock greater economic opportunity and to tokenize<br /> value for users globally.</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <p>Building breakthrough crypto gaming solutions for the global gaming community.</p>
                                </div>
                            </div>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <p>A small and decentralized team, all with a passion to build the best solutions in the Crypto and gaming space. We strive to keep our team lean and highly skilled so we can build sustainable and scalable technology.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <p>FZYToken is delivering transformative solutions in 100+ countries.</p>
                                </div>
                            </div>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <p>Through blockchain technology, FZYToken enables gaming operators, players, and developers transparency, provably fair gaming, and seamless integration to the world's leading crypto gaming solutions.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section className='aboutOurTeam'>
                    <Grid container spacing={12} rowSpacing={3}>
                        <Grid item xs={12} md={12}>
                            <h2>Our Team</h2>
                            <h6>The FZYToken Team</h6>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='teamBox'>
                                <img src={USERICON} alt='user' />
                                <h2>Sunil Kumar Singh</h2>
                                <h4>Founder</h4>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='teamBox'>
                                <img src={USERICON} alt='user' />
                                <h2>Sanjeev Kumar Singh</h2>
                                <h4>CO-FOUNDER</h4>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='teamBox'>
                                <img src={USERICON} alt='user' />
                                <h2>Dheeraj Singh</h2>
                                <h4>CO-FOUNDER</h4>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='teamBox'>
                                <img src={USERICON} alt='user' />
                                <h2>Surender Gupta</h2>
                                <h4>DEVELOPER</h4>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <Footer />
            </div>
        </div>
    )
  }
  
export default About;