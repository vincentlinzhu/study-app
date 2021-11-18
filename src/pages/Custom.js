import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import CustomTimer from "../utils/CustomTimer";

export function Custom() {
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
        <div class="custom-divider"></div>
        <div class="middle">
          <div className="custom-timer">
            <h1 class="custom-timer-text">Set your desired work and break times below!</h1>
            <CustomTimer />
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
  