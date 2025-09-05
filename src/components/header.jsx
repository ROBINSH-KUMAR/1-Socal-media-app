import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


export default function header({ selectedTab, dispatch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="custom-header">
      <header className="custom-header-bg">
        <div className="custom-container">
          <div className="custom-navbar">
            {/* Mobile Toggle Button */}
            <button
              className="custom-menu-toggle d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            {/* Logo */}
            <a href="/" className="custom-logo">
              <svg
                className="custom-logo-icon"
                width="40"
                height="32"
                role="img"
                aria-label="Logo"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
              <span className="fs-4 texts">Kyora </span>{" "}
              <span className="icons">
                <FontAwesomeIcon icon={faEye} />
              </span>
            </a>
            {/* Desktop Nav Links */}
            <ul
              className="custom-nav-links d-none d-lg-flex nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
              style={{ marginLeft: "7rem" }}
            >
              <li>
                <a
                  href="#"
                  className="custom-link"
                  onClick={(e) => {
                    // dispatch({ type: String(e.target.innerText) });
                    dispatch({ type: "Home" });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="custom-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="custom-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="custom-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="custom-link">
                  About
                </a>
              </li>
            </ul>
            {/* Search & Buttons */}
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-none d-lg-flex"
              role="search"
            >
              {" "}
              <input
                type="search"
                className="form-control form-control-dark textbgdark"
                placeholder="Search..."
                aria-label="Search"
              />{" "}
            </form>{" "}
            <div className="text-end">
              {" "}
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>{" "}
              <button type="button" className="btn btn-dark">
                Sign-up
              </button>{" "}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={`custom-mobile-menu-left side-bar ${menuOpen ? "open" : ""}`}
      >
        <div
          style={{
            height: "3rem",
            color: "whitesmoke",
            fontWeight: "400",
            opacity: "0.5",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            // fontStyle: "italic",
            textAlign: "left",
          }}
        >
          <span className="" style={{fontSize:"1.3rem" }}>Search</span>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 "
              role="search"
            >
              {" "}
              <input
                type="search"
                className="form-control form-control-dark textbgdark"
                placeholder="Search..."
                aria-label="Search"
              />{" "}
            </form>{" "}
          </li>
          <li
            className="nav-item"
            onClick={(e) => {
              // dispatch({ type: String(e.target.innerText) });
              dispatch({ type: "Home" });
            }}
          >
            {" "}
            <a
              href="#"
              className={`nav-link navlink text-white ${
                selectedTab === "Home" && "activee"
              }`}
              aria-current="page"
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#home"></use>
              </svg>
              <span style={{ marginRight: "8px" }}>🏠</span>Home
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              className={`nav-link navlink text-white ${
                selectedTab === "Create Post" && "activee"
              }`}
              onClick={() => dispatch({ type: "Create Post" })}
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <span style={{ marginRight: "8px" }}>✍️</span> Create Post
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              className={`nav-link navlink text-white ${
                selectedTab === "Orders" && "activee"
              }`}
              onClick={() => dispatch({ type: "Orders" })}
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#table"></use>
              </svg>
              <span style={{ marginRight: "8px" }}>📦</span> Orders
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              className={`nav-link navlink text-white ${
                selectedTab === "Products" && "activee"
              }`}
              onClick={() => dispatch({ type: "Products" })}
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#grid"></use>
              </svg>
              <span style={{ marginRight: "8px" }}>🛒</span> Products
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              className={`nav-link navlink text-white ${
                selectedTab === "Customers" && "activee"
              }`}
              onClick={() => dispatch({ type: "Customers" })}
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span style={{ marginRight: "8px" }}>👥</span> Customers
            </a>{" "}
          </li>{" "}
        </ul>
      </div>

      {/* Optional overlay */}
      {menuOpen && (
        <div
          className="custom-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
