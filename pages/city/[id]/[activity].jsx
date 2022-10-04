import { useRouter } from "next/router";
import { getActivity } from "../../../api/api";
import { useState, useEffect } from "react";
import styles from "../../../styles/layout/Activity.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";
import Map from "../../../components/Map";
import {TbMapOff} from 'react-icons/tb';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

let cartList = [];


const Activity = () => {
  const [activity, setActivity] = useState([]);
  const router = useRouter();
  const activityId = router.query.activity;

  useEffect(() => {
    getActivity(activityId, setActivity);
  }, [activityId]);

	if (typeof window !== "undefined") {
		if(localStorage.getItem("cartList") === null) {
			localStorage.setItem("cartList", JSON.stringify(cartList));
		}
	}

  const addToCart = (e) => {
    if (e.target.id === activityId) {
      if (typeof window !== "undefined") {
        cartList = [...JSON.parse(localStorage.getItem("cartList"))];

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
      { activity.cover_image_url!== undefined ?
        <LazyLoadImage src={(activity.cover_image_url).slice(0, -5)} alt="" effect="blur" width={"100%"}/> :
        <div></div>
      }
      <p>{activity?.description}</p>
      <div className={styles.btnContainer}>
        <h4>{activity?.retail_price?.formatted_iso_value}</h4>
        <button onClick={addToCart} id={activity?.uuid}>
          BOOK IT!
        </button>
      </div>
      {
        activity.latitude !== undefined ?
        <Map latitude={activity?.latitude} longitude={activity?.longitude}/>
        :
        <div className={styles.Map_container}>
          <h5>Mappa non disponibile per questa attività</h5>
          <TbMapOff/>
        </div>

      }
      <Footer />
    </div>
  );
};

export default Activity;
