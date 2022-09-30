import { useRouter } from "next/router";
import { getAllActivities } from "../../../api/api";
import { useState, useEffect } from "react";
import Link from "next/link";

const Activities = () => {
  const router = useRouter();
  const cityId = router.query.id;
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getAllActivities(cityId, "relevance", setActivities)
  }, []);

  const handleChange = (e) => {
    getAllActivities(cityId,e.target.value,setActivities)
  }

  return (
    <>
      <h1>all activities aviable</h1>

      <select onChange={handleChange}>
        <option value="relevance">Relevance</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>

      <ul>
        {activities?.map((el, i) => (
          <li key={i}>
            <Link href={`/city/${cityId}/${el?.uuid}`}>
              <a>{el?.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Activities;
