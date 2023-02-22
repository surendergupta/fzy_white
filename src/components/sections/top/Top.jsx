import React from 'react';
import './top.scss';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardActions, Divider, Slider } from '@mui/material';

function valueLabelFormat(value) {
	const units = '%';
	let max = 5500000;

	let scaledValue = ((value / max) * 100).toFixed(2);
	
	return `${scaledValue}${units} `;
}
function calculateValue(value) {
	return value;
}

const Top = () => {
	const [value, setValue] = React.useState(10);
	const maxCoin = 5500000;
	const handleChange = (event, newValue) => {
		if (typeof newValue === 'number') {
		  setValue(newValue);
		}
	};
  return (
    <div className='top'>
        <div className='topContainer'>
            <div className='left'>
				<h2>Presale Launching for Fizzyfy Coin.</h2>
				<p>Fzy will be a center of all activities that can be conducted in digital assets domain. Be it online gaming, sale/purchase in metaverse, cryptocurrency exchange and so on. Fzy aims to continue its foray into vast expanse of digital world.</p>
				<Link to=''>
					<Button variant='contained'>White Paper</Button>
				</Link>
			</div>

            <div className='right'>
				<div className='rightBox'>
					<Card sx={{ maxWidth: 300 }}>
							<CardContent>
								<h3>First Round Presale Ends In</h3>
								<Divider />

								<Slider 
									value={value}
									min={1}
									step={1}
									max={maxCoin}
									scale={calculateValue}
									getAriaValueText={valueLabelFormat}
									valueLabelFormat={valueLabelFormat}
									onChange={handleChange}
									aria-labelledby="non-linear-slider"
								/>
								<p id='non-linear-slider'>
								{valueLabelFormat(calculateValue(value))} pledged of ${maxCoin} goal</p>
							</CardContent>
							
							<CardActions>
								<Button fullWidth={true} variant='contained' color='info' size="small">Learn More</Button>
							</CardActions>
						</Card>	
				</div>				
			</div>
        </div>
    </div>
  )
}

export default Top;