import React from "react";
import { Link } from "react-router-dom";
import Todo from "../components/Todo";
import Clock from "../utils/Clock";
import Footer from "../components/Footer";
import Card from "../components/Card";

export function Home() {
  return (
    <div class="restricted-text content-container">
      <div class="header">
        <h1 class="header-text">Focus.</h1>
      </div>

      <div class="timer">
        <Clock />
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
      
      
      
      
      {/* <div className="todo"> */}
        {/* <h1>Todo</h1> */}
        {/* <div className="TodoSection"> 
          <Todo />
        </div> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}
