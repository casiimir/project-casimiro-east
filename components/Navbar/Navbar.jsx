import styles from "../../styles/layout/Navbar.module.scss";
import logo from "../../public/logo.png";
import Image from "next/future/image";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";


const NavbarMain = () => {
  const headers = { "Accept-Language": "en-EN" };
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [scrollPosY, setScrollPosY] = useState(0);
  const [cartLength, setCartLength] = useState("0");
  const baseURL = "https://api.musement.com/api/v3/autocomplete";


  const handleChange = (event) => {
    setQuery(event.target.value);
    searchItems(query);
  };

  const searchItems = (query) => {
    axios
      .get(baseURL, {
        headers: headers,
        params: {
          activity_limit: 0,
          activity_offset: 0,
          category_limit: 0,
          category_offset: 0,
          city_limit: 5,
          city_offset: 0,
          country_offset: 0,
          hotel_limit: 0,
          hotel_offset: 0,
          list_limit: 0,
          list_offset: 0,
          pickup_offset: 0,
          sort_by: "-relevance",
          text: query,
          venue_limit: 0,
          venue_offset: 0,
        },
      })
      .then((res) => {
        setItems(res.data[0].items);
        console.table(res.data[0].items);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosY(window.scrollY));
    !query && setItems([]);
  }, [query]);

  
  useEffect(() => {
    if(localStorage.getItem("cartList") !== null) {

      setCartLength(JSON.stringify(JSON.parse(localStorage.getItem("cartList")).length));
    }
  }, []);
 

  const resetValue = () => {
    setQuery('')
  }
  return (
    <>
     
      <Navbar variant="dark" expand='' className={`${styles.Navbar} ${scrollPosY >= 700 && styles.position_fixed}`}>
        <Container fluid className={styles.Container}>
          <Row className={`${'w-100 align-items-center'}`}>
            <Col xs={3}>
              <Navbar.Brand href="/">
                <Image src={logo} alt="Homepage" height={60} />
              </Navbar.Brand>
            </Col>
            <Col xs={5}>
              <div className={styles.CustomSearch}>
                <input
                  className={`${styles.input} ${'form-control'}`}
                  placeholder="Search City..."
                  type="text"
                  value={query}
                  onChange={handleChange}
                />
                <ul>
                  {items.map((item) => (
                    <li onClick={resetValue} key={item.id} value={item.id}>  
                      <Link href={`/city/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>   
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={4} className={`${'d-flex justify-content-end'}`}>
              <div className={styles.RelativeIcon}>
                <Link href={`/cart`}>
                  <a>
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      style={{ fontSize: 24, color: "white" }}
                    />
                  </a>
                </Link> 
                <p>{cartLength}</p> 
                
              </div>
            </Col>
          </Row>

        </Container>
      </Navbar>
  
    </>
  );
};


export default NavbarMain;
