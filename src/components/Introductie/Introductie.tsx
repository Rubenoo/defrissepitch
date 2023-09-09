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
            Wil je weten wie er €1.000 gaat winnen? <br />
            <br />
            Kom dan naar de Frisse Pitch Night op 10 oktober in het Torenlaan
            Theater om 19.30 uur.
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
