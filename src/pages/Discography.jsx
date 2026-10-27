
import { useState } from "react";
import { Link } from "react-router-dom";

function Discography() {
  const [currentPage, setCurrentPage] = useState(1);

  // Same 6 images on all 3 pages
  const albums = [1, 2, 3, 4, 5, 6];

  const changePage = (page) => {
    if (page >= 1 && page <= 3) {
      setCurrentPage(page);

      // Scroll to the top when changing page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
                <span>Discography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Discography Section Begin */}
      <section className="discography spad">
        <div className="container">

          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <h2>Latest Releases</h2>
                <h1>Discography</h1>
              </div>
            </div>
          </div>

          {/* Album Images */}
          <div className="row">
            {albums.map((album) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                key={album}
              >
                <div className="discography__item">
                  <div className="discography__item__pic">
                    <img
                      src={`/assets/img/discography/disco-${album}.jpg`}
                      alt={`Album ${album}`}
                    />
                  </div>

                  <div className="discography__item__text">
                    <span>$ 52.00</span>
                    <h4>EDM Party Electro House</h4>

                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        src="/assets/img/discography/link-1.jpg"
                        alt="Music platform 1"
                      />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        src="/assets/img/discography/link-2.jpg"
                        alt="Music platform 2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination Begin */}
            <div className="col-lg-12">
              <div className="pagination__links">

                {/* Previous Button */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(currentPage - 1);
                  }}
                >
                  Previous
                </a>

                {/* Page Numbers */}
                {[1, 2, 3].map((page) => (
                  <a
                    href="#"
                    key={page}
                    className={
                      currentPage === page ? "active" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      changePage(page);
                    }}
                  >
                    {page}
                  </a>
                ))}

                {/* Next Button */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(
                      currentPage === 3 ? 1 : currentPage + 1
                    );
                  }}
                >
                  Next
                </a>

              </div>
            </div>
            {/* Pagination End */}

          </div>
        </div>
      </section>
      {/* Discography Section End */}
    </>
  );
}

export default Discography;
