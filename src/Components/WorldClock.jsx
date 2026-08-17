import { useEffect, useState } from "react";

function WorldClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeZones = [
    {
      city: "India",
      country: "🇮🇳",
      zone: "Asia/Kolkata"
    },
    {
      city: "London",
      country: "🇬🇧",
      zone: "Europe/London"
    },
    {
      city: "New York",
      country: "🇺🇸",
      zone: "America/New_York"
    },
    {
      city: "Tokyo",
      country: "🇯🇵",
      zone: "Asia/Tokyo"
    },
    {
      city: "Sydney",
      country: "🇦🇺",
      zone: "Australia/Sydney"
    }
  ];

  return (
    <div className="world-clock-section">
      <h2>🌎 World Time</h2>

      <div className="world-clock-grid">
        {timeZones.map((item) => (
          <div className="world-clock-card" key={item.zone}>
            <h3>
              {item.country} {item.city}
            </h3>

            <p className="timezone">
              {item.zone}
            </p>

            <h2>
              {time.toLocaleTimeString("en-US", {
                timeZone: item.zone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
              })}
            </h2>

            <p>
              {time.toLocaleDateString("en-US", {
                timeZone: item.zone,
                weekday: "long",
                month: "short",
                day: "numeric"
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorldClock;
