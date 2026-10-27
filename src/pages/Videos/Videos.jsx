
import { useEffect } from "react";

export default function Videos() {
  useEffect(() => {
    let timer;
    let cancelled = false;
    let $slider;

    const initVideos = () => {
      if (cancelled) return;

      const $ = window.jQuery;

      if (!$ || !$.fn || !$.fn.owlCarousel) {
        timer = setTimeout(initVideos, 200);
        return;
      }

      $slider = $(".videos__slider");

      if (!$slider.length || $slider.hasClass("owl-loaded")) return;

      $slider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
        },
      });
    };

    initVideos();

    return () => {
  cancelled = true;
  clearTimeout(timer);

  if ($slider?.length && $slider.hasClass("owl-loaded")) {
    $slider.trigger("destroy.owl.carousel");
    $slider.removeClass("owl-loaded");
    $slider.find(".owl-stage-outer").children().unwrap();
    $slider.find(".owl-stage").children().unwrap();
    $slider.find(".owl-item").children().unwrap();
    $slider.find(".owl-stage, .owl-item, .owl-dots, .owl-nav").remove();
  }
};
  }, []);

  useEffect(() => {
    let timer;
    let cancelled = false;

    const initPopup = () => {
      if (cancelled) return;

      const $ = window.jQuery;

      if (!$ || !$.fn || !$.fn.magnificPopup) {
        timer = setTimeout(initPopup, 200);
        return;
      }

      $(".video-popup").magnificPopup({
        type: "iframe",
      });
    };

    initPopup();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Video Section Begin */}
      <section className="videos spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <h2>YOutube feed</h2>
                <h1>Latest videos</h1>
              </div>

              <div
                className="videos__large__item set-bg"
                data-setbg="/assets/img/videos/large-item.jpg"
                style={{
                  backgroundImage:
                    "url('/assets/img/videos/large-item.jpg')",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=yJg-Y5byMMw"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>

                <div className="videos__large__item__text">
                  <h4>
                    Martin Garrix &amp; Pierce Fulton feat. Mike Shinoda -
                    Waiting For Tomorrow (Official Video)
                  </h4>
                  <ul>
                    <li>02:35:18</li>
                    <li>Dec 17, 2019</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="videos__slider owl-carousel">
                  <div className="col-lg-3">
                    <div className="videos__item">
                      <div
                        className="videos__item__pic set-bg"
                        data-setbg="/assets/img/videos/videos-1.jpg"
                        style={{
                          backgroundImage:
                            "url('/assets/img/videos/videos-1.jpg')",
                        }}
                      >
                        <a
                          href="https://www.youtube.com/watch?v=yJg-Y5byMMw"
                          className="play-btn video-popup"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                      <div className="videos__item__text">
                        <h5>
                          Electric Love Festival 2019 - The Opening Ceremony
                        </h5>
                        <ul>
                          <li>02:35:18</li>
                          <li>Dec 17, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="videos__item">
                      <div
                        className="videos__item__pic set-bg"
                        data-setbg="/assets/img/videos/videos-2.jpg"
                        style={{
                          backgroundImage:
                            "url('/assets/img/videos/videos-2.jpg')",
                        }}
                      >
                        <a
                          href="https://www.youtube.com/watch?v=K4DyBUG242c"
                          className="play-btn video-popup"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                      <div className="videos__item__text">
                        <h5>
                          Tiësto - Live Electric Daisy Carnival Las Vegas 2019
                        </h5>
                        <ul>
                          <li>02:35:18</li>
                          <li>Dec 17, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="videos__item">
                      <div
                        className="videos__item__pic set-bg"
                        data-setbg="/assets/img/videos/videos-3.jpg"
                        style={{
                          backgroundImage:
                            "url('/assets/img/videos/videos-3.jpg')",
                        }}
                      >
                        <a
                          href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                          className="play-btn video-popup"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                      <div className="videos__item__text">
                        <h5>
                          Martin Garrix - Live @ Ultra Music Festival Miami
                          2019
                        </h5>
                        <ul>
                          <li>02:35:18</li>
                          <li>Dec 17, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="videos__item">
                      <div
                        className="videos__item__pic set-bg"
                        data-setbg="/assets/img/videos/videos-4.jpg"
                        style={{
                          backgroundImage:
                            "url('/assets/img/videos/videos-4.jpg')",
                        }}
                      >
                        <a
                          href="https://www.youtube.com/watch?v=Srqs4CitU2U"
                          className="play-btn video-popup"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                      <div className="videos__item__text">
                        <h5>
                          Armin van Buuren live at Tomorrowland 2019
                        </h5>
                        <ul>
                          <li>02:35:18</li>
                          <li>Dec 17, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="videos__item">
                      <div
                        className="videos__item__pic set-bg"
                        data-setbg="/assets/img/videos/videos-3.jpg"
                        style={{
                          backgroundImage:
                            "url('/assets/img/videos/videos-3.jpg')",
                        }}
                      >
                        <a
                          href="https://www.youtube.com/watch?v=vBGiFtb8Rpw"
                          className="play-btn video-popup"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                      <div className="videos__item__text">
                        <h5>
                          Martin Garrix - Live @ Ultra Music Festival Miami
                          2019
                        </h5>
                        <ul>
                          <li>02:35:18</li>
                          <li>Dec 17, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section End */}
    </>
  );
}
