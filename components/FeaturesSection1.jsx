/* eslint-disable react/no-unescaped-entities */
const FeaturesSection1 = () => {
  return (
    <>
      <section className="py-5" id="features">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-6 order-md-0 text-center text-md-start">
              <picture>
                <img
                  className="img-fluid"
                  src="/statics/img/illustrations/feature-bg.png"
                  width="550"
                  alt=""
                />
              </picture>
            </div>
            <div className="col-md-7 col-lg-6 px-sm-5 px-md-0">
              <h6 className="fw-bold fs-4 display-3 lh-sm">
                Awesome apps <br />
                features
              </h6>
              <p className="my-4">
                Increase productivity with a simple to-do app. app for
                <br className="d-none d-xl-block" />
                managing your personal budgets.
              </p>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <picture>
                    <img
                      className="img-fluid"
                      src="/statics/img/illustrations/fast-performance.png"
                      width="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-danger">Fast performance</h5>
                  <p>
                    Get your blood tests delivered at
                    <br className="d-none d-xl-block" />
                    home collect a sample from the
                    <br className="d-none d-xl-block" />
                    news your blood tests
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <picture>
                    <img
                      className="img-fluid"
                      src="/statics/img/illustrations/prototype.png"
                      width="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-primary">Prototyping</h5>
                  <p>
                    Get your blood tests delivered at
                    <br className="d-none d-xl-block" />
                    home collect a sample from the
                    <br className="d-none d-xl-block" />
                    news your blood tests
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <picture>
                    <img
                      className="img-fluid"
                      src="/statics/img/illustrations/vector.png"
                      width="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-success">Vector Editing</h5>
                  <p>
                    Get your blood tests delivered at
                    <br className="d-none d-xl-block" />
                    home collect a sample from the
                    <br className="d-none d-xl-block" />
                    news your blood tests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-6">
            <div className="col-md-5 col-lg-4 offset-lg-1">
              <h1 className="fw-bold lh-base">
                Smart jackpots that you may love this anytime &amp; anywhere
              </h1>
            </div>
            <div className="col-md-6 col-lg-5 offset-lg-1 border-start py-5 ps-5">
              <p className="mb-0">
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
              <div className="py-4">
                <picture>
                  <img
                    className="img-fluid"
                    src="/statics/img/illustrations/automatic.png"
                    width="90"
                    alt=""
                  />
                </picture>
              </div>
              <h5 className="fw-bold text-danger">Fast performance</h5>
              <p className="mt-2 mb-0">
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
              <div className="py-4">
                <picture>
                  <img
                    className="img-fluid"
                    src="/statics/img/illustrations/network.png"
                    width="90"
                    alt=""
                  />
                </picture>
              </div>
              <h5 className="fw-bold text-primary">Prototyping</h5>
              <p className="mt-2 mb-0">
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
              <div className="py-4">
                <picture>
                  <img
                    className="img-fluid"
                    src="/statics/img/illustrations/rewards.png"
                    width="90"
                    alt=""
                  />
                </picture>
              </div>
              <h5 className="fw-bold text-success">Vector Editing</h5>
              <p className="mt-2 mb-0">
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection1;
