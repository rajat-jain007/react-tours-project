import React from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../Links";
import NavbarFooter from "./NavbarFooter";

function Navabar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <NavbarFooter parentClass="nav-links" itemClass="nav-link1" />

          <ul className="nav-icons">
            {socialLinks.map((links) => {
              const { id, href, icon } = links;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navabar;
