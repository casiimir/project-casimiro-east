import { useRouter } from "next/router";
import {getActivity} from '../../../api/api';
import {useState, useEffect} from 'react';
const Activity = () => {
    const [activity, setActivity] = useState([]); 
    const router = useRouter();
    const activityId = router.query.activity;
    useEffect(() => {
        getActivity(activityId,setActivity);
    },[activityId])
    return(
        <h1>
            {activity?.title}
        </h1>
    )
}

export default Activity;