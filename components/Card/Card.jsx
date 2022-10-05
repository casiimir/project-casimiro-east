import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image, children }) => {
  return (
    <div className={styles.Card}>
      <h2>{name}</h2>
      <img src={image} alt="" />
      {children}
    </div>
  );
};

export default Card;

//commento
