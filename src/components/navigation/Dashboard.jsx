import {
  faBook,
  faHome,
  faUserAlt,
  faUserAltSlash,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top shadow p-3 mb-5">
        <div className="container-sm">
          <img
            src="src/assets/paesano_logo.jpg"
            style={{ width: "50px" }}
            className="me-5"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-3">
              <Link className="link link-secondary" to="home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
              <Link className="link link-secondary" to="book">
                <FontAwesomeIcon icon={faBook} /> Book
              </Link>

              <Link className="link link-secondary" to="creator">
                <FontAwesomeIcon icon={faUserCheck} />
                Creator
              </Link>

              <Link className="link link-secondary" to="account">
                <FontAwesomeIcon icon={faUserAlt} />
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
