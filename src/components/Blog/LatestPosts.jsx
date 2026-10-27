
import React from "react";
import RecentPosts from "./RecentPosts";
import SubscribeNewsletter from "./SubscribeNewsletter";

function LatestPosts() {
 

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE: Latest Posts */}
            <div className="col-lg-8">
<div className="section-title">
<h2>Latest posts</h2>
<h1>Music blog</h1>
</div>

  <div className="blog__large">
    <div
  className="blog__large__pic set-bg"
  style={{
    backgroundImage: "url('/assets/img/blog/large-item.jpg')",
  }}
>
      <a href="#">
        <i className="fa fa-share-alt"></i>
      </a>
    </div>

    <div className="blog__large__text">
      <span>Music festival</span>

      <h4>
        Guidelines for music festival event organisers: music festival
        harm reduction - December 2019
      </h4>

      <p>
        Lorem ipsum dolor consectetur adipiscing eiusmod tempor incididunt
        ut labore et dolore
      </p>

      <div className="blog__large__widget">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <ul>
              <li>
                By <span>Erna O’Conner</span>
              </li>
              <li>Dec 17, 2019</li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-6">
            <ul className="right__widget">
              <li>230 Views</li>
              <li>18 Comments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="blog__item">
        <div className="blog__item__pic">
          <img src="/assets/img/blog/blog-1.jpg" alt="" />
        </div>
        <div className="blog__item__text">
          <span>Music festival</span>
          <h5>World Music Festival | Free Events & Concerts in Chicago</h5>
          <ul>
            <li>
              By <span>Erna O’Conner</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="blog__item">
        <div className="blog__item__pic">
          <img src="/assets/img/blog/blog-2.jpg" alt="" />
        </div>
        <div className="blog__item__text">
          <span>Music festival</span>
          <h5>How ROQU Media and The Manual London staged Saudi…</h5>
          <ul>
            <li>
              By <span>Erna O’Conner</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="blog__item">
        <div className="blog__item__pic">
          <img src="/assets/img/blog/blog-3.jpg" alt="" />
        </div>
        <div className="blog__item__text">
          <span>Music festival</span>
          <h5>2019 Festival of the Sun music event, Port Macquarie</h5>
          <ul>
            <li>
              By <span>Erna O’Conner</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="blog__item">
        <div className="blog__item__pic">
          <img src="/assets/img/blog/blog-4.jpg" alt="" />
        </div>
        <div className="blog__item__text">
          <span>Music festival</span>
          <h5>Taylor Swift to Headline Glaston Music Festival</h5>
          <ul>
            <li>
              By <span>Erna O’Conner</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="blog__item">
        <div className="blog__item__pic">
          <img src="/assets/img/blog/blog-5.jpg" alt="" />
        </div>
        <div className="blog__item__text">
          <span>Music festival</span>
          <h5>24-hour festival Inner City Electronic returns</h5>
          <ul>
            <li>
              By <span>Erna O’Conner</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="blog__item">
        <div className="blog__item__pic">
          <img src="/assets/img/blog/blog-6.jpg" alt="" />
        </div>
        <div className="blog__item__text">
          <span>Music festival</span>
          <h5>Lost Paradise festival cancelled amid bushfire danger</h5>
          <ul>
            <li>
              By <span>Erna O’Conner</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-12">
      <div className="pagination__links blog__pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">Next</a>
      </div>
    </div>
  </div>
</div>

            {/* RIGHT SIDE: Sidebar */}
            <div className="col-lg-4">
              <div className="blog__sidebar">
                <SubscribeNewsletter />

                {/* Social Media */}
                <div className="blog__sidebar__item">
                  <div className="blog__sidebar__title">
                    <h4>Social media</h4>
                  </div>

                  <div className="blog__sidebar__social">
                    <a href="#" aria-label="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="Dribbble">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>

                <RecentPosts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestPosts;
