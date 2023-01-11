/* eslint-disable react/no-unescaped-entities */
const DownloadSection = () => {
  return (
    <section className="py-6">
      <hr />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2 cta-image">
            <picture>
              <img
                className="img-fluid mb-4 mb-md-0"
                src="/statics/img/illustrations/cta.png"
                width="850"
                alt=""
              />
            </picture>
          </div>
          <div className="col-md-7 col-lg-5 text-center text-md-start">
            <h1 className="display-3 fw-bold lh-sm">Download our App now</h1>
            <p className="my-4">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
            <div className="d-flex justify-content-center d-md-inline-block">
              <a className="pe-2 pe-sm-3 pe-md-4" href="!#">
                <picture>
                  <img
                    src="/statics/img/illustrations/google-play.png"
                    width="160"
                    alt=""
                  />
                </picture>
              </a>
              <a href="!#">
                <picture>
                  <img
                    src="/statics/img/illustrations/app-store.png"
                    width="160"
                    alt=""
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
