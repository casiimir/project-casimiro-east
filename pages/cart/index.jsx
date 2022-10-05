import TdComponent from "../../components/TdComponent";
import NavbarMain from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


import styles from "../../styles/layout/Cart.module.scss";

const Cart = () => {
  const router = useRouter();
  const id = router.query.id;

  const [cartItems, setCartItems] = useState({});

  let data = [];
 
  if (typeof window !== "undefined") {
    if(localStorage.getItem("cartList") !== null) {
      data = [...JSON.parse(localStorage.getItem("cartList"))];
    }
  }

  const sum = data.reduce((accumulator, item) => {
    return accumulator + item.retail_price.value;
  }, 0);
  // console.log(sum)
  // console.log(data);

  return (
    <div className={styles.Cart}>
      <NavbarMain/>
        <div className={styles.MainContent}>
          <div className={styles.titleRow}>
            <h1>Cart</h1>
            <p>Total: {sum.toFixed(2)}</p>
          </div>
          
          <table>
              {
                data.map( (item, index) => <TdComponent 
                  key={index} productName={ item.meta_title} 
                  image={item.cover_image_url} 
                  price={item.retail_price.formatted_iso_value}
                />
                )
              }
          </table>
        </div>
      <Footer/>
    </div>
  );
};

export default Cart;
