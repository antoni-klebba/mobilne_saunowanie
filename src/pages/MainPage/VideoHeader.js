import React, { Component } from "react";
import "../../styles/pages/VideoHeader.css";

import header_video_dron1 from "../../videos/header_video_dron1.mp4";
import header_video_dron2 from "../../videos/header_video_dron2.mp4";
import poster_dron1 from "../../videos/poster_dron1.jpg";
import poster_dron2 from "../../videos/poster_dron2.jpg";

const cancelVideoTime = 21000;

class VideoHeader extends Component {
  state = {
    classVid1: "on",
    classVid2: null,
  };

  cancelVideo = () => {
    setTimeout(() => {
      this.setState({ classVid1: "off90" });
      setTimeout(() => {
        this.setState({ classVid1: "off80" });
        setTimeout(() => {
          this.setState({ classVid1: "off70" });
          setTimeout(() => {
            this.setState({ classVid1: "off60" });
            setTimeout(() => {
              this.setState({ classVid1: "off50" });
              setTimeout(() => {
                this.setState({ classVid1: "off40" });
                setTimeout(() => {
                  this.setState({ classVid1: "off30" });
                  setTimeout(() => {
                    this.setState({ classVid1: "off20" });
                    setTimeout(() => {
                      this.setState({ classVid1: "off10" });
                      setTimeout(() => {
                        this.setState({ classVid1: "off00" });
                        setTimeout(() => {
                          this.removeVideo();
                        }, 400);
                      }, 300);
                    }, 300);
                  }, 200);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  };

  removeVideo = () => {
    this.setState({
      classVid2: "removed",
    });
  };

  componentDidMount = () => {
    setTimeout(this.cancelVideo, cancelVideoTime);
  };
  render() {
    return (
      <div className="video_container">
        <video
          className={`${this.state.classVid1} ${this.state.classVid2}`}
          src={header_video_dron2}
          poster={poster_dron2}
          autoPlay
          muted></video>
        {/* <div className={`video_text ${this.state.classVid}`}>
              <p>Super sauna ekstra</p>
            </div> */}
      </div>
    );
  }
}

export default VideoHeader;
