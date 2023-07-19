import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="top-nav">
      <nav class="navbar navbar-expand-lg ">
        <Link class="navbar-brand" to="/">
          <img src="../images/shalom_logo.jpg" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/eventlist">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/chruchlist">
                Chruch
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signin">
                Sign in
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
