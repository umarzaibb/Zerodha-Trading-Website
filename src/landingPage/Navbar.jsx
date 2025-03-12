import React from "react";
import "./global.css";

function Navbar() {
  return (
    <>
      <nav class="fixed-top navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img id="nav-logo" src="/media/logo.svg"></img>
          </a>
          <button
            class="navbar-toggler navbar-closebtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-disabled="true">
                  <i class="fa-solid fa-bars nav-logo-burger"></i>
                </a>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
