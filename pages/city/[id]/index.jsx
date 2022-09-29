import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/future/image";
import HeroCity from "../../../components/HeroCity";
import Card from "../../../components/Card/Card";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";

import styles from "../../../styles/layout/LinkList.module.scss";

const cityPage = () => {
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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // food category
    axios
      .get(
        `https://api.musement.com/api/v3/categories/221/activities?city=${id}&offset=0&limit=100&sort_by=relevance`
      )
      .then((res) => {
        setFoodExp(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // museum category
    axios
      .get(
        `https://api.musement.com/api/v3/categories/209/activities?city=${id}&offset=0&limit=100&sort_by=relevance`
      )
      .then((res) => {
        setMuseumExp(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // outdoor category
    axios
      .get(
        `https://api.musement.com/api/v3/categories/194/activities?city=${id}&offset=0&limit=100&sort_by=relevance`
      )
      .then((res) => {
        setOutdoorExp(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [id]);

  return (
    <>
      {cityData.cover_image_url && (
        <HeroCity
          image={cityData.cover_image_url}
          title={cityData.name}
          content={cityData.content}
        />
      )}
      <div className={styles.Exp}>
        <h1 className={styles.ExpTitle}>Food Experiences:</h1>
        <div className={styles.ExpList}>
          {foodExp.map((item) => (
            <ActivityCard
              key={item.id}
              name={item.title}
              image={item.cover_image_url}
            >
              <Link href={`/city/${id}/${item.uuid}`}>
                <a className={styles.LinkList}>{item.title}</a>
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
              key={item.id}
              name={item.title}
              image={item.cover_image_url}
            >
              <Link href={`/city/${id}/${item.uuid}`}>
                <a className={styles.LinkList}>{item.title}</a>
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
              key={item.id}
              name={item.title}
              image={item.cover_image_url}
            >
              <Link href={`/city/${id}/${item.uuid}`}>
                <a className={styles.LinkList}>{item.title}</a>
              </Link>
            </ActivityCard>
          ))}
        </div>
      </div>
    </>
  );
};

// TODO: in console avete tutto l'oggetto della città

export default cityPage;
