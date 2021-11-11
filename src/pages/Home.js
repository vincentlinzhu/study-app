import Carousel from "../components/Carousel";
import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export function Home() {
  return (
    <div>
      <div className="App">
        <Carousel />
      </div>
      <div class="header">
        <h1>Focus.</h1>
      </div>
      <div className="timer">
        <h1>00:00</h1>
      </div>

      <div class="description">
        <h2>Make a new timer that matches your study style!</h2>
      </div>
      <div class="card-section">
        <div class="card card-one">
          <h2 class="card-title">Pomodoro</h2>
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="about">
                Create New Timer
              </Link>
            </div>
          </nav>
        </div>
        <div class="card card-two">
          <h2 class="card-title">Seinfield</h2>
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="about">
                Create New Timer
              </Link>
            </div>
          </nav>
        </div>
        <div class="card card-three">
          <h2 class="card-title">Custom</h2>
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="about">
                Create New Timer
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="todo">
        <h1>Todo</h1>
        <Form />
      </div>
    </div>
  );
}
