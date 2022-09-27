import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade } from "swiper";
import "swiper/css/effect-fade";
// Import Swiper styles
import 'swiper/css';

import styles from '../../styles/Hero.module.scss';

function Hero() {
  return (
    
    <div className={`${styles.Hero}`}>
      <Container fluid className={`${'g-0'}`}>
        <Row>
          <Col>
            <Swiper
              spaceBetween={0}
              effect={"fade"}
              modules={[EffectFade]}
            >
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?1" alt="img" />
                <div className={`${styles.Caption}`}>
                  <h3>

                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?2" alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?3" alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?4" alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?5" alt="img" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;