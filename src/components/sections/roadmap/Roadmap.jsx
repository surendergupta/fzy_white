import React from 'react';
import './roadmap.scss';
import Checkbox from '@mui/material/Checkbox';

const Roadmap = () => {
  return (
    <div className='roadmap' id='roadmap'>
        <div className='roadmapContainer'>
			<div className='rtop'>
				<h2>Roadmap</h2>
                <p>Learn all about FZY and get involved.</p>
                <div className='tabContainer'>
					<div className="roadmap-box">
						<div className='o-common-card'>
							<ul className='unicode-list'>
								<li><Checkbox defaultChecked />Website Launched</li>
								<li><Checkbox defaultChecked />Social Media Pages Launch</li>
								<li><Checkbox defaultChecked />Launch Token Website</li>
								<li><Checkbox defaultChecked />Whitepaper</li>
							</ul>
							<h5 className=""><span>December, 2022</span></h5>
						</div>
					</div>
					<div className="roadmap-box roadmap-right active">
						<div className='o-common-card'>
							<ul className='unicode-list'>
								<li><Checkbox defaultChecked />Audit</li>
								<li><Checkbox defaultChecked />Reward Dashboard</li>
								<li><Checkbox defaultChecked />Pre-sale on Dxsale</li>
								<li><Checkbox defaultChecked />Charity Partnership</li>
							</ul>
							<h5 className=""><span>January, 2023</span></h5>
						</div>
					</div>
					<div className="roadmap-box">
						<div className='o-common-card'>
							<ul className='unicode-list'>
								<li><Checkbox  />New Marketing Communication</li>
								<li><Checkbox  />Research &amp; Development</li>
							</ul>
							<h5 className=""><span>March, 2023</span></h5>
						</div>
					</div>
					<div className="roadmap-box roadmap-right active">
						<div className='o-common-card'>
							<ul className='unicode-list'>
								<li><Checkbox />Built Marketplace UI</li>
								<li><Checkbox />Large Influencer Marketing</li>
								<li><Checkbox />5000 Holders</li>
								<li><Checkbox />Social Media Pages Launch</li>
							</ul>
							<h5 className=""><span>July, 2023</span></h5>
						</div>
					</div>
					<div className="roadmap-box">
						<div className='o-common-card'>
							<ul className='unicode-list'>
								<li><Checkbox />Token Listing on Pancake swap</li>
								<li><Checkbox />Token Burn</li>
								<li><Checkbox />DexTools #1</li>
								<li><Checkbox />Coingecko</li>
								<li><Checkbox />Coinmarketcap</li>
							</ul>
							<h5 className=""><span>August, 2023</span></h5>
						</div>
					</div>
					<div className="roadmap-box roadmap-right active">
						<div className='o-common-card'>
							<ul className='unicode-list'>
								<li><Checkbox />D-Platform Open</li>
								<li><Checkbox />NFT Launch</li>
								<li><Checkbox />Android &amp; IOS App launch</li>
							</ul>
							<h5 className=""><span>December, 2023</span></h5>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
  )
}

export default Roadmap