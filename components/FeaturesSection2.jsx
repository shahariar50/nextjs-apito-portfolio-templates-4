/* eslint-disable react/no-unescaped-entities */
const FeaturesSection2 = () => {
  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 order-md-0 text-center text-md-start">
              <picture>
                <img
                  className="img-fluid mb-4"
                  src="/statics/img/illustrations/call-to-action.png"
                  width="550"
                  alt=""
                />
              </picture>
            </div>
            <div className="col-md-6 text-center text-md-start offset-md-1">
              <h6 className="fw-bold fs-4 display-3 lh-sm">
                Designed &amp; built by
                <br />
                the latest code <br />
                integration
              </h6>
              <p className="my-4 pe-xl-5">
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </p>
              <a
                className="btn btn-lg btn-primary rounded-pill hover-top"
                href="#"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection2;
