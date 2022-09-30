import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image, children }) => {
  return (
    <div className={styles.Card} style={{ backgroundImage: `url(${image})` }}>
      <h2>{name}</h2>
      {children}
    </div>
  );
};

export default Card;

//commento
