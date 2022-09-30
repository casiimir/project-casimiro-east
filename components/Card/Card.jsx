import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image, hVisibility, pVisibility }) => {
  return (
    <div className={styles.Card} style={{backgroundImage:`url(${image})`}}>
      <h2 style={{display:hVisibility}}>{name}</h2>
      <p style={{display:pVisibility}}>{name}</p>
    </div>
  );
};

export default Card;
