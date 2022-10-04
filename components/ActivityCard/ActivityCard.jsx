import styles from "../../styles/layout/ActivityCard.module.scss";

const ActivityCard = ({ name, image, children, alternativeImg }) => {
  return (
    <div className={styles.ActivityCard}>
      <div className={styles.ActivityCardDiv}>
        {
        image
        ?
        <img className={styles.ActivityCardImg} src={image} alt={name} />
        :
        <img className={styles.ActivityCardImg} src={alternativeImg} alt={name} />
        }

        <h2 className={styles.ActivityCardTitle}>{name}</h2>
      </div>
      {children}
    </div>
  );
};

export default ActivityCard;
