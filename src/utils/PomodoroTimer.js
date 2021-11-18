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
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setMinutes(breakMessage ? 24 : 5);
          setBreakMessage(!breakMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {breakMessage ? (
          <div>Break time! Break ends in:</div>
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
