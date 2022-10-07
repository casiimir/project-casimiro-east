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
import LoadingBar from 'react-top-loading-bar'


export let cartList = [];

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const [cartListLength, setCartListLength] = useState(0);
  const router = useRouter();
  const activityId = router.query.activity;

  useEffect(() => {
    getActivity(activityId, setActivity);
  }, [activityId]);

  useEffect(() => {
    cartList = [...JSON.parse(localStorage.getItem("cartList"))];
    setCartListLength(cartList.length);
  }, [])

  const addToCart = (e) => {
    if (e.target.id === activityId) {
      cartList = [...JSON.parse(localStorage.getItem("cartList"))];

      cartList.push(activity);
      localStorage.setItem("cartList", JSON.stringify(cartList));
      console.log(JSON.parse(localStorage.getItem("cartList")));
      setCartListLength(cartList.length)
      console.log(cartListLength)
    }
    new Swal('Succesfully added to cart!','','success');
  };


  const [progress, setProgress] = useState(0);
  const [overlay, setOverlay] = useState(false);

  useEffect( () => {
    setProgress(100)
  }, [])

  return (
    <div className={styles.Activity}>
      <LoadingBar
        color='#ff800b'
        progress={progress}
        onLoaderFinished={() =>{ setProgress(0), setOverlay(true)}}
      />

      {
        !overlay ? <div className="overlay"></div>
        : 
        <div></div>
      }
      <Navbar cartQty={cartList.length}/>
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
            
            <div className={styles.Paragraph_wrapper}>
              <h4 className={styles.Paragraph_title}>About this <span> experience</span>:</h4>
              <p className={styles.Paragraph}>{activity?.description}</p>
            </div>
            <div className={styles.Paragraph_wrapper}>
                  <div className={styles.Paragraph_wrapper_row}>
                      <ul>
                        <li className={(activity?.best_price === true ? styles.active : styles.not_active)}>Best Price  </li>
                        <li className={(activity?.daily === true ? styles.active : styles.not_active)}>Daily</li>
                        <li className={(activity?.exclusive === true ? styles.active : styles.not_active)}>Exclusive</li>
                        <li className={(activity?.free_cancellation === true ? styles.active : styles.not_active)}>Free Cancellation</li>
                        <li className={(activity?.is_available_today === true ? styles.active : styles.not_active)}>Is Available Today</li>
                        <li className={(activity?.is_available_tomorrow === true ? styles.active : styles.not_active)}>Is Available Tomorrow</li>
                      </ul>
                      <div className={styles.Meeting_point_wrapper}>
                        <h4 className={styles.Paragraph_title}>Meeting <span>point</span>:</h4>
                        <p>{activity?.meeting_point_markdown}</p>
                      </div>
                  </div>
            </div>

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
