import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";
import { NavbarItems } from "./NavbarItems";

function Navebar() {
  const [onClick, setClick] = useState(false);

  function clickHandler() {
    setClick(!onClick);
  }

  return (
    <nav className="navbar">
      <Link to="/portfolio_game" className="navbar-logo">
        Portfolio
        <i class="fas fa-gamepad"></i>
      </Link>
      <div className="menu-icon" onClick={clickHandler}>
        <i className={onClick ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={onClick ? "nav-menu active" : "nav-menu"}>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            className="nav-links"
            href="/portfolio_game/resume/Resume_Kecheng Tao_G.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navebar;
