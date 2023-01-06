const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-2"
          href="index.html"
        >
          <div className="text-warning">App</div>
          <div className="text-1000">Lab</div>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
            <li className="nav-item" data-anchor="data-anchor">
              <a
                className="nav-link fw-medium active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item" data-anchor="data-anchor">
              <a className="nav-link fw-medium" href="#features">
                Key Features
              </a>
            </li>
            <li className="nav-item" data-anchor="data-anchor">
              <a className="nav-link fw-medium" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item" data-anchor="data-anchor">
              <a className="nav-link fw-medium" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item" data-anchor="data-anchor">
              <a className="nav-link fw-medium" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
          <form className="ps-lg-5">
            <button
              className="btn btn-lg btn-primary rounded-pill order-0"
              type="submit"
            >
              Try for free
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
