import "./styles.scss";

const IntroductieFrissePitch2025: React.FunctionComponent = () => {
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
          <h2>Fris idee? Doe mee!</h2>
          <p>
            Heb jij een wild, innovatief en te gek idee om van Zeist een
            duurzame, planet-proof, inclusieve en toekomstbestendige gemeente te
            maken?
          </p>
          <a className="btn" href="#inschrijven">
            Aanmelden!
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroductieFrissePitch2025;
