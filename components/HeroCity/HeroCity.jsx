import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import Image from 'next/image';
import axios from "axios";

import styles from '../../styles/layout/HeroCity.module.scss';





const Hero = () => {

  const [items, setItems] = useState([]);

  const baseURL = "https://api.musement.com/api/v3/12";
  

  useEffect( () => {
    axios
    .get(baseURL, {
      params: {
        
      },
    })
    .then((res) => {
      setItems(res.data[0].items);
      console.table(res.data[0].items);
    })
    .catch((error) => {
      console.log(error.response);
    });
  }, [])

  return (
    
    <div className={`${styles.HeroCity}`}>
      <Container fluid className={`${'g-0'}`}>
        <Row>
          <Col>
          { 
            items.map( item => <Image src={item.cover_image_url} alt="hero-city" layout='fill'/>)
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;