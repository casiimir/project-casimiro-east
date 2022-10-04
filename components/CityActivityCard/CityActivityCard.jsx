import styles from "../../styles/layout/CityActivityCard.module.scss";

const CityActivityCard = ({ image, name, price, children }) => {
  return (
    <div className={`${styles.CityActivityCard} ${'col'}`}>
      <div className={styles.CityActivityCardDiv}>
        <img className={styles.CityActivityCardImg} src={image} alt={name} />
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

//prop {image, name, price}
