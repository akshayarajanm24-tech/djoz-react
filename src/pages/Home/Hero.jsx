function Hero() {
  return (
    <section
  className="hero spad"
  style={{
  backgroundImage: "url('/assets/img/hero-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  maxWidth: "none",
  minHeight: "700px",
  margin: 0,
}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__text">
              <span>New single</span>

              <h1>Feel the heart beats</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <a
                href="https://www.youtube.com/watch?v=K4DyBUG242c"
                className="play-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Play music video"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="linear__icon">
        <i className="fa fa-angle-double-down"></i>
      </div>
    </section>
  );
}

export default Hero;