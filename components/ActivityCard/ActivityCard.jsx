import styles from "../../styles/layout/ActivityCard.module.scss";

const ActivityCard = () => {
  return (
    <div className={styles.ActivityCardDiv}>
      <div className={styles.ActivityCard}>
        <img
          className={styles.ActivityCardImg}
          src="https://payload.cargocollective.com/1/5/173809/13900668/Wine_food_3_1340_c.JPG"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>Food and Wine</h1>
      </div>
      <div className={styles.ActivityCard}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200?2"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>Sport and Adventures</h1>
      </div>
      <div className={styles.ActivityCard}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200?3"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>Tour And Attractions</h1>
      </div>
      <div className={styles.ActivityCard}>
        <img
          className={styles.ActivityCardImg}
          src="https://picsum.photos/200/200?4"
          alt="img"
        />
        <h1 className={styles.ActivityCardTitle}>Shows and Concerts</h1>
      </div>
    </div>
  );
};

export default ActivityCard;
