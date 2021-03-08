import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import TopContactBar from "./layouts/TopContactBar";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="app">
          <section className="top_contact_bar">
            <TopContactBar />
          </section>
          <nav className="nav">
            <Navigation />
          </nav>
          <div className="page">
            <Page />
          </div>
          <footer id="footer" className="footer">
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
