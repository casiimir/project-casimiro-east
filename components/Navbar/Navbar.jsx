import styles from "../../styles/layout/Navbar.module.scss";
import logo from "../../public/logo-scont_3.png";
import cart from "../../public/cart-28-512.png";
import Image from "next/future/image";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from 'next/link';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



const NavbarMain = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [isInputVisible, setInputVisibility] = useState(false);
  
  const baseURL = "https://api.musement.com/api/v3/autocomplete";
  const handleChange = (event) => {
    setQuery(event.target.value);
    searchItems(query);
  };
  const searchItems = (query) => {
    axios
      .get(baseURL, {
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
    !query && setItems([]);
  }, [query]);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //   if (window.scrollY >= 700) {
  //     setInputVisibility(true)
  //   } else {
  //     setInputVisibility(false)
  //   }
  // }, []);

  return (
    <>
      
        <Navbar bg="dark" expand='xxl' className={`${styles.Navbar}`}>
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src={logo} alt="Homepage" height={60} />
            </Navbar.Brand>
            
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
                  <li key={item.id} value={item.id}>  
                    <Link href={`/city/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>   
                  </li>
                ))}
              </ul>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'xxl'`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$'xxl'`}
              aria-labelledby={`offcanvasNavbarLabel-expand-$'xxl'`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'xxl'`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`${'justify-content-end'} ${'flex-grow-1'} ${'pe-3'}`}>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-$'xxl'`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
                <Image src={cart} alt="Cart" height={40} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
};


export default NavbarMain;
