import { useEffect, useState } from "react";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + seconds * 0.1;
  const hourDegree = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="analog-container">
      <h2>Analog Clock</h2>

      <div className="clock">

        <div className="number number12">12</div>
        <div className="number number3">3</div>
        <div className="number number6">6</div>
        <div className="number number9">9</div>

        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDegree}deg)` }}
        ></div>

        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDegree}deg)` }}
        ></div>

        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDegree}deg)` }}
        ></div>

        <div className="center-dot"></div>

      </div>
    </div>
  );
}

export default AnalogClock;
