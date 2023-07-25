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
          <h2>wild idee?</h2>
          <p>
            Pitch jouw idee om Zeist nog leuker, socialer en duurzamer te maken
            en maak kans op €1.000 cash om je idee uit te voeren!
          </p>
          <a className="btn" href="#inschrijven">
            Inschrijven!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introductie;
