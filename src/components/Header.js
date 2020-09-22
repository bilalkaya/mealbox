import React from "react";

const Header = ({ showMainMenu, showDiscountMenu }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/mealbox">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.jpg"}
            width="180px"
            alt="mealbox logo"
            loading="lazy"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#"
                onClick={(e) => showMainMenu(e)}
              >
                Ana Menü
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#"
                onClick={(e) => showDiscountMenu(e)}
              >
                İndirimli Menüler
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
