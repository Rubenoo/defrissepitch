import "./styles.scss";

const Introductie: React.FunctionComponent = () => {
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
          <h2>Frisse Pitch Night</h2>
          <p>
            Heb jij een wild, innovatief en te gek idee om van Zeist een
            inclusieve, creatieve, toekomstbestendige en planet proof gemeente
            te maken? Meld je idee dan vóór 5 september aan en maak kans om
            tijdens de Frisse Pitch Night op 9 oktober €1.000 te winnen om je
            plan te realiseren.
          </p>
          <a className="btn" href="#inschrijven">
            Aanmelden!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introductie;
