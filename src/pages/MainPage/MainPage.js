import React from "react";

// import VideoHeader from "./VideoHeader";
import Header from "./Header/Header";
import About from "./About";
import Offer from "./Offer";
import Gallery from "./Gallery";

const MainPage = (props) => {
  return (
    <>
      {/* <section className="video_header">
        <VideoHeader />
      </section> */}
      <header className="header">
        <Header />
      </header>
      <div ref={props.toAbout} className="separating_line"></div>
      <section className="about">
        <About />
      </section>
      <div ref={props.toOffer} className="separating_line"></div>
      <main className="offer">
        <Offer />
      </main>
      <div ref={props.toGallery} className="separating_line"></div>
      <section className="gallery">
        <Gallery />
      </section>
    </>
  );
};

export default MainPage;
