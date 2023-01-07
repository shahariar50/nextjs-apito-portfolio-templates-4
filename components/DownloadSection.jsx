/* eslint-disable react/no-unescaped-entities */
const DownloadSection = () => {
  return (
    <section class="py-6">
      <hr />
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2 cta-image">
            <picture>
              <img
                class="img-fluid mb-4 mb-md-0"
                src="/statics/img/illustrations/cta.png"
                width="850"
                alt=""
              />
            </picture>
          </div>
          <div class="col-md-7 col-lg-5 text-center text-md-start">
            <h1 class="display-3 fw-bold lh-sm">Download our App now</h1>
            <p class="my-4">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
            <div class="d-flex justify-content-center d-md-inline-block">
              <a class="pe-2 pe-sm-3 pe-md-4" href="!#">
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
