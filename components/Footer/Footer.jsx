import styles from "../../styles/layout/Footer.module.scss";
// import logo from "../../public/logo-scont_3.png";

const Footer = () => {
    

    return(

        <div className={styles.Footer}>

            <div className="list">
                <h4>Placeholder</h4>
                <p>enniente</p>
                <p>enniente</p>
                <p>enniente</p>
            </div>
            <div className="logo">
                <p>made with 😡 and Next.js</p>
            </div>
            <div className="socialIcons">
                <h4>Contacts</h4>
                <div className="container">
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