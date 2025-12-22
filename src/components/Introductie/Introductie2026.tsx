import "./styles.scss";

const Introductie2026: React.FunctionComponent = () => {
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
          <h2>Goed idee? Doe mee!</h2>
          <p>
            Met de Frisse Pitch ondersteunen Stadslab Zeist, Samen Duurzaam
            Zeist en de gemeente Zeist vernieuwende ideeën van inwoners. Deze
            initiatieven dragen bij aan een duurzamer, socialer en
            toekomstbestendig Zeist. Tijdens de Frisse Pitch Night maken
            deelnemers kans op €1.000 om hun idee uit te voeren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introductie2026;
