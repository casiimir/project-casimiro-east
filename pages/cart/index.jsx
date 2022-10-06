// import TdComponent from "../../components/TdComponent";
// import NavbarMain from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer"
// import { useState, useEffect } from "react";
import { useRouter } from "next/router";


import { FaShoppingCart } from 'react-icons/fa';


import { useCart } from '../../hooks/use-cart.js';

import products from '../../../shared/products.json';

import Table from '../../components/Table';

import styles from "../../styles/layout/Cart.module.scss";


const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];



const Cart = () => {
  const router = useRouter();
  const id = router.query.id;

  const { cartItems, checkout } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {
      return (
        <div>{ quantity }</div>
      );
    }

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2)
    }
  });

  return (
    <div className={styles.Cart}>
      <div className={styles.container}>

        <main className={styles.main}>

          <h1 className={styles.title}>
            <FaShoppingCart /> Cart
          </h1>

          <Table className={styles.table} data={data} columns={columns} />

          <p className={styles.checkout}>
            <button className={styles.button} onClick={checkout}>
              Check Out
            </button>
          </p>
        </main>
      </div>
    </div>
  )
}


export default Cart;
