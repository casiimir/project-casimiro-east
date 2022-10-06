import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "../../styles/layout/Footer.module.scss";
import logo from "../../public/logo.png";
import Image from "next/future/image";

const Footer = () => {
    

  return(
		<div className={styles.Footer}>
      <Container>
				<Row>
					<Col xs={12} md={3}>
						<div className={`${styles.__list} ${'text-center text-md-start'}`}>
								<h5>Authors GitHub</h5>
								<div className={styles.__container}>
										<a target="_blank" rel="noreferrer" href="https://github.com/Miyka96">Miyka96</a>
										<a target="_blank" rel="noreferrer" href="https://github.com/fefusphera">fefusphera</a>
										<a target="_blank" rel="noreferrer" href="https://github.com/Chiarads23">Chiarads23</a>
										<a target="_blank" rel="noreferrer" href="https://github.com/jupidev1586">jupidev1586</a>
										<a target="_blank" rel="noreferrer" href="https://github.com/Cb040719">cb040719</a>
								</div>
						</div>
					</Col>
					<Col xs={12} md={6} className="text-center my-4">
						<div className={styles.__logo}>
						<h5></h5>
								<Image src={logo} height={120} width={120} alt='logo footer' />
							<p>Made with Next.js</p>
						</div>
					</Col>
					<Col xs={12} md={3}>
						<div className={`${'text-center text-md-end'}`}>
      		      <h5>Authors Linkedin</h5>
      		      <div className={styles.__container}>
								<ul>
									<li>
										<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/micaela-seminara/">Micaela Seminara</a>
									</li>
									<li>
										<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federica-terranova-073939231/">Federica Terranova</a>
									</li>
									<li>
										<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chiara-desantis/">Chiara De Santis</a>
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