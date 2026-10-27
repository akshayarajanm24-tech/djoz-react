
import { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 45,
    minutes: 18,
    seconds: 9,
  });

  useEffect(() => {
    const targetTime =
      Date.now() +
      20 * 24 * 60 * 60 * 1000 +
      45 * 60 * 60 * 1000 +
      18 * 60 * 1000 +
      9 * 1000;

    const updateTimer = () => {
      const difference = Math.max(0, targetTime - Date.now());

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });

      return difference;
    };

    updateTimer();

    const timer = setInterval(() => {
      if (updateTimer() <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="countdown spad set-bg"
      style={{
        backgroundImage: 'url("/assets/img/countdown-bg.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="countdown__text">
              <h1>Tomorrowland 2020</h1>
              <h4>Music festival start in</h4>
            </div>

            <div className="countdown__timer" id="countdown-time">
              <div className="countdown__item">
                <span>{String(timeLeft.days).padStart(2, "0")}</span>
                <p>days</p>
              </div>

              <div className="countdown__item">
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <p>hours</p>
              </div>

              <div className="countdown__item">
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <p>minutes</p>
              </div>

              <div className="countdown__item">
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                <p>seconds</p>
              </div>
            </div>

            <div className="buy__tickets">
              <a href="#" className="primary-btn">
                Buy tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
