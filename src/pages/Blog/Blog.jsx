
import React from "react";

function Blog() {
  return (
    <>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="#">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Blog Section Begin */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
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
                    Guidelines for music festival event organisers: music
                    festival harm reduction - December 2019
                  </h4>
                  <p>
                    Lorem ipsum dolor consectetur adipiscing eiusmod tempor
                    incididunt ut labore et dolore
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
                {[
                  {
                    image: "blog-1.jpg",
                    title:
                      "World Music Festival | Free Events & Concerts in Chicago",
                  },
                  {
                    image: "blog-2.jpg",
                    title:
                      "How ROQU Media and The Manual London staged Saudi…",
                  },
                  {
                    image: "blog-3.jpg",
                    title: "2019 Festival of the Sun music event, Port Macquarie",
                  },
                  {
                    image: "blog-4.jpg",
                    title: "Taylor Swift to Headline Glaston Music Festival",
                  },
                  {
                    image: "blog-5.jpg",
                    title: "24-hour festival Inner City Electronic returns",
                  },
                  {
                    image: "blog-6.jpg",
                    title: "Lost Paradise festival cancelled amid bushfire danger",
                  },
                ].map((post, index) => (
                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    key={index}
                  >
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img
                          src={`/assets/img/blog/${post.image}`}
                          alt=""
                        />
                      </div>

                      <div className="blog__item__text">
                        <span>Music festival</span>
                        <h5>{post.title}</h5>
                        <ul>
                          <li>
                            By <span>Erna O’Conner</span>
                          </li>
                          <li>Dec 17, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

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

            {/* Blog Sidebar */}
            <div className="col-lg-4">
              <div className="blog__sidebar">
                <div className="blog__sidebar__item">
                  <div className="blog__sidebar__title">
                    <h4>Subscribe newsletter</h4>
                  </div>

                  <p>Ipsum dolor sit amet, adipiscing elit, sed eiusmod </p>

                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <button type="submit" className="site-btn">
                      Subscribe
                    </button>
                  </form>
                </div>

                <div className="blog__sidebar__item">
                  <div className="blog__sidebar__title">
                    <h4>Social media</h4>
                  </div>

                  <div className="blog__sidebar__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>

                <div className="blog__sidebar__item">
                  <div className="blog__sidebar__title">
                    <h4>Recent posts</h4>
                  </div>

                  {[
                    "br-1.jpg",
                    "br-2.jpg",
                    "br-3.jpg",
                    "br-4.jpg",
                  ].map((image, index) => (
                    <a href="#" className="recent__item" key={index}>
                      <div className="recent__item__pic">
                        <img
                          src={`/assets/img/blog/${image}`}
                          alt=""
                        />
                      </div>

                      <div className="recent__item__text">
                        <h6>
                          2020 Bendigo Blues and Roots Music Festival…
                        </h6>
                        <span>Dec 17, 2019</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </>
  );
}

export default Blog;
