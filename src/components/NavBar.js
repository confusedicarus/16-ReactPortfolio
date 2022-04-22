import React from "react";
import "./styles/NavBar.css";
import Nav from "react-bootstrap/Nav";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div classname="navBarContainer">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange("Work")}
            className={currentPage === "Work" ? "nav-link active" : "nav-link"}
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://confusedicarus.github.io/07-professional-portfolio-update/assets/Resume%202022.pdf"
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
