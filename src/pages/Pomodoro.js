import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import PomodoroTimer from "../utils/PomodoroTimer";

export function Pomodoro() {
  return (
    <div>
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

          <h1 class="header-text">Pomodoro Timer</h1>
        </div>
      </div>
      <div class="pomodoro-divider"></div>
      <div class="middle">
        <div className="pomodoro-timer">
          <h1 class="pomodoro-timer-text">Timer started!</h1>
          <PomodoroTimer />
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
