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
                    <h4>Benvenuti in
                         <span> Journaly</span> 
                    </h4>
                    <h2>Ti aiutiamo a scegliere le <span className={styles.Text_orange}>migliori esperienze </span>  
                        per rendere il tuo viaggio <span className={styles.Text_azure}>indimenticabile</span>
                     </h2>
                </div>
            </Col>
            <Col xs={12} md={6} className={`${'d-flex align-items-center justify-content-center mt-5'}`}> 
                <div className={styles.Polaroid}>
                    <img src="/nature-g0893bc22e_1920.jpg" className={`${'img-fluid'}`} alt="..." />
                    <p className= {styles.Polaroid__caption}>“La propria destinazione non è mai un luogo, ma un nuovo modo di vedere le cose”</p>
                </div>
            </Col>
        </Row>
        </Container>
    </div>

  );
};

export default Jumbo;
