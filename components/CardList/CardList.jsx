import { useState, useEffect } from "react";
import styles from "../../styles/layout/CardList.module.scss";
import Link from "next/link";
import Card from "../Card/Card";
import axios from "axios";
// import ScrollContainer from "react-indiana-drag-scroll";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from "swiper";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';

const CardList = ({ list, title }) => {
  const headers = { "Accept-Language": "en-EN" };
  const BASE_URL = "https://api.musement.com/api/v3/activities";
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: headers,
        params: {
          limit: 20,
          offset: 0,
        },
      })
      .then((res) => {
        const results = res.data.data;
        const uniqueData = [
          ...results
            .reduce((map, obj) => map.set(obj.city.id, obj), new Map())
            .values(),
        ];
        setDisplayList(uniqueData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  console.log(displayList);
  return (
    <>
      <div className="container">
        <div className={styles.CardList}>
          <h3 className={styles.Title}>{title}</h3>

          <Swiper
              rewind={true}
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={false}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[ Navigation ]}
              className="swiperExp mb-5"
              breakpoints={{
                320: {
                  width: 320,
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
                  slidesPerView: 3,
                },
              }}
            >
            <div className={`${styles.ContCards}`}>
              {displayList.map((item, index) => {
                if (list === "cities") {
                  return (
                    <SwiperSlide key={index}>
                      <Card
                        key={item.city.id}
                        name={item.city.name}
                        image={item.city.cover_image_url}
                      >
                        <Link href={`/city/${item.city.id}`}>
                          <a className={styles.Link}>{item?.city.name}</a>
                        </Link>
                      </Card>
                    </SwiperSlide>
                  );
                }
                if (list === "experiences") {
                  return (
                    <SwiperSlide key={index}>
                      <Card
                        key={item.uuid}
                        name={item.title}
                        image={item.cover_image_url}
                      >
                        <Link href={`/city/${item.city.id}/${item.uuid}`}>
                          <a className={styles.Link}>{item?.title}</a>
                        </Link>
                      </Card>
                    </SwiperSlide>
                  );
                }
              })}
            </div>
          </Swiper>

        </div>
      </div>
    </>
  );
};

export default CardList;

//commento
