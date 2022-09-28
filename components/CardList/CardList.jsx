import { useState, useEffect } from "react";
import styles from "../../styles/layout/CardList.module.scss";
// import { cityCardPlaceholder, experienceCardPlaceholder } from "../../utils/cardPlaceholder"
import Card from "../Card/Card";
import axios from "axios";

const CardList = ({}) => {
  const baseURL = "https://api.musement.com/api/v3/cities";
  const [cityCard, setCityCard] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL, {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      .then((res) => {
        setCityCard(res.data);
        // console.table(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      {cityCard.map((el) => (
        <Card key={el.id} name={el.name} image={el.cover_image_url} />
      ))}
    </div>
  );
};

export default CardList;
