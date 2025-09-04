import React from "react";

const footer = () => {
  return (
    <div>
      <div className="container footer" >
        {" "}
        <footer className="py-3 my-4"  >
          {" "}
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 "style={{color: "#fff"}}>
                Home
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 "style={{color: "#fff"}}>
                Features
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 "style={{color: "#fff"}}>
                Pricing
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 "style={{color: "#fff"}}>
                FAQs
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 "style={{color: "#fff"}}>
                About
              </a>
            </li>{" "}
          </ul>{" "}
          <p className="text-center " style={{color: "#fff"}}>© 2025 Company, Inc</p>{" "}
        </footer>{" "}
      </div>
    </div>
  );
};

export default footer;
