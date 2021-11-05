import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export function Home() {
  return (
    <div>
      <div class="header">
        <h1>Focus.</h1>
      </div>
      <nav>
        <div class="nav-button">
          <Link class="navigator" to="about">
            Create New Timer
          </Link>
        </div>
      </nav>
      <div class="description">
        <h2>Make a new timer that matches your study style!</h2>
      </div>
      <div class="card-section">
        <div class="card card-one">
          <h2>Pomodoro</h2>
        </div>
        <div class="card card-two">
          <h2>Seinfield</h2>
        </div>
        <div class="card card-three">
          <h2>Grapefruit</h2>
        </div>
      </div>

      <div className="todo">
        <h1>Todo</h1>
        <Form />
      </div>
    </div>
  );
}
