import styles from "../../styles/layout/CityActivityCard.module.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CityActivityCard = ({ image, name, price, children }) => {
  return (
    <div className={`${styles.CityActivityCard} ${'col'}`}>
      <div className={styles.CityActivityCardDiv}>
        <LazyLoadImage className={styles.CityActivityCardImg} src={image} alt={name} effect="blur" />
        <div className={styles.CityActivityCardText}>
          <h1 className={styles.CityActivityCardTitle}>{name}</h1>
          <div className={styles.CityActivityCardDescriptionDiv}>
            <p className={styles.CityActivityCardPrice}>{price}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityActivityCard;