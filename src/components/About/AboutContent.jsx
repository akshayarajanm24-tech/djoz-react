
function AboutContent() {
  return (
    <>
      {/* About Section Begin */}
      <section className="about about--page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__pic">
                <img
                  src="/assets/img/about/about.png"
                  alt="DJ Alexandra"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <h2>
                    He heard something that he knew to be music
                  </h2>
                </div>

                <p>
                  At vero eos et accusamus et iusto odi
                  odgnissimos ducimus qui blanditiis praesentium
                  volup tatum deleniti atque corrupti quos dolores
                  et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi quod justo pro an.
                </p>

                <img
                  src="/assets/img/about/signature.png"
                  alt="Signature"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* About Pic Gallery Begin */}
      <div className="about-pic">
        <div className="container-fluid">
          <div className="row">
            {/* Left Gallery */}
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                  <img src="/assets/img/about/ap-1.jpg" alt="DJ gallery 1" />
                  <img src="/assets/img/about/ap-2.jpg" alt="DJ gallery 2" />
                </div>

                <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                  <img src="/assets/img/about/ap-3.jpg" alt="DJ gallery 3" />
                </div>
              </div>
            </div>

            {/* Right Gallery */}
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                  <img src="/assets/img/about/ap-4.jpg" alt="DJ gallery 4" />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                  <img src="/assets/img/about/ap-5.jpg" alt="DJ gallery 5" />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                  <img src="/assets/img/about/ap-6.jpg" alt="DJ gallery 6" />
                </div>

                <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                  <img src="/assets/img/about/ap-7.jpg" alt="DJ gallery 7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Pic Gallery End */}
    </>
  );
}

export default AboutContent;
