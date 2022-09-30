import styles from "../../styles/layout/CityActivityCard.module.scss";

const CityActivityCard = () => {
  return (
    <div className={styles.CityActivityCard}>
      <div className={styles.CityActivityCardDiv}>
        <img
          className={styles.CityActivityCardImg}
          src="https://picsum.photos/200/300"
          alt="image"
        />
        <div className={styles.CityActivityCardText}>
          <h1 className={styles.CityActivityCardTitle}>TITOLO</h1>
          <div className={styles.CityActivityCardDescriptionDiv}>
            <p className={styles.CityActivityCardDescription}>see more</p>
            <p className={styles.CityActivityCardPrice}>$$$</p>
          </div>
        </div>
      </div>
      {/* {children} */}
    </div>
  );
};

export default CityActivityCard;

//prop {image, name, price}
