
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isNormalPage =
    location.pathname === "/about" ||
    location.pathname === "/discography"||
    location.pathname === "/videos"||
    location.pathname === "/blog"||
    location.pathname === "/contact";

  // Highlight the menu item matching the current URL
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = window.jQuery;

      if (
        $ &&
        $.fn.slicknav &&
        !$(".mobile-menu").next(".slicknav_menu").length
      ) {
        $(".mobile-menu").slicknav({
          prependTo: "#mobile-menu-wrap",
          allowParentLinks: true,
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`header ${isNormalPage ? "header--normal" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="header__logo">
              <Link to="/">
                <img src="/assets/img/logo.png" alt="DJoz Logo" />
              </Link>
            </div>
          </div>

          <div className="col-lg-10 col-md-10">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={isActive("/") ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>

                  <li className={isActive("/about") ? "active" : ""}>
                    <Link to="/about">About</Link>
                  </li>

                  <li className={isActive("/discography") ? "active" : ""}>
                    <Link to="/discography">Discography</Link>
                  </li>

                  <li className={isActive("/tours") ? "active" : ""}>
                    <Link to="/tours">Tours</Link>
                  </li>

                  <li className={isActive("/videos") ? "active" : ""}>
                    <Link to="/videos">Videos</Link>
                  </li>

                  <li className={isActive("/blog") ? "active" : ""}>
                    <Link to="/blog">Blog</Link>
                  </li>

                  {/* <li
                    className={
                      ["/blog", "/blog-details"].includes(location.pathname)
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/about">Pages</Link>
                    <ul className="dropdown">
                      <li className={isActive("/about") ? "active" : ""}>
                        <Link to="/about">About</Link>
                      </li>
                      <li className={isActive("/blog") ? "active" : ""}>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className={isActive("/blog-details") ? "active" : ""}>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className={isActive("/contact") ? "active" : ""}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="header__right__social">
                <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" aria-label="Dribbble" onClick={(e) => e.preventDefault()}>
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}

export default Navbar;
