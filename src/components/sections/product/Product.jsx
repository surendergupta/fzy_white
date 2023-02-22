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
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
								</div>
							</div>

							<div className={ productState === 1 ? `box active` : `box`}>								
								<div className='boxContent right-image'>
									<h3>FZY Gaming</h3>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
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
									<h3>FZY Staking</h3>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
								</div>
							</div>

							<div className={ productState === 3 ? `box active` : `box`}>
								<div className='boxContent right-image'>
									<h3>FZY Swapping</h3>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
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
									<h3>FZY Utility</h3>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
									<p>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
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