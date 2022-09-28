import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/future/image";

const cityPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.musement.com/api/v3/cities/${id}`)
      .then((res) => {
        setCityData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [id]);

  return (
    <>
      <h1>city {id}</h1>
      <p>{cityData.name}</p>
      <p>{cityData.content}</p>

      {cityData.cover_image_url && (
        <Image
          src={cityData.cover_image_url}
          alt="Homepage"
          width={600}
          height={400}
        />
      )}
    </>
  );
};


// TODO: in console avete tutto l'oggetto della città

export default cityPage;
