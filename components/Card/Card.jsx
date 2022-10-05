import styles from "../../styles/layout/Card.module.scss";

const Card = ({ name, image, children }) => {
  return (
    <div className={styles.Card}>
      <div className={`${styles.cont_image}`}>
        <img src={image} alt={name} />
        <div className={`${styles.Caption}`}>
          <h5>{name}</h5>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;

//commento
