import styles from "./index.module.scss"
import { cityCardPlaceholder, experienceCardPlaceholder } from "../../utils/cardPlaceholder"
import Card from "../Card/Card";

const CardList = ({list}) => {

    let displayList = [];
    let isVisible = "flex";

    if(list === "cities") {
        displayList.push(...cityCardPlaceholder);
    }
    if(list === "experiences") {
        displayList.push(...experienceCardPlaceholder);
        isVisible = "none";
    }

    return(
        <div className={styles.CardList}>

            {displayList.map((item) => <Card 
                                            key={item.id} 
                                            name={item.name} 
                                            image={item.img} 
                                            visibility={isVisible}
                                        />)}
            {console.log(displayList)}
        </div>
    )
}

export default CardList;