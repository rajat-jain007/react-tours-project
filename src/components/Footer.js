import React from "react";
import { socialLinks } from "../Links";
import NavbarFooter from "./NavbarFooter";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="section footer">
        <NavbarFooter parentClass="footer-links" itemClass="footer-link" />

        <ul class="footer-icons">
          {socialLinks.map((socialLink) => {
            const { id, href, icon } = socialLink;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  class="footer-icon"
                >
                  <i class={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
