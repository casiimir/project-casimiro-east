import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from '../../styles/layout/HeroCity.module.scss';


const HeroCity = ({ image, title}) => {

  
  return (
    
    <div className={`${styles.HeroCity}`}>
      <Container fluid className={`${'g-0'}`}>
        <Row>
          <Col>
            <div className={`${styles.cont_image}`}>
              <LazyLoadImage src={image} alt="hero-city" effect="blur" height={"100vh"} width="100%"/>
              <div className={`${styles.Caption}`}>
                <h2>{title}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroCity;