import React from 'react'
import './about.scss';

import aboutMe from '../../../assets/images/about/video-img.jpeg';
const About = () => {
  return (
    <div className='about'>
        <div className='aboutContainer'>
			<div className='left'>
				<h3>About Us</h3>
				<p>'FZY' tends to provide a robust and transparent environment to bring the creative people and their patrons closer. FZY would inculcate a trend where content availability and its distribution will be perceivable by all and sundry. The creators of the digital assets will be duly credited and appreciated in true sense by the public who enjoys the creative products. FZY will be a center of all activities that can be conducted in digital assets domain. Be it online gaming, sale/purchase in metaverse, cryptocurrency exchange and so on. FZY aims to continue its foray into vast expanse of digital world.</p>
				<ul>
					<li>Fair policy for content access.</li>
					<li>Fair pricing for digital assets.</li>
					<li>Spread awareness of upcoming technologies like Metaverse.</li>
					<li>End the domination of few.</li>
				</ul>
			</div>
			<div className='right'>
				<img src={aboutMe} alt='About Me' />
			</div>
        </div>
    </div>
  )
}

export default About