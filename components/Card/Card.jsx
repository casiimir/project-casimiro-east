import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image }) => {
  return (
    <div className={styles.Card} style={{backgroundImage:`url(${image})`}}>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
