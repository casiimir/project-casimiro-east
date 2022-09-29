import styles from "../../styles/layout/Footer.module.scss";
import logo from "../../public/logo.png";
import Image from "next/future/image";

const Footer = () => {
    

    return(

        <div className={styles.Footer}>

            <div className={styles.__list}>
                <h4>Authors' GitHub</h4>
                <div className={styles.__container}>
                    <a href=""><p>Miyka96</p></a>
                    <a href=""><p>fefusphera</p></a>
                    <a href=""><p>jupidev1586</p></a>
                    <a href=""><p>Chiarads23</p></a>
                    <a href=""><p>cb040719</p></a>
                </div>
            </div>
            <div className={styles.__logo}>
                <Image src={logo} height={120}/>
                <p>Made with 😡 and Next.js</p>
            </div>
            <div className={styles.__socialIcons}>
                <h4>Contacts</h4>
                <div className={styles.__container}>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;