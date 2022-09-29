import { useState, useEffect } from "react";
import styles from "../../styles/layout/CardList.module.scss";
// import { cityCardPlaceholder, experienceCardPlaceholder } from "../../utils/cardPlaceholder"
import Card from "../Card/Card";
import axios from "axios";

const CardList = ({list}) => {
  const citiesBaseURL = "https://api.musement.com/api/v3/cities";
  const experiencesBaseURL = "https://api.musement.com/api/v3/activities";
  const [experiences, setExperiences] = useState([]);


  useEffect(() => {
    axios
      .get(experiencesBaseURL, {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      .then((res) => {
        setExperiences(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);


  return (
    <div className={styles.CardList}>
      
      {console.log(experiences)}
      {experiences.map((experience) => {

        if(list === "cities") {

          return(<Card key={experience.city.id} name={experience.city.name} image={experience.city.cover_image_url}/>)
        }
        if(list === "experiences") {
          
          return(<Card key={experience.uuid} name={experience.title} image={experience.cover_image_url}/>)
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