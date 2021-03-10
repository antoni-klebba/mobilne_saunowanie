import React, { Component, createRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import TopContactBar from "./layouts/TopContactBar";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

class App extends Component {
  state = {};

  toAbout = createRef();
  toOffer = createRef();
  toGallery = createRef();
  toFooter = createRef();

  scrollToAbout = () => {
    this.toAbout.current.scrollIntoView();
  };

  scrollToOffer = () => {
    this.toOffer.current.scrollIntoView();
  };

  scrollToGallery = () => {
    this.toGallery.current.scrollIntoView();
  };

  scrollToFooter = () => {
    this.toFooter.current.scrollIntoView();
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <section className="top_contact_bar">
            <TopContactBar />
          </section>
          <nav className="nav">
            <Navigation
              scrollToAbout={this.scrollToAbout}
              scrollToOffer={this.scrollToOffer}
              scrollToGallery={this.scrollToGallery}
              scrollToFooter={this.scrollToFooter}
            />
          </nav>
          <div className="page">
            <Page toAbout={this.toAbout} toOffer={this.toOffer} toGallery={this.toGallery} />
          </div>
          <footer ref={this.toFooter} id="stopka" className="footer">
            <Footer />
          </footer>
          <div>
            <ScrollTopButton />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
