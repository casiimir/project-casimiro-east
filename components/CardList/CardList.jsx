import { useState, useEffect } from "react";
import styles from "../../styles/layout/CardList.module.scss";
import Card from "../Card/Card";
import axios from "axios";

const CardList = ({ list, title }) => {
  const headers = {'Accept-Language':'it-IT'}
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
        const results = (res.data.data);
        const uniqueData = [...results.reduce((map, obj) => map.set(obj.city.id, obj), new Map()).values()];
        setDisplayList(uniqueData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

console.log(displayList)
  return (
    <>
      <div className="cont-title">
        <h3>{title}</h3>
      </div>
    
      <div className={styles.CardList}>
        
        {displayList.map((item) => {

          if(list === "cities") {

            return(<Card key={item.city.id} name={item.city.name} image={item.city.cover_image_url}/>)
          }
          if(list === "experiences") {
            
            return(<Card key={item.uuid} name={item.title} image={item.cover_image_url}/>)
          }
        })}
      </div>
    </>
  );
};

export default CardList;