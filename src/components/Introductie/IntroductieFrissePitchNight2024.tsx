import "./styles.scss";

const IntroductieFrissePitchNight2024: React.FunctionComponent = () => {
  return (
    <section className="introductie">
      <div className="achtergrond-licht-groen">
        <h1>
          de
          <br />
          frisse
          <br />
          pitch
        </h1>
        <div className="overlay-svg overlay-svg--bij-blaadje" />
      </div>

      <div>
        <div className="card">
          <h2>Inschrijving gesloten!</h2>
          <p>
            Hallo Frisse Pitcher! Het is dit jaar helaas niet meer mogelijk om
            jouw wilde, frisse idee in te sturen. Maar gelukkig heb je volgend
            jaar weer een kans!
            <br />
            <br />
            Benieuwd wie er gaan pitchen? Kom naar de Frisse Pitch Night op 9
            oktober in Lab Lou.
          </p>
          <a className="btn" href="#inschrijven">
            Frisse Pitch Night Tickets
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroductieFrissePitchNight2024;
