import styles from "../../styles/layout/ActivityCard.module.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ActivityCard = ({ name, image, children, alternativeImg }) => {
  return (
    <div className={styles.ActivityCard}>
      <div className={styles.ActivityCardDiv}>
        {
        image
        ?
        <LazyLoadImage className={styles.ActivityCardImg} src={image} alt={name} effect="blur"/>
        :
        <LazyLoadImage className={styles.ActivityCardImg} src={alternativeImg} alt={name} effect="blur"/>
        }

        <h2 className={styles.ActivityCardTitle}>{name}</h2>
      </div>
      {children}
    </div>
  );
};

export default ActivityCard;
