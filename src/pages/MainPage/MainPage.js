import React from "react";

import VideoHeader from "./VideoHeader";
import Header from "./Header/Header";
import About from "./About";
import Offer from "./Offer";
import Gallery from "./Gallery";

const MainPage = () => {
  return (
    <>
      <section className="video_header">
        <VideoHeader />
      </section>
      <header className="header">
        <Header />
      </header>
      <div id="about1" className="separating_line"></div>
      <section id="about" className="about">
        <About />
      </section>
      <div id="offer1" className="separating_line"></div>
      <main id="offer" className="offer">
        <Offer />
      </main>
      <div id="gallery1" className="separating_line"></div>
      <section id="gallery" className="gallery">
        <Gallery />
      </section>
    </>
  );
};

export default MainPage;
