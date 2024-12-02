import Link from "next/link";

function Header() {
  return (
    <div
      className="header main-header bg-img about-us-header-custom portfolio-hero-section above-hero-section"
      data-overlay-dark="8"
    >
      <div className="container pt-20">
        <div className="row justify-content-start">
          <div className="col-lg-10">
            <div className="text mb-100">
              <h4 className="headline">
                Turning Your Vision into Impactful Digital Solutions for
                Business Growth
              </h4>

              <div>
                <span>
                From the inception of a visionary idea to the creation of impactful digital solutions, we are committed to helping businesses thrive in a fast-paced digital world. With innovative strategies, cutting-edge technology, and a focus on long-term success, we guide businesses toward achieving sustained growth, market leadership, and digital transformation.
                </span>
              </div>

              <Link href="/contact-us" className="get-started">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
