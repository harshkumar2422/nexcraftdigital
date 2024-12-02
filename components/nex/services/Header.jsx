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
                Empowering your business through tailored digital innovation.{" "}
              </h4>
              <div>
                <span>
                  Imagine a journey where your ideas evolve into powerful
                  digital solutions, creating growth and success for your
                  business at every step. We’re here to make that vision a
                  reality.
                </span>
              </div>

              <Link href="/contact-us" className="get-started">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
