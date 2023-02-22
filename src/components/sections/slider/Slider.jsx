import React from 'react';
import './slider.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import client1 from '../../../assets/images/clients-slider/1.png';
import client2 from '../../../assets/images/clients-slider/2.png';
import client3 from '../../../assets/images/clients-slider/3.png';
import client4 from '../../../assets/images/clients-slider/4.png';
import client5 from '../../../assets/images/clients-slider/5.png';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
          }
      };
  return (
    <div className='slider'>
        <div className='sliderContainer'>
            <div className='brandslider'>
                <Carousel 
                    arrows={false}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    ssr={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    responsive={responsive}
                    customTransition="all .5 ease-in"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    rtl={false}
                    >
                        <div><img src={client1} alt='client 1' /></div>
                        <div><img src={client2} alt='client 2' /></div>
                        <div><img src={client3} alt='client 3' /></div>
                        <div><img src={client4} alt='client 4' /></div>
                        <div><img src={client5} alt='client 5' /></div>
                    </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Slider;