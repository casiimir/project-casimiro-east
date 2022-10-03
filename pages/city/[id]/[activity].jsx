import { useRouter } from "next/router";
import {getActivity} from '../../../api/api';
import {useState, useEffect} from 'react';
import styles from "../../../styles/layout/Activity.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { createCart } from "../../api/api";

const Activity = () => {

    const [activity, setActivity] = useState([]); 
    const router = useRouter();
    const activityId = router.query.activity;

    useEffect(() => {
        getActivity(activityId,setActivity);
    },[activityId])

    const onHandleCart = () => {
        createCart();
    }

    return(
        <div className={styles.Activity}>
            <Navbar/>
            <h1>{activity?.title}</h1>
            <img src={activity?.cover_image_url} alt="" />
            <p>{activity?.description}</p>
            <div className={styles.btnContainer}>
                <h4>{activity?.retail_price?.formatted_iso_value}</h4>
                <button onClick={onHandleCart}>BOOK IT!</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Activity;

