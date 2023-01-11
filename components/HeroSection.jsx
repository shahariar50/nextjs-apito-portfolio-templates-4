const HeroSection = () => {
  return (
    <section className="py-0" id="home">
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url('/statics/img/illustrations/hero-bg.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container position-relative">
        <div className="row align-items-center py-8">
          <div className="col-md-5 col-lg-6 order-md-1 text-center text-md-end">
            <picture>
              <img
                className="img-fluid"
                src="/statics/img/illustrations/mobile.png"
                style={{ width: 350 }}
                alt=""
              />
            </picture>
          </div>
          <div className="col-md-7 col-lg-6 text-center text-md-start">
            <span className="badge bg-light rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-75 w-sm-50 w-md-75 w-xl-50 mb-3">
              #1 Editiors Choice App of 2020
              <picture>
                <img
                  className="img-fluid float-start me-3"
                  src="statics/img/illustrations/arrow-right.png"
                  alt=""
                />
              </picture>
            </span>
            <h1 className="mb-4 display-3 fw-bold lh-sm">
              Best app for your
              <br className="d-block d-lg-none d-xl-block" />
              modern lifestyle
            </h1>
            <p className="mt-3 mb-4 fs-1">
              Increase productivity with a simple to-do app. app for
              <br className="d-none d-lg-block" />
              managing your personal budgets.
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill hover-top"
              href="#"
              role="button"
            >
              Try for free
            </a>
            <a className="btn btn-link ps-md-4" href="#" role="button">
              Watch demo video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
