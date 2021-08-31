import { faPause, faPlay, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 25,
    seconds: 0,
  });
  const [totalTime, setTotalTime] = useState(0);
  const [start, setStart] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { hours, minutes, seconds } = time;

  const circumference = 142 * 2 * Math.PI;

  const [circleOffset, setCircleOffset] = useState(0);

  const setProgress = (percent) => {
    setCircleOffset(circumference - (percent / 100) * circumference);
  };

  const handleInput = (name) => (event) => {
    const input = parseInt(event.target.value || 0);
    if (!isNaN(input) && input <= 60 && input >= 0)
      setTime({ ...time, [name]: input });
  };

  const startTimer = () => {
    setStart(true);
    setDisabled(true);
    setTotalTime(hours * 24 + minutes * 60 + seconds);
  };

  const stopTimer = () => {
    setStart(false);
    setDisabled(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTime({ ...time, hours: 0, minutes: 0, seconds: 0 });
    setCircleOffset(0);
  };

  useEffect(() => {
    const decrementFunction = () => {
      if (seconds === 0 && minutes === 0 && hours === 0) {
        alert("Time's UP!");
        return resetTimer();
      }

      let sec = seconds - 1;
      let min = sec < 0 ? minutes - 1 : minutes;
      let hr = min < 0 ? hours - 1 : hours;

      if (sec < 0) sec = 60;

      if (min < 0) min = 60;

      if (hr < 0) hr = 24;

      const elapsedTime = hr * 24 + min * 60 + sec;
      setProgress((elapsedTime / totalTime) * 100);

      setTime({ ...time, hours: hr, minutes: min, seconds: sec });
    };

    let timer;

    if (start) {
      timer = setInterval(decrementFunction, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="container">
      <div className="time-container">
        <div className="time-wrapper">
          <input
            type="text"
            id="hours"
            value={hours}
            onChange={handleInput("hours")}
            disabled={disabled}
          />
          <span className="time-label">H</span>
          <input
            type="text"
            id="minutes"
            value={minutes}
            onChange={handleInput("minutes")}
            disabled={disabled}
          />
          <span className="time-label">M</span>
          <input
            type="text"
            id="seconds"
            value={seconds}
            onChange={handleInput("seconds")}
            disabled={disabled}
          />
          <span className="time-label">S</span>
        </div>
        <div className="time-controllers">
          <button onClick={startTimer}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button onClick={stopTimer}>
            <FontAwesomeIcon icon={faPause} />
          </button>
          <button onClick={resetTimer}>
            <FontAwesomeIcon icon={faUndo} />
          </button>
        </div>
        <svg className="progress-ring" width="300" height="300">
          <circle
            className="progress-ring__circle"
            stroke="black"
            strokeWidth="4"
            fill="transparent"
            r="142"
            cx="150"
            cy="150"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circleOffset}
          />
        </svg>
      </div>
    </div>
  );
};

export default App;
