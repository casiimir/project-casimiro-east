import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { createCart } from "../../api/api";

import styles from '../../styles/layout/Cart.module.scss';



const Cart = () => {

  const router = useRouter();
  const id = router.query.id;

  const [cartItems, setCartItems] = useState({})

  useEffect( () => {
    createCart();
  }, [])

  console.log(cartItems)

  return (
    <h1>Cart</h1>
  )
}


export default Cart;