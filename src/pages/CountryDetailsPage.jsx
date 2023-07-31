/* eslint-disable react/jsx-no-undef */
import axios from "axios";
import { useEffect, useState } from "react";
// import HomePage from "./HomePage";
import { Link } from "react-router-dom";
function CountryDetails() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const countryDetail = async () => {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries "
      );
      const contriesData = response.data;
      setDetails(contriesData);
    };
    countryDetail();
  }, []);
  console.log(details);
  // eslint-disable-next-line no-undef

  return (
    <>
      <h1>WikiCountries : Country Details</h1>

      {details.map((oneCountry) => {
        return (
          <>
            {/* <img
              src={`https://flagpedia.net/data/flags/icon/72x54/ ${oneCountry.alpha2Code.toLowerCase()}.png`}
            /> */}
            <Link to="/countryDetail/ ${oneCountry.alpha3Code}">
              {" "}
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {oneCountry.name.common}
              </p>
            </Link>
            <hr></hr>
            {/* // eslint-disable-next-line react/jsx-no-undef, react/jsx-no-undef */}
            {/* <Link> <p> {oneCountry} </p></Link> */}
            {/* {/* </Link> */}
          </>
        );
      })}
    </>
  );
}

export default CountryDetails;
