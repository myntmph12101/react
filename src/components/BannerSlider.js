import React from "react";
import Slider from "react-slick";
// import '../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className=' h-[410px]'
          src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic_large-desktop_slides/public/slide-images/carousel_ave_sustainability_banner_2800x854_1.jpg?timestamp=1597405015'
          alt=''
        />
      </div>
      <div>
        <img
          className=' h-[410px]'
          src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic_large-desktop_slides/public/slide-images/accelerator_carousel.jpg?timestamp=1607472339'
          alt=''
        />
      </div>
      <div>
        <img
          className=' h-[410px]'
          src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic_large-desktop_slides/public/slide-images/baby_landing_update_v3.jpg?timestamp=1609859841'
          alt=''
        />
      </div>
      <div>
        <img
          className=' h-[410px]'
          src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic_large-desktop_slides/public/slide-images/calmrestorecarousel.jpg?timestamp=1600347995'
          alt=''
        />
      </div>
    </Slider>
  );
};
export default BannerSlider;
