import Breadcrumb from "@/components/Breadcrumb";
import ContactBox from "@/components/ContactBox";
import BrandSlider from "@/components/slider/BrandSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Team Details"} />
      {/* Team Details Section Start */}
      <section className="team-details-section fix section-padding">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/team/details-1.jpg")',
                  }}
                />
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team-details-content">
                  <div className="star pb-3">
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">(5k)</a>
                  </div>
                  <h3>Alextina Ditarson</h3>
                  <span>General Manager</span>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment so blinded by desire that
                    they cannot foresee the pain and trouble that are
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                  <Link href="contact" className="theme-btn mt-5">
                    <span className="mb-0">
                      Get a Free Quate
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Skill Section Start */}
      <section className="team-skill fix section-padding">
        <div className="container">
          <div className="team-skill-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-skill-content">
                  <h3>
                    Welcome to our culinary haven where each dish is a symphony
                    of flavors meticulously
                  </h3>
                </div>
              </div>
              <div
                className="col-lg-5 mt-4 mt-lg-0 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="progress-wrap">
                  <div className="pro-items">
                    <div className="pro-head">
                      <h6 className="title">business managment</h6>
                      <span className="point">65%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value" />
                    </div>
                  </div>
                  <div className="pro-items">
                    <div className="pro-head">
                      <h6 className="title">technology solution</h6>
                      <span className="point">75%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-two" />
                    </div>
                  </div>
                  <div className="pro-items">
                    <div className="pro-head">
                      <h6 className="title">Human Interacation</h6>
                      <span className="point">65%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Contact Section Start */}
      <section className="team-contact-area fix section-padding">
        <div className="container">
          <div className="team-contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="get-touch-items">
                  <div className="get-touch-title">
                    <h2 className="wow fadeInUp">Get in touch</h2>
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      mattis <br />
                      faucibus odio feugiat arc dolor.
                    </p>
                  </div>
                  <div className="contact-items">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>Contact</h4>
                      <h5>
                        <a href="tel:+1718-904-4450">+1718-904-4450</a>
                      </h5>
                    </div>
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4>Email</h4>
                      <h5>
                        <a href="mailto:info@example.com" className="link">
                          info@example.com
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>Address</h4>
                      <h5>Jackpark, Ghana</h5>
                    </div>
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4>Follow</h4>
                      <div className="social-icon d-flex align-items-center">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-vimeo-v" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <ContactBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-2 fix section-bg-2 mt-0">
        <div className="container">
          <div className="brand-wrapper style-2">
            <BrandSlider />
          </div>
        </div>
      </div>
    </NetBandLayout>
  );
};
export default page;
