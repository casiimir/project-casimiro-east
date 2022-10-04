import { useRouter } from "next/router";
import { getActivity } from "../../../api/api";
import { useState, useEffect } from "react";
// import { cartList } from "../../../utils/cartList";
import styles from "../../../styles/layout/Activity.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const router = useRouter();
  const activityId = router.query.activity;

  useEffect(() => {
    getActivity(activityId, setActivity);
  }, [activityId]);

  const addToCart = (e) => {
    if (e.target.id === activityId) {
      if (typeof window !== "undefined") {
        const cartList = [...JSON.parse(localStorage.getItem("cartList"))];

        cartList.push(activity);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        console.log(JSON.parse(localStorage.getItem("cartList")));
      }
    }
  };

  return (
    <div className={styles.Activity}>
      <Navbar />
      <h1>{activity?.title}</h1>
      <img src={activity?.cover_image_url} alt="" />
      <p>{activity?.description}</p>
      <div className={styles.btnContainer}>
        <h4>{activity?.retail_price?.formatted_iso_value}</h4>
        <button onClick={addToCart} id={activity?.uuid}>
          BOOK IT!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
