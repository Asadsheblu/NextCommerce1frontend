import React from 'react';
import banner1 from "../../public/banner1.jpg"
import banner2 from "../../public/banner2.jpg"
import banner3 from "../../public/banner3.jpg"
import banner4 from "../../public/banner5.jpg"
import fashion from "../../public/fashion.png"
import Image from 'next/image'
import Countdown from 'react-countdown';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
   
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-8'>
            <Slider {...settings}>
      <div>
        <Image className='img-fluid' alt='banner' src={banner1}/>
      </div>
      <div>
      <Image className='img-fluid' alt='banner' src={banner2}/>
      </div>
      <div>
      <Image className='img-fluid' alt='banner' src={banner3}/>
      </div>
      <div>
      <Image className='img-fluid' alt='banner' src={banner4}/>
      </div>
     
    </Slider>
            </div>
            <div className='col-md-4 pt-4'>
            <div className='shadow bg-light rounded p-3'>
                <p className='text-center'>Upcoming Campaigns</p>
                <div className='d-flex rounded p-3 bg-white shadow'>
                <Image className='w-50 h-50' alt='banner' src={fashion}/>
                <Countdown
    date={Date.now() + 100000000}
    intervalDelay={0}
    precision={3}
   
  />,
                </div>
            </div>
            </div>
            </div>
         
        </div>
    );
};

export default Banner;