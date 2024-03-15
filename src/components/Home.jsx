import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import MiddleCon from './MiddleCon';
import "../Style/Slider.css";

import img1 from '../img/Slider1.png';
import img2 from '../img/Slider2.png';
import img3 from '../img/Slider3.png';



function Home() {
  return (
    <>


<Carousel>
      <Carousel.Item>
        <img src={img2} className='img-fluid' alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={img1}  className='img-fluid' alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3}  className='img-fluid' alt=''/>
        
      </Carousel.Item>
    </Carousel>
  <MiddleCon />

    
        </>
  )
}

export default Home