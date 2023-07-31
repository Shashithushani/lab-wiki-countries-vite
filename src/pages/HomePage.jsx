/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryDetail = async () => {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries "
      );
      const contriesData = response.data;
      setCountries(contriesData);
    };
    countryDetail();
  }, []);
  console.log(countries);
  return (
    <>
      <h1>WikiCountries : Your Guide to the world</h1>

      {countries.map((oneCountry) => {
        // eslint-disable-next-line react/jsx-key
        return (
          // eslint-disable-next-line react/jsx-key
          <div key={oneCountry._id}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
            />
            <Link to={`/${oneCountry.alpha3Code}`}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {oneCountry.name.common}
              </p>
            </Link>
          </div>
        );
        // eslint-disable-next-line no-unreachable
      })}
    </>
  );
}

export default HomePage;
