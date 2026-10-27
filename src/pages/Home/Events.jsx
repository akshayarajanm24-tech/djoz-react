
import { useEffect } from "react";

function Events() {
  useEffect(() => {
    let timer;
    let initialized = false;

    const initCarousel = () => {
      const $ = window.jQuery;

      if (!$ || !$.fn || !$.fn.owlCarousel) {
        return;
      }

      const slider = $(".event__slider");

      if (!slider.length) {
        return;
      }

      if (slider.hasClass("owl-loaded")) {
        initialized = true;
        return;
      }

      slider.owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 3000,
       responsive: {
  0: {
    items: 1,
  },
  576: {
    items: 1,
  },
  768: {
    items: 1,
  },
  992: {
    items: 3,
  },
},
      });

      initialized = true;
    };

    initCarousel();

    if (!initialized) {
      timer = window.setInterval(() => {
        initCarousel();

        if (initialized) {
          window.clearInterval(timer);
        }
      }, 100);
    }

    return () => {
      window.clearInterval(timer);

      const $ = window.jQuery;

      if ($ && $.fn && $.fn.owlCarousel) {
        const slider = $(".event__slider");

        if (slider.hasClass("owl-loaded")) {
          slider.trigger("destroy.owl.carousel");
        }
      }
    };
  }, []);

  const events = [
    {
      image: "event-1.jpg",
      title: "David Guetta Miami Ultra",
      date: "Dec 15, 2019",
      location: "Funkhaus Berlin, Berlin, Germany",
    },
    {
      image: "event-2.jpg",
      title: "David Guetta Miami Ultra",
      date: "Dec 15, 2019",
      location: "Funkhaus Berlin, Berlin, Germany",
    },
    {
      image: "event-3.jpg",
      title: "David Guetta Miami Ultra",
      date: "Dec 15, 2019",
      location: "Funkhaus Berlin, Berlin, Germany",
    },
    {
      image: "event-2.jpg",
      title: "David Guetta Miami Ultra",
      date: "Dec 15, 2019",
      location: "Funkhaus Berlin, Berlin, Germany",
    },
  ];

  return (
    <section className="event spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Upcoming Events</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="event__slider owl-carousel">
            {events.map((event, index) => (
              <div className="col-lg-4" key={index}>
                <div className="event__item">
                  <div
                    className="event__item__pic set-bg"
                    data-setbg={`img/events/${event.image}`}
                    style={{
                      backgroundImage: `url("/assets/img/events/${event.image}")`,
                    }}
                  >
                    <div className="tag-date">
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <div className="event__item__text">
                    <h4>{event.title}</h4>
                    <p>
                      <i className="fa fa-map-marker"></i>{" "}
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
