import { Inter } from "@next/font/google";
import ClientsSection from "components/ClientsSection";
import FeaturesSection1 from "components/FeaturesSection1";
import FeaturesSection2 from "components/FeaturesSection2";
import FeaturesSection3 from "components/FeaturesSection3";
import FeaturesSection4 from "components/FeaturesSection4";
import HeroSection from "components/HeroSection";
import MainLayout from "components/MainLayout";
import PackageSection from "components/PackageSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="main" id="top">
      <MainLayout>
        <HeroSection />
        <ClientsSection />
        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />
        <FeaturesSection4 />
        <PackageSection />

        {/* <section class="py-8" id="testimonial">
        <div class="container-lg">
          <div class="row flex-center">
            <div
              class="col-sm-10 col-md-5 col-lg-5 order-md-0 text-center text-md-start"
            >
              <img
                class="img-fluid mb-4"
                src="assets/img/illustrations/testimonial.png"
                alt=""
              />
            </div>
            <div
              class="col-sm-10 col-md-6 col-lg-6 text-center text-md-start offset-md-1"
            >
              <h6 class="fw-bold fs-4 display-3 lh-sm">
                Meet Client Satisfaction <br />by using product
              </h6>
              <p class="my-4 pe-xl-5">
                The rise of mobile devices transforms the way we consume.Elevant
                channels such as Facebook.
              </p>
              <div
                class="carousel slide"
                id="carouselExampleDark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row h-100">
                      <div class="col-12">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <h5 class="my-4 fw-bold lh-sm">
                          User friendly &amp; Customizable
                        </h5>
                        <p class="mb-0 text-center text-md-start">
                          Bring to the table win-win survival strategies to
                          ensure proactive domination. At the end of the day,
                          going forward, a new normal that has evolved from
                          generation X is on the runway heading towards a
                          streamlined cloud solution. User generated content in
                          real-time will have multiple touchpoints for
                          offshoring.
                        </p>
                      </div>
                      <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                        <div class="d-flex align-items-md-center">
                          <img
                            class="img-fluid me-4 me-md-3 me-lg-4"
                            src="assets/img/gallery/user.png"
                            width="100"
                            alt=""
                          />
                          <div class="w-lg-50 my-3">
                            <h5 class="mb-0 fw-bold">Zoltan Nemeth</h5>
                            <p class="fw-normal mb-0">CEO of Pixer Lab</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <div class="row h-100">
                      <div class="col-12">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <h5 class="my-4 fw-bold lh-sm">
                          User friendly &amp; Customizable
                        </h5>
                        <p class="mb-0 text-center text-md-start">
                          Bring to the table win-win survival strategies to
                          ensure proactive domination. At the end of the day,
                          going forward, a new normal that has evolved from
                          generation X is on the runway heading towards a
                          streamlined cloud solution. User generated content in
                          real-time will have multiple touchpoints for
                          offshoring.
                        </p>
                      </div>
                      <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                        <div class="d-flex align-items-md-center">
                          <img
                            class="img-fluid me-4 me-md-3 me-lg-4"
                            src="assets/img/gallery/user-1.png"
                            width="100"
                            alt=""
                          />
                          <div class="w-lg-50 my-3">
                            <h5 class="mb-0 fw-bold">Jhon Doe</h5>
                            <p class="fw-normal mb-0">Web Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row h-100">
                      <div class="col-12">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFCC00"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </svg>
                        <h5 class="my-4 fw-bold lh-sm">
                          User friendly &amp; Customizable
                        </h5>
                        <p class="mb-0 text-center text-md-start">
                          Bring to the table win-win survival strategies to
                          ensure proactive domination. At the end of the day,
                          going forward, a new normal that has evolved from
                          generation X is on the runway heading towards a
                          streamlined cloud solution. User generated content in
                          real-time will have multiple touchpoints for
                          offshoring.
                        </p>
                      </div>
                      <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                        <div class="d-flex align-items-md-center">
                          <img
                            class="img-fluid me-4 me-md-3 me-lg-4"
                            src="assets/img/gallery/user-2.png"
                            width="100"
                            alt=""
                          />
                          <div class="w-lg-50 my-3">
                            <h5 class="mb-0 fw-bold">Viezh Robert</h5>
                            <p class="fw-normal mb-0">UI/UX Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="position-relative mt-sm-n5">
                  <a
                    class="carousel-control-prev carousel-icon z-index-2"
                    href="#carouselExampleDark"
                    role="button"
                    data-bs-slide="prev"
                    ><span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span
                    ><span class="visually-hidden">Previous</span></a
                  ><a
                    class="carousel-control-next carousel-icon z-index-2"
                    href="#carouselExampleDark"
                    role="button"
                    data-bs-slide="next"
                    ><span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span
                    ><span class="visually-hidden">Next</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8" id="faq">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 text-center mb-3">
              <h6 class="fw-bold fs-4 display-3 lh-sm mb-3">
                Frequently asked questions
              </h6>
              <p class="mb-5">
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </p>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col-lg-9">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span class="mb-0 fw-bold text-start fs-1 text-1000"
                        >How to contact with riders emergency?</span
                      >
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse show"
                    id="collapse1"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-100">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.Bring to the table win-win
                      survival strategies to ensure proactive domination. At the
                      end of the day, going forward, a new normal that has
                      evolved from generation X is on the runway heading towards
                      a streamlined cloud solution. User generated content in
                      real-time will have multiple touchpoints for offshoring.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      <span class="mb-0 fw-bold text-start fs-1 text-1000"
                        >App installation failed, how to update system
                        information?</span
                      >
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    id="collapse2"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-100">
                      You can issue either partial or full refunds. There are no
                      fees to refund a charge, but the fees from the original
                      charge are not returned.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      <span class="mb-0 fw-bold text-start fs-1 text-1000"
                        >Website reponse taking time, how to improve?</span
                      >
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    id="collapse3"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-100">
                      Disputed payments (also known as chargebacks) incur a
                      $15.00 fee. If the customer’s bank resolves the dispute in
                      your favor, the fee is fully refunded.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading4">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      <span class="mb-0 fw-bold text-start fs-1 text-1000"
                        >New update fixed all bug and issues</span
                      >
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    id="collapse4"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-100">
                      There are no additional fees for using our mobile SDKs or
                      to accept payments using consumer wallets like Apple Pay
                      or Google Pay.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading5">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="true"
                      aria-controls="collapse5"
                    >
                      <span class="mb-0 fw-bold text-start fs-1 text-1000"
                        >How to contact with riders emergency?</span
                      >
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    id="collapse5"
                    aria-labelledby="heading5"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-100">
                      There are no additional fees for using our mobile SDKs or
                      to accept payments using consumer wallets like Apple Pay
                      or Google Pay.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of .container-->
      </section>
      
      <section class="py-6">
        <hr />
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2 cta-image"
            >
              <img
                class="img-fluid mb-4 mb-md-0"
                src="assets/img/illustrations/cta.png"
                width="850"
                alt=""
              />
            </div>
            <div class="col-md-7 col-lg-5 text-center text-md-start">
              <h1 class="display-3 fw-bold lh-sm">Download our App now</h1>
              <p class="my-4">
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </p>
              <div class="d-flex justify-content-center d-md-inline-block">
                <a class="pe-2 pe-sm-3 pe-md-4" href="!#"
                  ><img
                    src="assets/img/illustrations/google-play.png"
                    width="160"
                    alt="" /></a
                ><a href="!#"
                  ><img
                    src="assets/img/illustrations/app-store.png"
                    width="160"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </MainLayout>
    </div>
  );
}
