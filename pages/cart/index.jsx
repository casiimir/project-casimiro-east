import TdComponent from "../../components/TdComponent";
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

  console.log(cartItems);

  return (
    <div className={styles.Cart}>
      <h1>Cart</h1>
      <table className="table">
        <tbody>
          {
            data.map( (item, index) => <TdComponent 
              key={index} productName={ item.meta_title} 
              image={item.cover_image_url} 
              price={item.retail_price.formatted_iso_value}
            />
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
