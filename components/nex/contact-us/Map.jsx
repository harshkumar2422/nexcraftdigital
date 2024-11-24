import React from "react";

function Map() {
  return (
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264630479!2d76.76356174793418!3d28.64368459580164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1732460599371!5m2!1sen!2sin"
        id="gmap_canvas"
      ></iframe>
    </div>
  );
}

export default Map;
