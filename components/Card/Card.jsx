import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image, visibility }) => {
  return (
    <div className={styles.Card} style={{backgroundImage:`url(${image})`}}>
      <h2 style={{display:visibility}}>{name}</h2>
    </div>
  );
};

export default Card;

//commento