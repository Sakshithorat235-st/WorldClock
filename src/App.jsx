import { useEffect, useState } from "react";
import AnalogClock from "./components/AnalogClock";
import WorldClock from "./components/WorldClock";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>🌍 World Clock Dashboard</h1>

      <h2>Digital Clock</h2>

      <h1>{time.toLocaleTimeString()}</h1>

      <p>{time.toLocaleDateString()}</p>

      <AnalogClock />
      <WorldClock />
    </div>
  );
}

export default App;
