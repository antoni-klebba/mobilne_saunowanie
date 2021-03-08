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
          <p>
            Dowóz sauny jest darmowy do 10km od Swarzewa. Każdy dodatkowy kilometr kosztuje 5zł.
          </p>
          <h4>Opcja 1</h4>
          <p>
            Sauna przyjeżdża rozpalona lub nie na Państwa teren prywatny i jest odbierana następnego
            dnia.
          </p>
          <h5>Koszt: 300zł/doba</h5>
          <h4>Opcja 2</h4>
          <p>
            Rozpalona sauna stoi na parkinku przy plaży o umówionej porze. W tym wariancie palenisko
            jest doglądane przez nas, a Państwo mogą oddać się kompielom i saunowaniu bez myślenia o
            niej.
          </p>
          <h5>Koszt: 300zł/3 godziny saunowania</h5>
          <p>Aby zareserwować saunę prosimy o telefon pod numer: </p>
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
