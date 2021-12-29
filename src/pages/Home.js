import React from "react";
import TodoList from "../components/TodoList";
import Clock from "../utils/Clock";
import Footer from "../components/Footer";
import Card from "../components/Card";
import MusicCard from "../components/MusicCard";

//Changed

export function Home() {
  return (
    <div class="back">
      <div class="restricted-text content-container">
        <div class="header">
          <h1 class="header-text">Focus.</h1>
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
                path="pomodoro"
              />
            </div>
            {/* <div class="card card-two">
              <Card
                name="Time Chunking"
                study="Set a manageable amount of time for first task"
                break="Complete the task in that set of time"
                repeat="REPEAT process with the next task"
                path="chunk"
              />
            </div> */}
            <div class="card card-three">
              <Card
                name="Custom"
                study="Study Time: Custom"
                break="Break Time: Custom"
                repeat="REPEAT"
                path="custom"
              />
            </div>
            <div class="card card-four">
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

        {/* <div className="todo"> */}
        {/* <h1>Todo</h1> */}
        {/* <div className="TodoSection"> 
          <Todo />
        </div> */}
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
}
