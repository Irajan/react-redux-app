import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.navBar.css";

function NavBar({ active }) {
  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-item">
          <Link
            title="View Profile"
            to="/profile"
            className={`nav-link ${active === "profile" && "active"}`}
          >
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            title="View questions"
            to="/question-answer"
            className={`nav-link ${active === "qAndA" && "active"}`}
          >
            Qun &amp; Ans
          </Link>
        </li>

        <li className="nav-item">
          <Link
            title="View all users"
            to="/list"
            className={`nav-link ${active === "list" && "active"}`}
          >
            Users
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}

export default NavBar;
