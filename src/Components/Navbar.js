import React from "react";

export default function Navbar() {
  return (
    <div className="top-nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/#">
          <h1>Shalom</h1>
          <span>A Beliver's Hub</span>{" "}
        </a>
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
              <a class="nav-link" href="#">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./eventlist">
                Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
