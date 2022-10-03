import { useRouter } from "next/router";
import { getAllActivities } from "../../../api/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import CityActivityCard from "../../../components/CityActivityCard/CityActivityCard";
import Navbar from "../../../components/Navbar";

import styles from "../../../styles/layout/AllActivities.module.scss";

const Activities = () => {
  const router = useRouter();
  const cityId = router.query.id;
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getAllActivities(cityId, "relevance", setActivities);
  }, []);

  const handleChange = (e) => {
    getAllActivities(cityId, e.target.value, setActivities);
  };

  return (
    <div className={styles.Activities}>
      <Navbar />
      <h1 className={styles.ActivitiesTitle}>All available activities</h1>

      <span className={styles.ActivitiesSpan}>Sort by - </span>
      <select className={styles.ActivitiesSelector} onChange={handleChange}>
        <option value="relevance">Relevance</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>

      <div className={styles.ActivitiesDiv}>
        {activities?.map((el, i) => (
          <CityActivityCard
            key={i}
            name={el?.title}
            image={el?.cover_image_url}
            price={el?.retail_price?.formatted_iso_value}
          >
            <Link href={`/city/${cityId}/${el?.uuid}`}>
              <p className={styles.ActivitiesLink}>see more</p>
            </Link>
          </CityActivityCard>
        ))}
      </div>
    </div>
  );
};

export default Activities;
