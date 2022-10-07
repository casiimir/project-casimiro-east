// import TdComponent from "../../components/TdComponent";
import NavbarMain from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BrainTree from '../../components/BraintreeComponent/BraintreeComponent';
import LoadingBar from 'react-top-loading-bar'
import styles from "../../styles/layout/Cart.module.scss";

const Cart = () => {
  const router = useRouter();
  const id = router.query.id;

  const [cartItems, setCartItems] = useState([]);

  let data = [];
 
  useEffect(() => {
    if(localStorage.getItem("cartList") !== null) {
      setCartItems([...JSON.parse(localStorage.getItem("cartList"))]);
    }
  }, [])

  const sum = cartItems.reduce((accumulator, item) => {
    return accumulator + item.retail_price.value;
  }, 0);
   

  const fixTitle = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const removeItem = (product) => {
    console.log("product : ", product)
    console.log("cartItems : ", cartItems)
    
    setCartItems(JSON.parse(localStorage.getItem("cartList")).filter(item => item.uuid !== product.uuid)) 
    localStorage.setItem("cartList", JSON.stringify(JSON.parse(localStorage.getItem("cartList")).filter(item => item.uuid !== product.uuid)));
    setTimeout(() => {
      location.reload();
    }, 3000)
  }


  const [progress, setProgress] = useState(0);
  const [overlay, setOverlay] = useState(false);

  useEffect( () => {
    setProgress(100)
  }, [])

  return (
    <div className={styles.Cart}>
      <LoadingBar
        color='#ff800b'
        progress={progress}
        onLoaderFinished={() =>{ setProgress(0), setOverlay(true)}}
      />

      {
        !overlay ? <div className="overlay"></div>
        : 
        <div></div>
      }
      <NavbarMain />
        <div className={styles.MainContent}>
          <div className={`${'container'}`}>
            <div className={styles.titleRow}>
              <h1>Cart</h1>
              <p>Total: {sum.toFixed(2)}</p>
            </div>
          
            {
              cartItems.length !== 0 ? 

              cartItems.map( (item, index) => {
                
                return(
                  <div key={index} className={`${styles.TdComponent} ${'row mb-3 align-items-center'}`}>
                    <div className={`${'col-5 col-md-3 ps-0'}`}>
                      <img src={item.cover_image_url} alt={item.slug} />
                    </div>
                    <div className={`${'col-5 col-md-8'}`}>
                      {fixTitle(item.slug).replace(/-/g, " ")}
                    </div>
                    <div className={`${'col-2 col-md-1 text-center'}`}>
                      {item.retail_price.formatted_iso_value}
                      <button id={index} onClick={() => removeItem(item)} className={`${"button button--primary mt-2"}`}>X</button>
                    </div>
                  </div>
                )
              })
              :
              <div className="text-center">
                <img className={`${'mw-100'}`} src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" />
              </div>
            }
          </div>
        </div>
        {
          cartItems.length !== 0 &&
          <BrainTree setCartItems={() => setCartItems([])} />
        }
        
      <Footer/>
    </div>
  );
};

export default Cart;
