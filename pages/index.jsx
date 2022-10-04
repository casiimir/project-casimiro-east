import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/layout/Home.module.scss";
import NavbarMain from "../components/Navbar";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Journaly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <NavbarMain />
      <CardList list={"cities"} title={"Top rated cities"} className="top_rated" />
      <CardList list={"experiences"} title={"Top experiences"} className="top_experiences" />
      <Footer />
    </div>
  );
};

export default Home;
