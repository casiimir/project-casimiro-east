import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image }) => {
  return (
    <div className={styles.Card} style={{backgroundImage:`url(${image})`}}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
