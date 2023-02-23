import React from 'react';
import './about.scss';
import Navbar from '../../components/navbar/Navbar';
import Subscription from '../../components/sections/subscription/Subscription';
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
                        <h1>Building the foundations for iGaming, Digital Content and Utility Token in web3</h1>
                        <p>FZY Token is used for building the largest iGaming, Digital content and utility token community and supporting players, curators, users, and operators to access alternative crypto revenue mechanism worldwide.</p>
                    </div>
                </div>
                <section className='ourmission'>
                    <Grid container spacing={12}>
                        <Grid item xs={12} md={6}>
                            <h2>Our mission</h2>
                            <p>A decentralized community-driven project.
Fizzyfy is focused on creating an ecosystem with true governance. An
enterprise-grade ecosystem with open-source developers and community
involvement powered by Blockchain.</p>
                            <p>Fizzyfy has a transparent mission and vision initially created by the founders
of the project. Our mission is to develop a community-based blockchain
project governed by the community and not led by an individual or a single
entity</p>
                            <p>Anyone is able to participate in the project and provide its open opinion or
proposal towards the project. We are all here to achieve our vision with our
mission.
</p>
                            <p>Our vision is to build an ecosystem that allows us to level with other DAO’s
and provide a blockchain platform that can be compared with projects such
as Binance, Solana and Ethereum.</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={myMission} className='iconmission' alt='FZY Token Misssion ' />
                        </Grid>
                    </Grid>
                </section>
                <section className='aboutTokenMission'>
                    <Grid container spacing={12} rowSpacing={3}>
                        <Grid item xs={12} md={12}>
                            <h2>The World's #1 Digital Content</h2>
                            <p>Helping to unlock greater economic opportunity and to tokenize<br /> value for users globally.</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <h3>Content Provider : </h3>
                                    <p>Content providers are the content creators who are legal owners of the
digital assets. They have the license to distribute and use the created
content. With an aim to earn revenue the content creator provides the
content to end users who pay tokens to avail the content.</p>
                                </div>
                            </div>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <h3>Service Provider : </h3>
                                    <p>Service provider can be same or at times different to service facilitator. They
both aim earn revenue in terms of Fizzyfy ( FZY ) tokens by the virtue of
services they offer to enable the Content reach the end-users.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <h3>Service Facilitator</h3>
                                    <p>Service facilitator puts at stake his tokens to support service providers network of operations. Service facilitator contributes by not only participating himself but also he can bring many others to join the Fizzyfy ( FZY ) ecosystem and generate revenue or rewards for themselves.</p>
                                </div>
                            </div>
                            <div className='boxItem'>
                                <div className='boxImg'>
                                    <img src={FZYICON} alt='logo' height='35' />
                                </div>
                                <div className='boxContent'>
                                    <h3>User + Curator</h3>
                                    <p>The end user or the consumer is one who actually infuses TOKENS into the ecosystem by buying the creative digital assets . The services of content provider and service facilitators are aimed to win a consumer</p>
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
                <Subscription />
                <Footer />
            </div>
        </div>
    )
  }
  
export default About;