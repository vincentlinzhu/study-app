import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export function Pomodoro() {
  return (
    <div class="restricted-text header-container">
      <div class="header pomodoro-header">
        <div class="nav-button-div">
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="/">
                Home
              </Link>
            </div>
          </nav>
        </div>

        <h1 class="header-text">Pomodoro</h1>
      </div>

      <div class="description">
        <h2></h2>
      </div>

      {/* <div className="todo">
        <h1>Todo</h1>
        <Form />
      </div> */}
      <Footer />
    </div>
  );
}
