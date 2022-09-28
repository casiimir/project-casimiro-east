import styles from "../../styles/layout/ActivityCardList.module.scss";

import ActivityCard from "../ActivityCard/";

const ActivityCardList = () => {
  return (
    <div className={styles.ActivityCardList}>
      <h1 className={styles.ActivityCardListTitle}>Browse Activities</h1>
      <ActivityCard />
    </div>
  );
};

export default ActivityCardList;
