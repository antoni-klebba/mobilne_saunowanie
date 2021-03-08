import React from "react";
import "../styles/pages/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <div className="container">
        <div className="background_sheet">
          <div className="text_container">
            <h3>Coś poszło nie tak...</h3>
            <p>Upewnij się czy został wpisany poprawny adres strony</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
