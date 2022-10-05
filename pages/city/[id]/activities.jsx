import { useRouter } from "next/router";
import { getAllActivities } from "../../../api/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import CityActivityCard from "../../../components/CityActivityCard/CityActivityCard";
import NavbarMain from "../../../components/Navbar";
import Pagination from 'react-responsive-pagination';
import styles from "../../../styles/layout/AllActivities.module.scss";

const Activities = () => {
  const router = useRouter();
  const cityId = router.query.id;
  const [activities, setActivities] = useState([]);
  const [offset, setOffset] = useState(1);
  useEffect(() => {
    getAllActivities(cityId, "relevance", setActivities,offset);
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
  }, [offset]);

  const handleChange = (e) => {
    getAllActivities(cityId, e.target.value, setActivities);
  };

  const totalPages = Math.floor((activities?.meta?.count)/10);


  return (
    <div className={styles.Activities}>
      <NavbarMain />
      <h1 className={styles.ActivitiesTitle}>All available activities</h1>
      <div className={`${'container-fluid'}`}>
        <div className={`${'row'}`}>
          <div className={`${'col'}`}>
            <label className={ `${'col mb-3'}` }>Sort by:</label>
            <select className={`${styles.ActivitiesSelector} ${'form-control'}`} onChange={handleChange}>
              <option value="relevance">Relevance</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>  
      <div className={`${styles.ActivitiesDiv} ${'row'}`}>
        {activities?.data?.map((el, i) => (
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

      <div className={styles.pagination_wrapper}>
      <Pagination
      current={offset}
      total={totalPages}
      onPageChange={setOffset}
      pageLinkClassName={styles.page_item}
      activeItemClassName={styles.page_item_active}
      disabledItemClassName={styles.page_item_disabled}
    />
      </div>


    </div>
  );
};

export default Activities;
