import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import "../../styles/pages/Gallery.css";

// Images
import gallery1 from "../../images/gallery/gallery1.jpg";
import gallery2 from "../../images/gallery/gallery2.jpg";
import gallery3 from "../../images/gallery/gallery3.jpg";
import gallery4 from "../../images/gallery/gallery4.jpg";
import gallery5 from "../../images/gallery/gallery5.jpg";
import gallery_map2 from "../../images/gallery/gallery_map2.jpg";

// Thumbnails
import thumbnail_gallery1 from "../../images/gallery/thumbnail_gallery1.jpg";
import thumbnail_gallery2 from "../../images/gallery/thumbnail_gallery2.jpg";
import thumbnail_gallery3 from "../../images/gallery/thumbnail_gallery3.jpg";
import thumbnail_gallery4 from "../../images/gallery/thumbnail_gallery4.jpg";
import thumbnail_gallery5 from "../../images/gallery/thumbnail_gallery5.jpg";
import thumbnail_gallery_map from "../../images/gallery/thumbnail_gallery_map.jpg";

// Video image and thumbnail
import gallery_video from "../../videos/gallery_video.jpg";
import gallery_video_thumbnail from "../../videos/gallery_video_thumbnail.jpg";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: {},
      useWindowKeyDown: true,
    };

    this.images = [
      {
        thumbnail: gallery_video_thumbnail,
        original: gallery_video,
        embedUrl: "https://www.youtube.com/embed/bzCMAw5etOY?autoplay=1&showinfo=0",
        description: "",
        renderItem: this._renderVideo.bind(this),
      },
      {
        original: gallery1,
        thumbnail: thumbnail_gallery1,
      },
      {
        original: gallery2,
        thumbnail: thumbnail_gallery2,
      },
      {
        original: gallery3,
        thumbnail: thumbnail_gallery3,
      },
      {
        original: gallery4,
        thumbnail: thumbnail_gallery4,
      },
      {
        original: gallery5,
        thumbnail: thumbnail_gallery5,
      },
      {
        original: gallery_map2,
        thumbnail: thumbnail_gallery_map,
      },
    ];
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.slideInterval !== prevState.slideInterval ||
      this.state.slideDuration !== prevState.slideDuration
    ) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _onSlide(index) {
    this._resetVideo();
  }

  _handleInputChange(state, event) {
    this.setState({ [state]: event.target.value });
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}></a>
            <iframe
              width="560"
              height="315"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen></iframe>
          </div>
        ) : (
          <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} />
            {item.description && (
              <span className="image-gallery-description" style={{ right: "0", left: "initial" }}>
                {item.description}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }
  render() {
    return (
      <div className="main_page_gallery">
        <ImageGallery
          ref={(i) => (this._imageGallery = i)}
          items={this.images}
          lazyLoad={false}
          onSlide={this._onSlide.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton && this.state.showGalleryFullscreenButton
          }
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />
      </div>
    );
  }
}

export default Gallery;
