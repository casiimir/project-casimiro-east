import { useEffect } from 'react';
import styles from "../../styles/layout/TdComponent.module.scss";

const TdComponent = ({ productName, price, image }) => {

  return(
    <>
      <tr className={`${styles.TdComponent} ${'row'}`}>
        <td className={`${'col-5 col-md-3'}`}>
          <img src={image} alt={productName} />
        </td>
        <td className={`${'col-5 col-md-8'}`}>
          {productName}
        </td>
        <td className={`${'col-2 col-md-1'}`}>
          {price}
        </td>
      </tr>
    </>
  )
};

export default TdComponent;