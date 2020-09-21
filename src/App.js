import React from "react";
import menu from "./menu.yaml";
import logo from "./images/logo.jpg";

function App() {
  console.log(menu.menus);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img src={logo} width="180px" alt="mealbox logo" loading="lazy" />
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
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Ana Yemekler
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
