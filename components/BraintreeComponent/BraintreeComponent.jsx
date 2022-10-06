//import "https://cdn.skypack.dev/bootstrap/dist/css/bootstrap.min.css";
//import * as reactTransitionGroup from "https://cdn.skypack.dev/react-transition-group@v2.9.0";
import React, { useState, useEffect } from "react";
import * as dropin from "braintree-web-drop-in";
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';




function BraintreeDropIn(props) {
  const { show, onPaymentCompleted } = props;

  const [braintreeInstance, setBraintreeInstance] = useState(undefined);

  useEffect(() => {
    if (show) {
      const initializeBraintree = () =>
        dropin.create(
          {
            authorization: "sandbox_s9vcdr2w_dzy5457dprcn3vk8", // insert your tokenization key or client token here
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
          className={`${'button button--primary'}`}
          disabled={!braintreeInstance}
          onClick={() => {
            if (braintreeInstance) {
              braintreeInstance.requestPaymentMethod((error, payload) => {
                if (error) {
                  console.error(error);
                  new Swal('Pagamento non riuscito','','error');
                } else {
                  const paymentMethodNonce = payload.nonce;
                  console.log("payment method nonce", payload.nonce);

                  // TODO: use the paymentMethodNonce to
                  //  call you server and complete the payment here

                  // ...

                  new Swal('Pagamento effettuato con successo','','success');

                  onPaymentCompleted();
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
