import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/effect-fade";
// Import Swiper styles
import 'swiper/css';

import styles from '../../styles/layout/Hero.module.scss';

function Hero() {
  return (
    
    <div className={`${styles.Hero}`}>
      <Container fluid className={`${'g-0'}`}>
        <Row>
          <Col>
            <Swiper
              spaceBetween={0}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
            >
              <SwiperSlide>
                {/* <Image src="https://picsum.photos/1920/600?1" alt="img" layout="fill" width="100%" height="100%"/> */}
                <img src="https://picsum.photos/1920/600?2" alt="img" />
                <div className={`${styles.Caption}`}>
                  <h2 className={`${'text-uppercase'}`}>
                    Create <br />
                    Your <br />
                    J<span className={`${styles.azure}`}>o</span>u<span className={`${styles.orange}`}>r</span>n<span className={`${styles.green}`}>e</span>y
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?2" alt="img" />
                <div className={`${styles.Caption}`}>
                  <h2 className={`${'text-uppercase'}`}>
                    Create <br />
                    Your <br />
                    J<span className={`${styles.azure}`}>o</span>u<span className={`${styles.orange}`}>r</span>n<span className={`${styles.green}`}>e</span>y
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?3" alt="img" />
                <div className={`${styles.Caption}`}>
                  <h2 className={`${'text-uppercase'}`}>
                    Create <br />
                    Your <br />
                    J<span className={`${styles.azure}`}>o</span>u<span className={`${styles.orange}`}>r</span>n<span className={`${styles.green}`}>e</span>y
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?4" alt="img" />
                <div className={`${styles.Caption}`}>
                  <h2 className={`${'text-uppercase'}`}>
                    Create <br />
                    Your <br />
                    J<span className={`${styles.azure}`}>o</span>u<span className={`${styles.orange}`}>r</span>n<span className={`${styles.green}`}>e</span>y
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/1920/600?5" alt="img" /><div className={`${styles.Caption}`}>
                  <h2 className={`${'text-uppercase'}`}>
                    Create <br />
                    Your <br />
                    J<span className={`${styles.azure}`}>o</span>u<span className={`${styles.orange}`}>r</span>n<span className={`${styles.green}`}>e</span>y
                  </h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;