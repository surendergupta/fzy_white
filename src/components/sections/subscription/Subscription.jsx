import React from 'react';
import './subscription.scss';
import { Button, Grid } from '@mui/material';

const Subscription = () => {
  return (
    <div className='subscription'>
        <div className='subscriptionContainer'>            
			<Grid container alignItems='center'>
				<Grid item xs={12} md={3}>
					<h2>Newsletter</h2>
					<p>Sign Up for FZY campaign updates.</p>
				</Grid>
				<Grid item xs={12} md={9}>
					<form className='formSub'>
						<Grid container  >
							<Grid item xs={12} md={4}>
								<input type='text' placeholder='Full Name' />
							</Grid>
							<Grid item xs={12} md={4}>
								<input type='text' placeholder='Email Address' />
							</Grid>
							<Grid item xs={12} md={4}>
								<Button variant='contained' color='info'>Subscribe</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
        </div>
    </div>
  )
}

export default Subscription;