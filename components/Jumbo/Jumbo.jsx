import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/layout/Jumbo.module.scss"

const Jumbo = () => {
  return (
    <div className={styles.Jumbo}>
        <Container>
        <Row>
            <Col xs={12} md={6} className={`${'d-flex align-items-center justify-content-center mt-5'}`}>
                <div className={styles.Jumbo_text}>
                    <h4>Welcome to 
                         <span> Journaly</span> 
                    </h4>
                    <h2>We help you choose the <span className={styles.Text_orange}>best experiences </span>  
                    to make your trip <span className={styles.Text_azure}>unforgettable</span>
                     </h2>
                </div>
            </Col>
            <Col xs={12} md={6} className={`${'d-flex align-items-center justify-content-center mt-5'}`}> 
                <div className={styles.Polaroid}>
                    <img src="/nature-g0893bc22e_1920.jpg" className={`${'img-fluid'}`} alt="..." />
                    <p className= {styles.Polaroid__caption}>“Your destination is never a place, but a new way of seeing things”</p>
                </div>
            </Col>
        </Row>
        </Container>
    </div>  
  );
};

export default Jumbo;
