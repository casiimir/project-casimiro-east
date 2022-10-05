import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import HeroCity from "../../../components/HeroCity";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";
import { getCategory } from "../../../api/api";
import NavbarMain from "../../../components/Navbar";
// import ScrollContainer from "react-indiana-drag-scroll";


import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from "swiper";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';

import styles from "../../../styles/layout/CityOverwiev.module.scss";

const CityPage = () => {
  const headers = { "Accept-Language": "en-EN" };
  const router = useRouter();
  const id = router.query.id;
  const [cityData, setCityData] = useState([]);
  const [foodExp, setFoodExp] = useState([]);
  const [museumExp, setMuseumExp] = useState([]);
  const [outdoorExp, setOutdoorExp] = useState([]);
  const [expanded, setExpanded] = useState(false);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.musement.com/api/v3/cities/${id}`,
      headers: headers,
    })
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
    <div className={styles.MainContent}>
      {cityData?.cover_image_url && (
        <HeroCity image={cityData?.cover_image_url} title={cityData?.name} />
      )}

      <NavbarMain />
      <div className="container">

        <div className={styles.Desc}>
          <h3 className={styles.CityOverViewTitle}>The City</h3>
          <p className={styles.CityOverViewText}>
            {expanded
              ? cityData?.content_html?.replace(/(<([^>]+)>)/gi, "")
              : truncate(
                  cityData?.content_html?.replace(/(<([^>]+)>)/gi, ""),
                  350
                )}
          </p>
          <button
            className={`${"button button--dark"}`}
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? "Read More" : "Read Less"}
          </button>
        </div>
        <div className={`${styles.Exp} ${"mt-5"}`}>
        
          <h3 className={styles.ExpTitle}>Food Experiences</h3>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={false}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[ Navigation ]}
              className="swiperExp"
              breakpoints={{
                0: {
                  width: 480,
                  slidesPerView: 1,
                },
                // when window width is >= 640px
                640: {
                  width: 576,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 4,
                },
              }}
            >
            <div className={styles.ExpList}>
              {foodExp.map((item, index) => (
                <SwiperSlide key={index}>
                  <ActivityCard
                    key={item?.id}
                    name={item?.title}
                    image={item?.cover_image_url}
                    alternativeImg={item?.city?.cover_image_url}
                  >
                    <Link href={`/city/${id}/${item?.uuid}`}>
                      <a className={styles.LinkList}>{item?.title}</a>
                    </Link>
                  </ActivityCard>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          <div className={`${styles.Exp} ${"mt-5"}`}>
            <h3 className={styles.ExpTitle}>History Experiences</h3>

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[ Navigation ]}
                className="swiperExp2"
                breakpoints={{
                  0: {
                    width: 480,
                    slidesPerView: 1,
                  },
                  // when window width is >= 640px
                  640: {
                    width: 576,
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 4,
                  },
                }}
              >
              <div className={styles.ExpList}>
                {museumExp.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ActivityCard
                      key={item?.id}
                      name={item?.title}
                      image={item?.cover_image_url}
                      alternativeImg={item?.city?.cover_image_url}
                    >
                      <Link href={`/city/${id}/${item?.uuid}`}>
                        <a className={styles.LinkList}>{item?.title}</a>
                      </Link>
                    </ActivityCard>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>

          <div className={`${styles.Exp} ${"mt-5"}`}>
            <h3 className={styles.ExpTitle}>Outdoor Experiences</h3>

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[ Navigation ]}
                className="swiperExp3"
                breakpoints={{
                  0: {
                    width: 480,
                    slidesPerView: 1,
                  },
                  // when window width is >= 640px
                  640: {
                    width: 576,
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 4,
                  },
                }}
              >
              <div className={styles.ExpList}>
                {outdoorExp.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ActivityCard
                      key={item?.id}
                      name={item?.title}
                      image={item?.cover_image_url}
                      alternativeImg={item?.city?.cover_image_url}
                    >
                      <Link href={`/city/${id}/${item.uuid}`}>
                        <a className={styles.LinkList}>{item?.title}</a>
                      </Link>
                    </ActivityCard>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>

          <div className="cont-button mt-5">
            <button className={`${"button button--dark"}`}>
              <Link href={`/city/${id}/activities`}>
                <a className={styles.LinkListBtn}>See all available activities</a>
              </Link>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

// TODO: in console avete tutto l'oggetto della città

export default CityPage;
