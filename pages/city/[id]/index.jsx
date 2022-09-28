import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/future/image";
import HeroCity from "../../../components/HeroCity";

const cityPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cityData, setCityData] = useState([]);
  const [foodExp, setFoodExp] = useState([]);
  const [museumExp, setMuseumExp] = useState([]);
  const [outdoorExp, setOutdoorExp] = useState([]);

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
    // food category
    axios
      .get(
        `https://api.musement.com/api/v3/categories/221/activities?city=${id}&offset=0&limit=100&sort_by=relevance`
      )
      .then((res) => {
        setFoodExp(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // museum category
    axios
      .get(
        `https://api.musement.com/api/v3/categories/209/activities?city=${id}&offset=0&limit=100&sort_by=relevance`
      )
      .then((res) => {
        setMuseumExp(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // outdoor category
    axios
      .get(
        `https://api.musement.com/api/v3/categories/194/activities?city=${id}&offset=0&limit=100&sort_by=relevance`
      )
      .then((res) => {
        setOutdoorExp(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [id]);

  return (
    <>
      {cityData.cover_image_url && (
        <HeroCity
          image={cityData.cover_image_url}
          title={cityData.name}
          content={cityData.content}
        />
      )}

      {/* IN QUESTA SEZIONE AL POSTO DELLE LISTE, DEVONO ESSERE MAPPATE LE CARDS, CON LE DOVUTE PROPS A CUI VERRANNO PASSATE LE IMMAGINI E LE INFO */}
      
      <h1>Food Experiences:</h1>
      <ul>
        {foodExp.map((item) => (
          <li>
            <Link href={`/city/${id}/${item.uuid}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h1>History Experiences:</h1>
      <ul>
        {museumExp.map((item) => (
          <li>
            <Link href={`/city/${id}/${item.uuid}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h1>Outdoor Experiences:</h1>
      <ul>
        {outdoorExp.map((item) => (
          <li>
            <Link href={`/city/${id}/${item.uuid}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* {cityData.cover_image_url && (
        <Image
          src={cityData.cover_image_url}
          alt="Homepage"
          width={600}
          height={400}
        />
      )} */}
    </>
  );
};

// TODO: in console avete tutto l'oggetto della città

export default cityPage;
