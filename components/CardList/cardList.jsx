import styles from "./index.module.scss";
import { citiesCardPlaceholder, experienceCardPlaceholder } from "../../utils/cardPlaceholder.js";

const CardList = ({list}) => {

    let selectArray = [];
    let visibility = "flex";

    if(list == "cities") {
        selectArray = []
        selectArray.push(...citiesCardPlaceholder);
        visibility = "flex";
    }
    if(list == "experiences") {
        selectArray = [];
        selectArray.push(...experienceCardPlaceholder);
        visibility = "none";
    }


    return(
        <div className={styles.CardList}>
            
            {selectArray.map((item) => {

                return(
                    <div key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <h2 style={{display:visibility}}>{item.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;