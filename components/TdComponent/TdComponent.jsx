import { useEffect } from 'react';
import styles from "../../styles/layout/TdComponent.module.scss";

const TdComponent = ({ productName, price, image, setOnClick, productID }) => {


  
  
  return(
    <>
      <div className={`${styles.TdComponent} ${'row mb-3 align-items-center'}`}>
        <div className={`${'col-5 col-md-3 ps-0'}`}>
          <img src={image} alt={productName} />
        </div>
        <div className={`${'col-5 col-md-8'}`}>
          {productName}
        </div>
        <div className={`${'col-2 col-md-1'}`}>
          {price}
        </div>
        <div>
          <button id={productID} onClick={setOnClick} className={`${"button button--primary"}`}>X</button>
        </div>
      </div>
    </>
  )
};

export default TdComponent;