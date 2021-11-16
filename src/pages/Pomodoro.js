import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Todo from "../components/Todo"

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
      
      <div class="middle">
        <div class="card-section">
          <div class="description">
            <h2>Create timers to match your study style.</h2>
          </div>
          <div class="card card-one">
            <Card name="Pomodoro" />
          </div>
          <div class="card card-two">
            <Card name="Time Chunking" />
          </div>
          <div class="card card-three">
            <Card name="Custom" />
          </div>
        </div>
        <div className="TodoSection"> 
          <Todo />
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
