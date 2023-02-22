import React, { useState } from 'react';
import './benefit.scss';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
const Benefit = () => {
    const [tabValue, setTabValue] = useState(0);
  return (
    <div className='benefit' id='feature'>
        <div className='benefitContainer'>
            <div className='btop'>
                <h2>Benefits of Using Our Solution</h2>
                <p>FZY is a fashion and family DeFi token, aimed at convinience and rewards for the community. Starting with 990 billion tokens, the founders have planned strategic reward systems, reflection distribution, and burning of coins for long term stability and benefit of holders.</p>
                <div className='tabContainer'>
                    <div className='navtab'>
                        <ul>
                            <li className={ tabValue === 0 ? `active` : ``} onClick={() => setTabValue(0) }>BUSINESS</li>
                            <li className={ tabValue === 1 ? `active` : ``} onClick={() => setTabValue(1) }>FZY COIN</li>
                        </ul>
                    </div>                    
                    <div className='businessContent'>
                        <div className={ tabValue === 0 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <ShieldOutlinedIcon />
                                <p className='hoverContent'>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
                            </div>
                            <div className='footer'>COMPLIANCE</div>
                        </div>
                        <div className={ tabValue === 0 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <PaidOutlinedIcon />
                                <p className='hoverContent'>Service facilitator puts at stake his tokens to support service providers network of operations. Service facilitator contributes by not only participating himself but also he can bring many others to join the TRENDZ ecosystem and generate revenue or rewards for themselves.</p>
                            </div>
                            <div className='footer'>TRANSPARENCY</div>
                        </div>
                        <div className={ tabValue === 0 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <Diversity2OutlinedIcon />
                                <p className='hoverContent'>The narrow management policies have no place in the TRENDZ ecosystem. The decision of the masses will be final and binding. The decision process will be conducted transparently by a robust system of collecting reviews and feedbacks of the voting participants.</p>
                            </div>                            
                            <div className='footer'>SMART MANAGEMENT</div>
                        </div>
                        <div className={ tabValue === 0 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <LinkOutlinedIcon />
                                <p className='hoverContent'>The end user or the consumer is one who actually infuses TOKENS into the ecosystem by buying the creative digital assets . The services of content provider and service facilitators are aimed to win a consumer.</p>
                            </div>
                            <div className='footer'>CONVENIENCE</div>
                        </div>
                        {/* FZY COIN  */}
                        <div className={ tabValue === 1 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <LinkOutlinedIcon />
                                <p className='hoverContent'>Content providers are the content creators who are legal owners of the digital assets. They have the license to distribute and use the created content. With an aim to earn revenue the content creator provides the content to end users who pay tokens to avail the content.</p>
                            </div>
                            <div className='footer'>STRATEGY</div>
                        </div>
                        <div className={ tabValue === 1 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <GridViewOutlinedIcon />
                                <p className='hoverContent'>Service facilitator puts at stake his tokens to support service providers network of operations. Service facilitator contributes by not only participating himself but also he can bring many others to join the TRENDZ ecosystem and generate revenue or rewards for themselves.</p>
                            </div>
                            <div className='footer'>BLOCKCHAIN BASED</div>
                        </div>
                        <div className={ tabValue === 1 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <QueryBuilderIcon />
                                <p className='hoverContent'>The narrow management policies have no place in the TRENDZ ecosystem. The decision of the masses will be final and binding. The decision process will be conducted transparently by a robust system of collecting reviews and feedbacks of the voting participants.</p>
                            </div>                            
                            <div className='footer'>REAL-TIME UPDATE</div>
                        </div>
                        <div className={ tabValue === 1 ? `box active` : `box`}>
                            <div className='boxContent'>
                                <LinkOutlinedIcon />
                                <p className='hoverContent'>The end user or the consumer is one who actually infuses TOKENS into the ecosystem by buying the creative digital assets . The services of content provider and service facilitators are aimed to win a consumer.</p>
                            </div>
                            <div className='footer'>SMART CONTRACT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit;