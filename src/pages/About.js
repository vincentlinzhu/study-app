import React from "react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <div class="nav-button">
          <Link class="navigator" to="/">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}
