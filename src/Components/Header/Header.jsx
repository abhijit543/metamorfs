import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="py-2 px-4 top-header text-white">
        <div>
          <span>
            <i className="fa fa-phone"></i> Sales: +1.406.844.2550
          </span>
        </div>
        <div className="position-relative ">
          <span className="dollars">
            <i className="fas fa-dollar-sign"></i> US Dollar
          </span>

          <div className="header-dollar-dropdown">
            <ul className="ul-list-header">
              <li>
                <i className="fab fa-canadian-maple-leaf"></i> Canadian Dollar
              </li>
              <li>
                <i className="fas fa-euro-sign"></i> Euro
              </li>
              <li>
                <i className="fas fa-pound-sign"></i> British Pound
              </li>
            </ul>
          </div>
        </div>

        <div className="top-navitems">
          <ul className="navbar-nav ms-auto d-flex navItems">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fas fa-user"></i> Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fas fa-check-square"></i> Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fas fa-history"></i> Order History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="far fa-heart"></i> Wish List (0)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fas fa-cart-arrow-down"></i> Cart - $92.95
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 navBars-mid">
        <a className="navbar-brand fw-bold" href="#">
          Hardware<span className="text-success">JET</span>
        </a>

        <form className="d-flex mx-auto" role="search">
          <input className="form-control me-2" type="search" placeholder="Search by Part Number" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>

      <nav className="navbar navbar-expand-lg last-navBar">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item navItem-new">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home"></i> HOME
                </Link>
              </li>
              <li className="nav-item navItem-new">
                <a className="nav-link" href="#">
                  SEARCH INVENTORY
                </a>
              </li>
              <li className="nav-item navItem-new">
                <a className="nav-link" href="#">
                  MANUFACTURERS
                </a>
              </li>
              <li className="nav-item navItem-new">
                <a className="nav-link" href="#">
                  SPECIALS
                </a>
              </li>
              <li className="nav-item navItem-new">
                <a className="nav-link" href="#">
                  AFFILIATES
                </a>
              </li>
              <li className="nav-item navItem-new">
                <a className="nav-link" href="#">
                  MY ACCOUNT
                </a>
              </li>
              <li className="nav-item navItem-new">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
