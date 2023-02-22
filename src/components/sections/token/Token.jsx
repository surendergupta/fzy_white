import React from 'react';
import './token.scss';
import { Chart } from "react-google-charts";
export const data = [
    ["Task", "%"],
    ["Founder & Team", 10],
    ["Seed Sale", 1],
    ["Staking & Reward", 20],
    ["Private Sale", 1],
    ["Marketing", 5],
    ["Public Sale", 20],
    ["Developer", 2],
    ["Burning", 5],
    ["Airdrop", 5],
    ["Ecosystem Fund", 5],
    ["Advisor", 6],
    ["Listing", 15],
    ["Pre Sale", 5],
  ];

  export const options = {
    backgroundColor: 'transparent',
    is3D:true
  };

const Token = () => {
  return (
    <div className='token' id='token'>
        <div className='tokenContainer'>
            <div className='aboutToken'>
                <div className="purchase-number">
                    <span>$110 Million</span>
                    <h2>People from all around the world have purchased our tokens.</h2>
                    <p>The dynamics to preserve a fixed number of coins determine the distribution of the coins.<br /> In the purview of dynamics the circulation and consumption are determined too.</p>
                </div>
            </div>

            <div className='tokeninfo'>
                <div className='left'>
                    <h2>Token Distribution</h2>
                    <h3>Total Token Issued : 110,000,000</h3>
                    <div className='two-column'>
                        <div className='left-column'>Founder & Team: 10%</div>
                        <div className='right-column'>Seed Sale : 1%</div>
                    </div>
                    <div className='two-column'>
                        <div className='left-column'>Staking & Reward: 20%</div>
                        <div className='right-column'>Private Sale: 1%</div>
                    </div>
                    <div className='two-column'>
                        <div className='left-column'>Marketing: 5%</div>
                        <div className='right-column'>Public Sale: 20%</div>
                    </div>
                    <div className='two-column'>
                        <div className='left-column'>Developer : 2%</div>
                        <div className='right-column'>Burning : 5%</div>
                    </div>
                    <div className='two-column'>
                        <div className='left-column'>Airdrop: 5%</div>
                        <div className='right-column'>Ecosystem Fund: 5%</div>
                    </div>
                    <div className='two-column'>
                        <div className='left-column'>Advisor: 6%</div>
                        <div className='right-column'>Listing: 15%</div>
                    </div>
                    <div className='two-column'>
                        <div className='left-column'>Pre Sale: 5%</div>
                    </div>
                </div>
                <div className='tokenChart'>
                    <h2>Token Distribution Chart</h2>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Token;