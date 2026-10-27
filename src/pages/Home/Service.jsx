
import React, { useEffect } from "react";

function Service() {
  useEffect(() => {
    const $ = window.jQuery;

    if ($ && $.fn.magnificPopup) {
      $(".video-popup").magnificPopup({
        type: "iframe",
      });
    }
  }, []);

  return (
    <section className="services">
      <div className="container-fluid">
        <div className="row">
          {/* Left side video */}
          <div className="col-lg-6 p-0">
            <div
              className="services__left set-bg"
              data-setbg="/assets/img/services/service-left.jpg"
              style={{
                backgroundImage:
                  'url("/assets/img/services/service-left.jpg")',
              }}
            >
              <a
                href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
                className="play-btn video-popup"
                aria-label="Play video"
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>

          {/* Right side services */}
          <div className="col-lg-6 p-0">
            <div className="row services__list">

              {/* Wedding */}
              <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                <div className="service__item deep-bg">
                  <img
                    src="/assets/img/services/service-1.png"
                    alt="Wedding"
                  />
                  <h4>Wedding</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

              {/* Clubs and bar */}
              <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                <div className="service__item">
                  <img
                    src="/assets/img/services/service-2.png"
                    alt="Clubs and bar"
                  />
                  <h4>Clubs and bar</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

              {/* DJ lessons */}
              <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                <div className="service__item deep-bg">
                  <img
                    src="/assets/img/services/service-4.png"
                    alt="DJ lessons"
                  />
                  <h4>DJ lessons</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

              {/* Corporate events */}
              <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                <div className="service__item">
                  <img
                    src="/assets/img/services/service-3.png"
                    alt="Corporate events"
                  />
                  <h4>Corporate events</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
