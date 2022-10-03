import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/effect-fade";
// Import Swiper styles
import 'swiper/css';

import styles from '../../styles/layout/Hero.module.scss';





const Hero = () => {

  const photos = [
    {
      url: '/images/architecture-3121009_1920.jpg'
    },
    {
      url: '/images/audience-1850119_1920.jpg'
    },
    {
      url: '/images/aurora-1185464_1920.jpg'
    },
    {
      url: '/images/beach-666122_1920.jpg'
    },
    {
      url: '/images/beach-1852945_1920.jpg'
    },
    {
      url: '/images/berchtesgaden-2928712_1920.jpg'
    },
    {
      url: '/images/concert-6187717_1920.jpg'
    },
    {
      url: '/images/desert-3217765_1920.jpg'
    },
    {
      url: '/images/eiffel-tower-3349075_1920.jpg'
    },
    {
      url: '/images/george-washington-bridge-2098351_1920.jpg'
    }, 
    {
      url: '/images/hd-wallpaper-441853_1920.jpg'
    },
    {
      url: '/images/maldives-1993704_1920.jpg'
    }, 
    {
      url: '/images/mountain-2143877_1920.jpg'
    },
    {
      url: '/images/palace-530055_1920.jpg'
    },
    {
      url: '/images/portugal-3029665_1920.jpg'
    },
    {
      url: '/images/rocks-1757593_1920.jpg'
    }
  ];


  return (
    
    <div className={`${styles.Hero}`}>
      
      <div className={`${styles.Logo} ${'position-absolute'}`}>
        <Image src='/logo.png' alt="logo-image" width='200' height='200' />
      </div>
    
      <div className={`${styles.motto} ${'position-absolute'}`}>
        <h5>
          Not all those <br />
          who wander <br />
          are 404
        </h5>
      </div>
    
    <Swiper
      spaceBetween={0}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
    >
    {
      photos.map( ( item, index, array ) => <SwiperSlide key={index}>
        
        <Image src={item.url} alt="slider-images" layout='fill'/>

        <div className={`${styles.Caption}`}>

          <h2>
            Create <br />
            <small>Your</small> <br />
            J<span className={`${styles.azure}`}>o</span>u<span className={`${styles.orange}`}>r</span>n<span className={`${styles.green}`}>e</span>y
          </h2>

        </div>

      </SwiperSlide>
        
      )
    }

    </Swiper>
          
    </div>
  );
}

export default Hero;