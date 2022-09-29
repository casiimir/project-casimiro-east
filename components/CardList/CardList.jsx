import { useState, useEffect } from "react";
import styles from "../../styles/layout/CardList.module.scss";
// import { cityCardPlaceholder, experienceCardPlaceholder } from "../../utils/cardPlaceholder"
import Card from "../Card/Card";
import axios from "axios";

const CardList = ({list}) => {
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
        console.table(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);


  return (
    <div className={styles.CardList}>
      {cityCard.map((el) => {

        if(list === "cities") {  //questo controllo rende dinamico il componente, in modo da poterlo usare per più liste diverse

          return(<Card key={el.id} name={el.name} image={el.cover_image_url} />)
        }

        if(list === "experiences") {

          return(<Card key={el.uuid}/>) //qui andrà un secondo map per l'array experiences
        }
 
      })}
    </div>
  );
};

export default CardList;


// const CardList = ({list}) => {

//   let displayList = [];
//   let isVisible = "flex";

//   if(list === "cities") {
//       displayList.push(...cityCardPlaceholder);
//   }
//   if(list === "experiences") {
//       displayList.push(...experienceCardPlaceholder);
//       isVisible = "none";
//   }

//   return(
//       <div className={styles.CardList}>

//           {displayList.map((item) => <Card 
//                                           key={item.id} 
//                                           name={item.name} 
//                                           image={item.img} 
//                                           visibility={isVisible}
//                                       />)}
//           {console.log(displayList)}
//       </div>
//   )
// }