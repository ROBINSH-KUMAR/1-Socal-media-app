import React from "react";

const navbar = ({ selectedTab, dispatch }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 textbgdark side-bar nam  d-none d-lg-flex  "
      style={{ width: "18vw", minWidth: "200px" }}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none "
        style={{ padding: "0px" }}
      >
        {" "}
        <svg
          className="bi pe-none me-2 "
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4 text"> </span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto ">
        {" "}
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
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />{" "}
          <strong>Bdo</strong>{" "}
        </a>{" "}
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default navbar;
