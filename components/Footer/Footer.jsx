import styles from "../../styles/layout/Footer.module.scss";
// import logo from "../../public/logo-scont_3.png";

const Footer = () => {
    

    return(

        <div className={styles.Footer}>

            <div className={styles.__list}>
                <h4>Authors</h4>
                <p>Miyka96</p>
                <p>fefusphera</p>
                <p>jupidev1586</p>
                <p>Chiarads23</p>
                <p>cb040719</p>
            </div>
            <div className={styles.__logo}>
                <p>made with 😡 and Next.js</p>
            </div>
            <div className={styles.__socialIcons}>
                <h4>Contacts</h4>
                <div className={styles.__container}>
                    <p>facebook</p>
                    <p>instagram</p>
                    <p>twitter</p>
                    <p>linkedin</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;