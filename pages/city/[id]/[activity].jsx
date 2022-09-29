import { useRouter } from "next/router";
import Link from "next/link";
const Activity = () => {
    const router = useRouter();
    const id = router.query.id;
    const activity = router.query.activity
    return(
        <h1>
            id città : {id} // id attività : {activity}
        </h1>
    )
}

export default Activity;