import { useState, useEffect } from "react";
import styles from "../../styles/layout/CardList.module.scss";
import Link from "next/link";
import Card from "../Card/Card";
import axios from "axios";
import ScrollContainer from "react-indiana-drag-scroll";

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
      <div className="main-container">
        <div className={styles.CardList}>
          <h3 className={styles.Title}>{title}</h3>

          <ScrollContainer nativeMobileScroll={true}>
            <div className={styles.ContCards}>
              {displayList.map((item) => {
                if (list === "cities") {
                  return (
                    <Card
                      key={item.city.id}
                      name={item.city.name}
                      image={item.city.cover_image_url}
                    >
                      <Link href={`/city/${item.city.id}`}>
                        <a className={styles.Link}>{item?.city.name}</a>
                      </Link>
                    </Card>
                  );
                }
                if (list === "experiences") {
                  return (
                    <Card
                      key={item.uuid}
                      name={item.title}
                      image={item.cover_image_url}
                    >
                      <Link href={`/city/${item.city.id}/${item.uuid}`}>
                        <a className={styles.Link}>{item?.title}</a>
                      </Link>
                    </Card>
                  );
                }
              })}
            </div>
          </ScrollContainer>

        </div>
      </div>
    </>
  );
};

export default CardList;

//commento
