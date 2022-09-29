import styles from "../../styles/layout/ActivityCard.module.scss";

const ActivityCard = ({ name, image, children }) => {
  return (
    <div className={styles.ActivityCard}>
      <div className={styles.ActivityCardDiv}>
        <img className={styles.ActivityCardImg} src={image} alt={name} />
        <h2 className={styles.ActivityCardTitle}>{name}</h2>
      </div>
      {children}
    </div>
  );
};

export default ActivityCard;
