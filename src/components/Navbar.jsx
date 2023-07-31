import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
        <Link to="/">HomePage</Link>
        <Link to="/:countryId">Country</Link>
        <Link to="/${countryId.alpha3Code}">Country</Link>
      </nav>
    </>
  );
}

export default Navbar;
