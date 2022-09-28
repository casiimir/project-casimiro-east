import styles from "../../styles/layout/Navbar.module.scss";
import logo from "../../public/logo-scont_3.png";
import cart from "../../public/cart-28-512.png";
import Image from "next/future/image";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from 'next/link';

const Navbar = () => {
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

  useEffect(() => {
    window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
      setInputVisibility(true)
    } else {
      setInputVisibility(false)
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Image src={logo} alt="Homepage" height={60} />
        </li>

        <div className={styles.customSearch}>
          <input
            className={styles.icon}
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

        <li>
          <Image src={cart} alt="Cart" height={40} />
        </li>
      </ul>
    </nav>
  );
};

// TODO: MISSING ONCLICK REDIRECT TO CITY PAGE (OPTION TAG)

export default Navbar;
