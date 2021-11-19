/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";

export default function CustomTimer(props) {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [breakMessage, setBreakMessage] = useState(false);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     clearInterval(interval);

  //     if (seconds === 0) {
  //       if (minutes !== 0) {
  //         setSeconds(59);
  //         setMinutes(minutes - 1);
  //       } else {
  //         setMinutes(breakMessage ? 25 : 5);
  //         setBreakMessage(!breakMessage);
  //       }
  //     } else {
  //       setSeconds(seconds - 1);
  //     }
  //   }, 1000);
  // }, [seconds, minutes]);

  var mySeconds;
  var intervalHandle;

  function resetPage() {
    document.getElementById("inputArea").style.display = "none";
  }

  function tick() {
    console.log(props.path);
    var timeDisplay = document.getElementById("time");

    var min = Math.floor(mySeconds / 60);
    var sec = mySeconds - min * 60;

    if (sec < 10) {
      sec = "0" + sec;
    }

    var message = min.toString() + ":" + sec;

    timeDisplay.innerHTML = message;

    if (mySeconds === 0) {
      alert("Session Complete!");
      clearInterval(intervalHandle);
      resetPage();
    }
    mySeconds--;
  }
  function startCounter() {
    var myInput = document.getElementById("minutes").value;
    if (isNaN(myInput)) {
      alert("Type a valid number please");
      return;
    }
    mySeconds = myInput * 60;

    intervalHandle = setInterval(tick, 1000);

    document.getElementById("inputArea").style.display = "none";
  }

  // window.onload = function () {
  //   var myInput = document.createElement("input");
  //   // myInput.setAttribute("type", "text");
  //   // myInput.setAttribute("id", "minutes");

  //   var myButton = document.createElement("input");
  //   // myButton.setAttribute("type", "button");
  //   // myButton.setAttribute("value", "Start Timer");
  //   // myButton.setAttribute("id", "start-button");

  //   myButton.onclick = function () {
  //     startCounter();
  //   };
  //   // document.getElementById("inputArea").appendChild(myInput);
  //   // document.getElementById("inputArea").appendChild(myButton);
  // };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="custom">
      <div id="canvas" class="container group">
        <div id="primaryContent" class="group">
          {/* <h1>Input the time in minutes and click start</h1> */}
          <div id="inputArea">
            <input id="minutes" type="text"></input>
            <button
              onClick={startCounter}
              id="start-button"
              type="button"
              value="Start Timer"
            >
              Start Timer
            </button>
          </div>
          <h2 id="time">0:00</h2>
        </div>
      </div>
    </div>
  );
}
