import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/future/image";
import HeroCity from "../../../components/HeroCity";
<<<<<<< HEAD
import Card from "../../../components/Card/Card";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";

import styles from "../../../styles/layout/LinkList.module.scss";
=======
import { getCategory } from "../../../api/api";
>>>>>>> main

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
    getCategory(id, 221, setFoodExp);
    // museum category
    getCategory(id, 209, setMuseumExp);
    // outdoor category
    getCategory(id, 194, setOutdoorExp);
  }, [id]);

  return (
    <>
      {cityData?.cover_image_url && (
        <HeroCity
          image={cityData?.cover_image_url}
          title={cityData?.name}
          content={cityData?.content}
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

<<<<<<< HEAD
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
=======
      {/* IN QUESTA SEZIONE AL POSTO DELLE LISTE, DEVONO ESSERE MAPPATE LE CARDS, CON LE DOVUTE PROPS A CUI VERRANNO PASSATE LE IMMAGINI E LE INFO */}

      <h1>Food Experiences:</h1>
      <ul>
        {foodExp.map((item) => (
          <li>
            <Link href={`/city/${id}/${item?.uuid}`}>
              <a>{item?.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h1>History Experiences:</h1>
      <ul>
        {museumExp.map((item) => (
          <li>
            <Link href={`/city/${id}/${item?.uuid}`}>
              <a>{item?.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h1>Outdoor Experiences:</h1>
      <ul>
        {outdoorExp.map((item) => (
          <li>
            <Link href={`/city/${id}/${item?.uuid}`}>
              <a>{item?.title}</a>
            </Link>
          </li>
        ))}
      </ul>
>>>>>>> main
    </>
  );
};

// TODO: in console avete tutto l'oggetto della città

export default cityPage;
