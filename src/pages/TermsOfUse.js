import React from "react";
import "../styles/pages/TermsOfUse.css";

import terms_of_use_img from "../images/terms_of_use/terms_of_use_img.jpg";

const TermsOfUse = () => {
  return (
    <div className="terms_of_use_page">
      <div className="container">
        <div className="background_sheet">
          <div className="text_container">
            <h3>Regulamin</h3>
            <p>
              &#167;1. Każda osoba korzystająca z sauny mobilnej jest zobowiązana do zapoznania się
              z niniejszym regulaminem.
              <br />
              <br />
              &#167;2. Korzystanie z sauny oznacza zgodę na przestrzeganie postanowień niniejszego
              regulaminu.
              <br />
              <br />
              &#167;3. Osoby niepełnoletnie mogą korzystać z sauny tylko pod opieką osób dorosłych.
              <br />
              <br />
              &#167;4. Wejście do sauny stanowi potwierdzenie braku przeciwwskazań do korzystania z
              sauny. Saunowanie odbywa się na odpowiedzialność osoby korzystającej.
              <br />
              <br />
              &#167;5. Zabrania się korzystania z sauny przez osoby pod wpływem alkoholu lub innych
              substancji odurzających.
              <br />
              <br />
              &#167;6. Zakazuje się wnoszenia oraz spożywania artykułów spożywczych oraz alkoholu, a
              także palenia wyrobów tytoniowych i e-papierosów.
              <br />
              <br />
              &#167;7. Z sauny należy korzystać używając ręcznika w taki sposób aby żadna część
              ciała nie dotykała bezpośrednio z deskami ławki i oparcia.
              <br />
              <br />
              &#167;8. Ze względów bezpieczeństwa z sauny mogą korzystać minimum dwie osoby.
              <br />
              <br />
              &#167;9. Nie wolno dotykać pieca, kamieni ani komina gdyż grozi to poparzeniem.
              <br />
              <br />
              &#167;10. Osoba wynajmująca zobowiązuje się do oddania sauny w stanie niepogorszonym.
            </p>
            <div className="pdf_download">
              <div className="button_container">
                <button className="link_reset">Pobierz umowę wypożyczenia (pdf)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
