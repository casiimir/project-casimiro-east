import { useEffect } from 'react';
import styles from "../../styles/layout/TdComponent.module.scss";

const TdComponent = ({ productName, price, image }) => {

  return(
    <>
      <tr>
        <td>
          <img src={image} alt={productName} />
        </td>
        <td>
          {productName}
        </td>
        <td>
          {price}
        </td>
      </tr>
    </>
  )
};

export default TdComponent;