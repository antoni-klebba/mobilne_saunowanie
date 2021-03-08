import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import "../../../styles/pages/Header.css";

// Images
import horizontal_header1 from "../../../images/header/large/horizontal_header1.jpg";
import horizontal_header2 from "../../../images/header/large/horizontal_header2.jpg";
import horizontal_header3 from "../../../images/header/large/horizontal_header3.jpg";
import horizontal_header4 from "../../../images/header/large/horizontal_header4.jpg";

const HeaderLargeWidth = () => {
  const changeImgInterval = 6900;

  const images = [
    {
      original: horizontal_header1,
      thumbnail: null,
    },
    {
      original: horizontal_header2,
      thumbnail: null,
    },
    {
      original: horizontal_header3,
      thumbnail: null,
    },
    {
      original: horizontal_header4,
      thumbnail: null,
    },
  ];

  return (
    <div className="header_container">
      <div className="header_gallery">
        <ImageGallery
          lazyLoad={true}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideDuration={400}
          slideInterval={changeImgInterval}
          flickThreshold={0.1}
          items={images}
          showBullets={true}
        />
      </div>

      {/* <div className="image_text">
          <div className="text_container">
          <p>Mobilna sauna. Zadzwoń i zamów saunę dla zdrowia i relaksu.</p>
        </div>
        </div> */}
    </div>
  );
};

export default HeaderLargeWidth;
