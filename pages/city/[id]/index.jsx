import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import HeroCity from "../../../components/HeroCity";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";
import styles from "../../../styles/layout/CityOverwiev.module.scss";
import { getCategory } from "../../../api/api";
import NavbarMain from '../../../components/Navbar'


const CityPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cityData, setCityData] = useState([]);
  const [foodExp, setFoodExp] = useState([]);
  const [museumExp, setMuseumExp] = useState([]);
  const [outdoorExp, setOutdoorExp] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.musement.com/api/v3/cities/${id}`)
      .then((res) => {
        setCityData(res.data);
        console.table(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // food category
    getCategory(id, 221, setFoodExp);
    // museum category
    getCategory(id, 209, setMuseumExp);
    // outdoor category
    getCategory(id, 194, setOutdoorExp);
  }, [id]);

  return (
    <div className={styles.MainContent}>
      {cityData?.cover_image_url && (
        <HeroCity image={cityData?.cover_image_url} title={cityData?.name} />
      )}

<<<<<<< HEAD
      <div>descrizione</div>
=======
      <NavbarMain />

      <div className={styles.Desc}>
        <h3>The City</h3>
        <p>
          {cityData?.content}
        </p>
      </div>

>>>>>>> main

      <div className={styles.Exp}>
        <h1 className={styles.ExpTitle}>Food Experiences:</h1>
        <div className={styles.ExpList}>
          {foodExp.map((item) => (
            <ActivityCard
              key={item?.id}
              name={item?.title}
              image={item?.cover_image_url}
            >
              <Link href={`/city/${id}/${item?.uuid}`}>
                <a className={styles.LinkList}>{item?.title}</a>
              </Link>
            </ActivityCard>
          ))}
        </div>
      </div>
      <div className={styles.Exp}>
        <h1 className={styles.ExpTitle}>History Experiences:</h1>
        <div className={styles.ExpList}>
          {museumExp.map((item) => (
            <ActivityCard
              key={item?.id}
              name={item?.title}
              image={item?.cover_image_url}
            >
              <Link href={`/city/${id}/${item?.uuid}`}>
                <a className={styles.LinkList}>{item?.title}</a>
              </Link>
            </ActivityCard>
          ))}
        </div>
      </div>

      <div className={styles.Exp}>
        <h1 className={styles.ExpTitle}>Outdoor Experiences:</h1>
        <div className={styles.ExpList}>
          {outdoorExp.map((item) => (
            <ActivityCard
              key={item?.id}
              name={item?.title}
              image={item?.cover_image_url}
            >
              <Link href={`/city/${id}/${item.uuid}`}>
                <a className={styles.LinkList}>{item?.title}</a>
              </Link>
            </ActivityCard>
          ))}
        </div>
      </div>
    </div>
  );
};

// TODO: in console avete tutto l'oggetto della città

export default CityPage;
