import { useRouter } from "next/router";
import { getActivity } from "../../../api/api";
import { useState, useEffect } from "react";
import styles from "../../../styles/layout/Activity.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Map from "../../../components/Map";
import { TbMapOff } from "react-icons/tb";
import Swal from 'sweetalert2'
import "react-lazy-load-image-component/src/effects/blur.css";

export let cartList = [];

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const router = useRouter();
  const activityId = router.query.activity;

  useEffect(() => {
    getActivity(activityId, setActivity);
  }, [activityId]);

  if (typeof window !== "undefined") {
    if (localStorage.getItem("cartList") === null) {
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
    new Swal('Elemento aggiunto al carrello','','success');
  };

  return (
    <div className={styles.Activity}>
      <Navbar />
      <div className={`${"container"}`}>
        <div className={`${"row"}`}>
          <div className={`${"col"}`}>
            <h1>{activity?.title}</h1>
            {activity.cover_image_url !== undefined ? (
              <img
                className={"mw-100"}
                src={activity.cover_image_url.slice(0, -5)}
                alt=""
              />
            ) : (
              <div></div>
            )}
            <p className={styles.Paragraph}>{activity?.description}</p>
            <div className={styles.btnContainer}>
              <h4>{activity?.retail_price?.formatted_iso_value}</h4>
              <button onClick={addToCart} id={activity?.uuid}>
                BOOK IT!
              </button>
            </div>

            <div className={styles.MainMap}>
              {activity.latitude !== undefined ? (
                <Map
                  latitude={activity?.latitude}
                  longitude={activity?.longitude}
                />
              ) : (
                <div className={styles.Map_container}>
                  <h5>Map not available for this activity</h5>
                  <TbMapOff />
                </div>
              )}
            </div>
            <div className="cont-button mt-5">
              <button className={`${"button button--dark"}`}>
                <Link href={`/city/${activity?.city?.id}/activities`}>
                  <a className={styles.LinkList}>
                    See all available activities
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
