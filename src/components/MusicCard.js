import React from "react";
import { Link } from "react-router-dom";

export default function (prop) {
  function playAudio(url) {
    new Audio(url).play();
  }
  return (
    <div>
      <h2 class="card-title">{prop.name}</h2>
      <p class="card-study">{prop.study}</p>
      <p class="card-break">{prop.break}</p>
      <p class="card-repeat">{prop.repeat}</p>
      <nav class="temp">
        <div class="card-nav-button">
          <audio controls>
            <source src="media/bunny.ogg" type="audio/ogg" />
          </audio>

          {/* crossorigin="use-credentials" */}
        </div>
      </nav>
    </div>
  );
}