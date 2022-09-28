import styles from "../../styles/layout/ActivityCard.module.scss";

const ActivityCard = () => {
  return (
    <div className={styles.ActivityCard}>
      <div className={styles.ActivityCardDiv}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>TITOLO 1</h1>
      </div>
      <div className={styles.ActivityCardDiv}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>TITOLO 2</h1>
      </div>
      <div className={styles.ActivityCardDiv}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>TITOLO 3</h1>
      </div>
      <div className={styles.ActivityCardDiv}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>TITOLO 4</h1>
      </div>
    </div>
  );
};

export default ActivityCard;
