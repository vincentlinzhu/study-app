import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  function playAudio(url) {
    new Audio(url).play();
  }
  return (
    <div>
      <h2 class="card-title">{props.name}</h2>
      <p class="card-study">{props.study}</p>
      <p class="card-break">{props.break}</p>
      <p class="card-repeat">{props.repeat}</p>
      <nav class="temp">
        <div class="card-nav-button">
          <audio controls autoplay name="media">
            {/* <source src="../media/bunny.mp3" type="audio/mpeg" />
            <source src="../media/bunny.ogg" type="audio/ogg" /> */}
            <source src="/audio/bunny.ogg" type="audio/ogg"></source>
          </audio>
          {/* crossorigin="use-credentials" */}
        </div>
      </nav>
    </div>
  );
}
