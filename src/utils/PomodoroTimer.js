import React, { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [breakMessage, setBreakMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          let minutes = breakMessage ? 24 : 25;
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = breakMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setBreakMessage(!breakMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {breakMessage ? (
          <div>Break time! New session starts in:</div>
        ) : (
          <div>Work time! Session ends in:</div>
        )}
      </div>
      <div className="pomodoro-timer-clock">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
