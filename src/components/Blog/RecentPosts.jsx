import React from "react";

function RecentPosts() {
  return (
    <div className="blog__sidebar__item">
      <div className="blog__sidebar__title">
        <h4>Recent posts</h4>
      </div>

      <a href="#" className="recent__item">
        <div className="recent__item__pic">
          <img src="/assets/img/blog/br-1.jpg" alt="" />
        </div>
        <div className="recent__item__text">
          <h6>
            2020 Bendigo Blues and Roots Music Festival…
          </h6>
          <span>Dec 17, 2019</span>
        </div>
      </a>

      <a href="#" className="recent__item">
        <div className="recent__item__pic">
          <img src="/assets/img/blog/br-2.jpg" alt="" />
        </div>
        <div className="recent__item__text">
          <h6>
            2020 Bendigo Blues and Roots Music Festival…
          </h6>
          <span>Dec 17, 2019</span>
        </div>
      </a>

      <a href="#" className="recent__item">
        <div className="recent__item__pic">
          <img src="/assets/img/blog/br-3.jpg" alt="" />
        </div>
        <div className="recent__item__text">
          <h6>
            2020 Bendigo Blues and Roots Music Festival…
          </h6>
          <span>Dec 17, 2019</span>
        </div>
      </a>

      <a href="#" className="recent__item">
        <div className="recent__item__pic">
          <img src="/assets/img/blog/br-4.jpg" alt="" />
        </div>
        <div className="recent__item__text">
          <h6>
            2020 Bendigo Blues and Roots Music Festival…
          </h6>
          <span>Dec 17, 2019</span>
        </div>
      </a>
    </div>
  );
}

export default RecentPosts;