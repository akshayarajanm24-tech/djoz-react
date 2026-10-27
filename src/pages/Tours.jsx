
import { useState, useEffect } from "react";

function TourCountdown() {
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
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="countdown countdown--page spad set-bg tours-countdown"
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

            <div className="countdown__timer" id="tours-countdown-time">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div className="countdown__item" key={unit}>
                  <span>{String(value).padStart(2, "0")}</span>
                  <p>{unit}</p>
                </div>
              ))}
            </div>

            <div className="buy__tickets">
              <a
                href="#"
                className="primary-btn"
                onClick={(e) => e.preventDefault()}
              >
                Buy tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tour() {
  return (
    <>
      {/* Tours Page Countdown */}
      <TourCountdown />

      {/* Tours Section Begin */}
      <section className="tours spad">
        <div className="container">
          <div className="row">
            {/* Tour 1 */}
            <div className="col-lg-6 order-lg-1">
              <div className="tours__item__text">
                <h2>Untold Festival 2020</h2>

                <div className="tours__text__widget">
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i>
                      <span>8:00pm</span>
                      <span>Dec 15, 2019</span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      Funkhaus Berlin, Berlin, Germany
                    </li>
                  </ul>
                  <div className="price">$ 35.00</div>
                </div>

                <div className="tours__text__desc">
                  <p>
                    Held in Europe’s electronic music capital on New Year’s
                    Eve, the seminal Funkhaus Berlin hosts an impressive
                    roster of techno artists worthy.
                  </p>
                  <p>
                    Soundtracking the leap from 2019 into 2020 in one of
                    the city’s most hyped venues, HYTE Berlin NYE is an
                    unforgettable music experience.
                  </p>
                </div>

                <a
                  href="#"
                  className="primary-btn border-btn"
                  onClick={(e) => e.preventDefault()}
                >
                  Buy tickets
                </a>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2">
              <div className="tours__item__pic">
                <img src="/assets/img/tours/tour-1.jpg" alt="Tour 1" />
              </div>
            </div>

            {/* Tour 2 */}
            <div className="col-lg-6 order-lg-4">
              <div className="tours__item__text tours__item__text--right">
                <h2>Untold Festival 2020</h2>

                <div className="tours__text__widget">
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i>
                      <span>8:00pm</span>
                      <span>Dec 15, 2019</span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      Funkhaus Berlin, Berlin, Germany
                    </li>
                  </ul>
                  <div className="price">$ 35.00</div>
                </div>

                <div className="tours__text__desc">
                  <p>
                    Enjoy an incredible night of electronic music with
                    talented artists performing live.
                  </p>
                  <p>
                    Experience amazing music, lights and performances
                    at this unforgettable festival.
                  </p>
                </div>

                <a
                  href="#"
                  className="primary-btn border-btn"
                  onClick={(e) => e.preventDefault()}
                >
                  Buy tickets
                </a>
              </div>
            </div>

            <div className="col-lg-6 order-lg-3">
              <div className="tours__item__pic tours__item__pic--left">
                <img src="/assets/img/tours/tour-2.jpg" alt="Tour 2" />
              </div>
            </div>

            {/* Tour 3 */}
            <div className="col-lg-6 order-lg-5">
              <div className="tours__item__text">
                <h2>Untold Festival 2020</h2>

                <div className="tours__text__widget">
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i>
                      <span>8:00pm</span>
                      <span>Dec 15, 2019</span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      Funkhaus Berlin, Berlin, Germany
                    </li>
                  </ul>
                  <div className="price">$ 35.00</div>
                </div>

                <div className="tours__text__desc">
                  <p>
                    Join music lovers for an energetic festival featuring
                    electronic dance music.
                  </p>
                  <p>
                    Discover an exciting atmosphere with unforgettable
                    performances and great music.
                  </p>
                </div>

                <a
                  href="#"
                  className="primary-btn border-btn"
                  onClick={(e) => e.preventDefault()}
                >
                  Buy tickets
                </a>
              </div>
            </div>

            <div className="col-lg-6 order-lg-6">
              <div className="tours__item__pic tours__item__pic--last">
                <img src="/assets/img/tours/tour-3.jpg" alt="Tour 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tours Section End */}
    </>
  );
}

export default Tour;
