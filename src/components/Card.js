import React from "react";
import { Link } from "react-router-dom";

export default function (prop) {
  return (
    <div>
      <h2 class="card-title">{prop.name}</h2>
      <p class="card-study">{prop.study}</p>
      <p class="card-break">{prop.break}</p>
      <p class="card-repeat">{prop.repeat}</p>
      <nav class="temp">
        <div class="card-nav-button">
          <Link class="card-navigator" to="pomodoro">
            Create
          </Link>
        </div>
      </nav>
    </div>
  );
}
