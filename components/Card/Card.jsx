import styles from "../../styles/layout/Card.module.scss";

<<<<<<< HEAD
const Card = ({ name, image, children }) => {
  return (
    <div className={styles.Card} style={{ backgroundImage: `url(${image})` }}>
      <h2>{name}</h2>
      {children}
=======
const Card = ({ name, image, visibility }) => {
  return (
    <div className={styles.Card} style={{backgroundImage:`url(${image})`}}>
      <h2 style={{display:visibility}}>{name}</h2>
>>>>>>> main
    </div>
  );
};

export default Card;
