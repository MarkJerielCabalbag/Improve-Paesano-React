import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top shadow p-3 mb-5">
        <div className="container-sm">
          <img src="src/assets/paesano_logo.jpg" style={{ width: "50px" }} />
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
              <Link to="home">Home</Link>
              <Link to="book">Book</Link>
              <Link to="account">Account</Link>
              <Link to="creator">Creator</Link>
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
