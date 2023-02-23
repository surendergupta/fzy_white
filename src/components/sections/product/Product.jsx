import React, { useState } from 'react'
import './product.scss';
import image1 from '../../../assets/images/products/1.png';
import image2 from '../../../assets/images/products/2.png';
import image3 from '../../../assets/images/products/3.png';
const Product = () => {
	const [productState, setProductState] = useState(0)
	return (
		<div className='product' id='product'>
			<div className='productConatiner'>
				<div className='ptop'>
					<h2>Product Details</h2>
					<p>Our Premium Services.</p>
					<div className='tabContainer'>
						<div className='navtab'>
							<ul>
								<li className={ productState === 0 ? `active` : ``} onClick={()=>setProductState(0)}>BUSINESS</li>
								<li className={ productState === 1 ? `active` : ``} onClick={()=>setProductState(1)}>GAMING</li>
								<li className={ productState === 2 ? `active` : ``} onClick={()=>setProductState(2)}>STAKING</li>
								<li className={ productState === 3 ? `active` : ``} onClick={()=>setProductState(3)}>SWAPPING</li>
								<li className={ productState === 4 ? `active` : ``} onClick={()=>setProductState(4)}>UTILITY</li>
							</ul>
						</div>
						<div className='businessContent'>
							<div className={ productState === 0 ? `box active` : `box`}>
								<div className='boximg'>
									<img src={image1} alt='logo' />
								</div>
								<div className='boxContent left-image'>
									<h3>FZY Business</h3>
									<p>The dynamics to preserve a fixed number of coins determine the distribution
of the coins. In the purview of dynamics the circulation and consumption are
determined too. The original value of the token supported by transactional
values play an important role to determine the quantity of Fizzyfy ( FZY ) coin
release in the market.
</p>
									<p>The token dynamics have four major factors:</p>
									<ol>
										<li>The content providers or creators</li>
										<li>The service providers who route the content to end users via their high end devices</li>
										<li>Facilitators who put their stakes to facilitate the platform to deliver</li>
										<li>The end users who ultimately transact in token s to avail the services of content provider</li>
									</ol>
									<p>All the four factors are able to earn their compensation or pay usage fees in terms of token transacted</p>									
								</div>
							</div>

							<div className={ productState === 1 ? `box active` : `box`}>								
								<div className='boxContent right-image'>
									<h3>Gamming <br />Multiply Token &amp; Betting Sports</h3>
									<p>You can play game and multiply FZY token. After listing token will be exchage to other crypto coin or withdrawal to your wallet.</p>
                      				<p>You can also bet on currently playing sports game and earn FZY. These game has purely mind game and play reponsibly </p>
								</div>
								<div className='boximg'>
									<img src={image2} alt='logo' />
								</div>
							</div>

							<div className={ productState === 2 ? `box active` : `box`}>
								<div className='boximg'>
									<img src={image3} alt='logo' />
								</div>
								<div className='boxContent left-image'>
									<h3>Staking</h3>
									<p>All you need to do is maintain a balance of at least 10 FZY @ 3% - 300% APY in your fizzyfycoin.com account and we shall pay you compounded interest on your full balance everyday. There is no lock-in period to earn interest (you start earning interest right from the first day!) and your balance can be withdrawn any time you wish. Treat your fizzyfycoin.com account like an instant-access savings account to hold your excess FZY Coins and earn passive interest on your account balance everyday.</p>
                      				
								</div>
							</div>

							<div className={ productState === 3 ? `box active` : `box`}>
								<div className='boxContent right-image'>
									<h3>Swapping</h3>
									<p>Swap is fizzyfycoin.com’s in-wallet crypto-to-crypto exchange. Swap allows users to easily exchange one cryptocurrency for another without leaving their fizzyfycoin.com Wallet.</p>
									<p>There are many great reasons our Wallet users love using Swap:</p>
									<ul className="common-list">
										<li>Quickly swap into an asset you believe will grow</li>
										<li>Move out of a volatile asset into one of our stablecoins</li>
										<li>Hedge against real world events.</li>
									</ul>
								</div>
								<div className='boximg'>
									<img src={image1} alt='logo' />
								</div>
							</div>

							<div className={ productState === 4 ? `box active` : `box`}>
								<div className='boximg'>
									<img src={image2} alt='logo' />
								</div>
								<div className='boxContent left-image'>
									<h3>Utility</h3>
									<p>Utility tokens are used to provide services within a network. For example, they might be used to purchase services, pay network fees, or redeem rewards. Unlike security tokens, utility tokens do not pay out dividends or part with an ownership stake. FZY, which is used to purchase storage space on a network, is an example of a utility token.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;