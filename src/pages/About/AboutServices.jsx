
function AboutServices() {
  return (
    <section className="about-services spad">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-title">
              <h2>WHERE DO I PLAY</h2>
              <h1>Best service</h1>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="row">
          {/* Wedding */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="about__services__item">
              <div
                className="about__services__item__pic set-bg"
                data-setbg="/assets/img/services/as-1.jpg"
                style={{
                  backgroundImage: 'url("/assets/img/services/as-1.jpg")',
                }}
              >
                <div className="icon">
                  <img
                    src="/assets/img/services/as-icon-1.png"
                    alt="Wedding icon"
                  />
                </div>
              </div>

              <div className="about__services__item__text">
                <h4>Wedding</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod.
                </p>
              </div>
            </div>
          </div>

          {/* Clubs and Bar */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="about__services__item">
              <div
                className="about__services__item__pic set-bg"
                data-setbg="/assets/img/services/as-2.jpg"
                style={{
                  backgroundImage: 'url("/assets/img/services/as-2.jpg")',
                }}
              >
                <div className="icon">
                  <img
                    src="/assets/img/services/as-icon-2.png"
                    alt="Clubs and bar icon"
                  />
                </div>
              </div>

              <div className="about__services__item__text">
                <h4>Clubs and bar</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Events */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="about__services__item">
              <div
                className="about__services__item__pic set-bg"
                data-setbg="/assets/img/services/as-3.jpg"
                style={{
                  backgroundImage: 'url("/assets/img/services/as-3.jpg")',
                }}
              >
                <div className="icon">
                  <img
                    src="/assets/img/services/as-icon-3.png"
                    alt="Corporate events icon"
                  />
                </div>
              </div>

              <div className="about__services__item__text">
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
    </section>
  );
}

export default AboutServices;
