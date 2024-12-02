function Header({ title, description }) {
  return (
    <div
      className="header page-header bg-img section-padding portfolio-hero-section above-hero-section"
      data-overlay-dark="8"
    >
      <div className="container">
        <div className="text-center">
          <h4 className="headline"> {title} </h4>
          <div className="mt-15">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
