import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import CustomTimer from "../utils/CustomTimer";
import MusicCard from "../components/MusicCard";

export function Custom(props) {
  return (
    <div>
      <div class="restricted-text header-container">
        <div class="header custom-header">
          <div class="nav-button-div">
            <nav>
              <div class="nav-button">
                <Link class="navigator" to="/">
                  Home
                </Link>
              </div>
            </nav>
          </div>

          <h1 class="header-text">Custom Timer</h1>
        </div>
      </div>
      <div class="pomodoro-divider"></div>
      <div class="middle">
        <div className="custom-timer">
          <h1 class="custom-timer-text">
            Input the time in minutes and start!
          </h1>
          <CustomTimer path={props.path} />
          <div class="card card-four pomodoro-music-card">
            <MusicCard
              name="Music"
              study=""
              break="Here's some of our favorite music for studying!"
              repeat=""
              path=""
            />
          </div>
        </div>
        <div className="TodoSection">
          <div className="todo-app">
            <TodoList />
          </div>
        </div>
      </div>

      {/* <div className="todo">
          <h1>Todo</h1>
          <Form />
        </div> */}
      <Footer />
    </div>
  );
}
