import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import TodoList from "../components/TodoList";
import Clock from "../utils/Clock";

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

      <div class="timer">
        <Clock />
      </div>

      <div class="middle">
        <div class="description">
          <h2>Create timers to match your study style.</h2>
        </div>
        <div class="card-section">
          <div class="card card-one">
            <Card
              name="Pomodoro"
              study="Study Time: 25 min"
              break="Break Time: 5 min"
              repeat="REPEAT"
            />
          </div>
          <div class="card card-two">
            <Card
              name="Time Chunking"
              study="Set a managable amount of time for first task"
              break="Complete the task in that set of time"
              repeat="REPEAT process with the next task"
            />
          </div>
          <div class="card card-three">
            <Card
              name="Custom"
              study="Study Time: Custom"
              break="Break Time: Custom"
              repeat="REPEAT"
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
