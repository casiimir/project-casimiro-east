import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import HeroCity from "../../../components/HeroCity";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";
import styles from "../../../styles/layout/CityOverwiev.module.scss";
import { getCategory } from "../../../api/api";
import NavbarMain from "../../../components/Navbar";

const CityPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cityData, setCityData] = useState([]);
  const [foodExp, setFoodExp] = useState([]);
  const [museumExp, setMuseumExp] = useState([]);
  const [outdoorExp, setOutdoorExp] = useState([]);

  const [expanded, setExpanded] = useState(false);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }


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

      <NavbarMain />

      <div className={styles.Desc}>
        <h3>The City</h3>
        <p>
          {expanded ? cityData?.content : truncate(cityData?.content, 350)}
        </p>
        <button className={`${'button button--dark'}`} onClick={() => setExpanded(!expanded)}>{!expanded ? 'Read More' : 'Read Less'}</button>
      </div>

      <div className={styles.Exp}>
        <div className="cont-title">
          <h3>Food Experiences</h3>
        </div>
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
        <div className="cont-title">
          <h3>History Experiences</h3>
        </div>
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
        <div className="cont-title">
          <h3>Outdoor Experiences</h3>
        </div>
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

      {/* bottone provvisorio*/}
      <div className="cont-button">
        <button className={`${'button button--dark'}`}>
          <Link href={`/city/${id}/activities`}>
            <a className={styles.LinkList}>See all available activities</a>
          </Link>
        </button>
      </div>
      
    </div>
  );
};

// TODO: in console avete tutto l'oggetto della città

export default CityPage;
