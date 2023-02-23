import React from 'react';
import './top.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import homeTop from '../../../assets/images/hometop.jpg';


const Top = () => {
	
  return (
    <div className='top'>
        <div className='topContainer'>
            <div className='left'>
				<h2>Let 's Change The Way <br />The World Sees Crypto</h2>
				<p>Fzy will be a center of all activities that can be conducted in digital assets domain. Be it online gaming, sale/purchase in metaverse, cryptocurrency exchange and so on. Fzy aims to continue its foray into vast expanse of digital world.</p>
				<Link to=''>
					<Button variant='contained'>White Paper</Button>
				</Link>
			</div>

            <div className='right'>
				<div className='rightBox'>
					<img src={homeTop} className='topImage' alt='top ' />
				</div>				
			</div>
        </div>
    </div>
  )
}

export default Top;