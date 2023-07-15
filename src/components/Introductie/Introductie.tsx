import "./styles.scss";

const Introductie: React.FunctionComponent = () => {
  return (
    <section>
      <div className="achtergrond-licht-groen">
        <h1>
          de
          <br />
          frisse
          <br />
          pitch
        </h1>
      </div>
      <div>
        <div className="card">
          <h2>wild idee?</h2>
          <p>
            Pitch jouw idee om Zeist nog leuker, socialer en duurnamer te maken
            en maak kans op €1.000 cash om je idee uit te voeren!
          </p>
          <button type="button" className="btn">
            Inschrijven!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introductie;
