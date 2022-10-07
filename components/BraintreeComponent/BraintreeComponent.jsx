import React, { useState, useEffect } from "react";
import * as dropin from "braintree-web-drop-in";
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';




function BraintreeDropIn(props) {
  const { show, onPaymentCompleted, setCartItems, checkoutBtnVis } = props;

  const [braintreeInstance, setBraintreeInstance] = useState(undefined);

  useEffect(() => {
    if (show) {
      const initializeBraintree = () =>
        dropin.create(
          {
            authorization: "sandbox_s9vcdr2w_dzy5457dprcn3vk8",
            container: "#braintree-drop-in-div",
          },
          function (error, instance) {
            if (error) console.error(error);
            else setBraintreeInstance(instance);
          }
        );

      if (braintreeInstance) {
        braintreeInstance.teardown().then(() => {
          initializeBraintree();
        });
      } else {
        initializeBraintree();
      }
    }
  }, [show]);

  return (
    <div style={{ display: `${show ? "block" : "none"}` }}>
      <div id={"braintree-drop-in-div"} />
      <div className={`${'row'}`}>
        <div className={`${'col mb-5'}`}>
        <button
          style = {{display:`${checkoutBtnVis}`}}
          className={`${'button button--primary'}`}
          disabled={!braintreeInstance}
          onClick={() => {
            if (braintreeInstance) {
              braintreeInstance.requestPaymentMethod((error, payload) => {
                if (error) {
                  console.error(error);
                  new Swal('Something went wrong :(','','error');
                } else {
                  const paymentMethodNonce = payload.nonce;
                  console.log("payment method nonce", payload.nonce);

                  localStorage.removeItem("cartList");
                  setCartItems;

                  new Swal('Payment done! B) ggwp','','success');
                  
                  onPaymentCompleted();

                  setTimeout(() => {
                    location.href = '/';
                  }, 1000)
                  
                }
              });
            }
          }}
        >
            {"Pay"}
          </button>
        </div>
      </div>
      
    </div>
  );
}

function BrainTree() {
  const [showBraintreeDropIn, setShowBraintreeDropIn] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const PRICE = 50;

  return (
    <Container>
      <button
        className={`${'button button--primary mb-5'}`}
        onClick={() => {
          setShowBraintreeDropIn(true);
        }}
        disabled={showBraintreeDropIn}
      >
        {"Go to Checkout"}
      </button>
      <BraintreeDropIn
        show={showBraintreeDropIn}
        onPaymentCompleted={() => {
          setShowBraintreeDropIn(false);
          setNumberOfProducts(1);
        }}
      />
    </Container>
  );
}

export default BrainTree;
