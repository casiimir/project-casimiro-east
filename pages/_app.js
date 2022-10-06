import { CartContext, useCartState } from '../hooks/use-cart.js';
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp
