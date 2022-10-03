import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "../../styles/layout/Footer.module.scss";
import logo from "../../public/logo.png";
import Image from "next/future/image";

const Footer = () => {
    

    return(
			<div className={styles.Footer}>
        <Container fluid>
					<Row>
						<Col xs={12} sm={2}>
							<div className={styles.__list}>
                <h5>Authors&apos; GitHub</h5>
                <div className={styles.__container}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Miyka96">Miyka96</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/fefusphera">fefusphera</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/jupidev1586">jupidev1586</a>
                    {/* <a target="_blank" rel="noreferrer" href="">Chiarads23</a> */}
                    <a target="_blank" rel="noreferrer" href="https://github.com/Cb040719">cb040719</a>
                </div>
            	</div>
						</Col>
						<Col xs={12} sm={7} className="text-center">
							<div className={styles.__logo}>
							<h5></h5>
									<Image src={logo} height={120} width={120} alt='logo footer' />
							
								<p>Made with Next.js</p>
							</div>
						</Col>
						<Col xs={12} sm={3}>
							<div className={styles.__socialIcons}>
                <h5>Author&apos; Linkedin</h5>
                <div className={styles.__container}>
									<ul>
										<li>
											<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/micaela-seminara/">Micaela Seminara</a>
										</li>
										<li>
											<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federica-terranova-073939231/">Federica Terranova</a>
										</li>
										<li>
											<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gianpaolo-buono/">Gianpaolo Buono</a>
										</li>
										<li>
											<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/claudiobello47/">Claudio Bello</a>
										</li>
									</ul>
                </div>
            	</div>
						</Col>
					</Row>
        </Container>
			</div>
    )
};

export default Footer;