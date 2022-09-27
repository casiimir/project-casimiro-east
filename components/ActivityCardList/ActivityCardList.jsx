import styles from "../../styles/layout/ActivityCardList.module.scss";
import ActivityCard from "../ActivityCard/";

const ActivityCardList = () => {
  return (
    <div className={styles.ActivityCardList}>
      <ActivityCard />
    </div>
  );
};

export default ActivityCardList;
