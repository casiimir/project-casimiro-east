import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/layout/Home.module.scss";
import NavbarMain from "../components/Navbar";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Journaly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <NavbarMain />

      <CardList list={"cities"} title={"Top rated cities"} />
      <CardList list={"experiences"} title={"Top experiences"} />

      {/* <Footer/> */}
    </div>
  );
};

export default Home;
