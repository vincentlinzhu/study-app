import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div>
      <h2 class="card-title">{props.name}</h2>
      <p class="card-study">{props.study}</p>
      <p class="card-break">{props.break}</p>
      <p class="card-repeat">{props.repeat}</p>
      <nav class="temp">
        <div class="card-nav-button">
          <Link class="card-navigator" to={props.path}>
            Create
          </Link>
        </div>
      </nav>
    </div>
  );
}
