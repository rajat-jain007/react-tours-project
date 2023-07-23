import React from "react";
import { PageLinks } from "../Links";

function NavbarFooter({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {PageLinks.map((links) => {
        const { id, href, text } = links;
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarFooter;
