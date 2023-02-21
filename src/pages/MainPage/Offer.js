import React from "react";
import "../../styles/pages/Offer.css";

const Offer = () => {
  return (
    <div className="container">
      <div className="background_sheet">
        <div className="text_container">
          <h3>Oferta</h3>
          <p>Sauna jest przeznaczona dla maksymalnie 10 osób.</p>
          <p>Dodatkowo wraz z sauną oferujemy w cenie opał drzewny.</p>
          <p>Dowóz sauny jest płatny - 5zł za kilometr.</p>
          <h4>Saunowanie na własnym podwórku</h4>
          <p>
            Sauna przyjeżdża na Państwa teren prywatny. Rozpalamy ją i zostawiamy do Państwa
            dyspozycji.
          </p>
          <h5>Koszt: 300zł / 3 godziny</h5>
          <h4>Saunowanie przy plaży</h4>
          <p>
            Rozpalona sauna stoi na parkingu przy plaży o umówionej porze. W tym wariancie palenisko
            jest doglądane przez nas, a Państwo mogą oddać się kąpielom i relaksie w saunie bez
            zaprzątania sobie głowy podtrzymywaniem ognia.
          </p>
          <h5>Koszt: 300zł / 2 godziny</h5>
          <p>Aby zarezerwować saunę prosimy o telefon pod numer: </p>
          <p className="offer_phone_number">
            <strong>
              <a className="link_reset" rel="nofollow" href="tel: 607 327 678">
                607 327 678
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
