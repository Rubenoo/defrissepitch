import "./styles.scss";
import PitchersCarrousel from "../PitchersCarrousel/PitchersCarrousel.tsx";

const WinnaarsFrissePitch2024: React.FunctionComponent = () => {
  return (
    <section className={"position-relative pt-0 pt-lg-5 z-0"}>
      <div className="wiegingenjevoor">
        <h3>Winnaars van de Frisse Pitch Night 2024</h3>
        <p className={"pitch"}>
          Deze geweldige initiatieven gingen je voor en hebben <b>€1.000</b>{" "}
          gewonnen om hun planet proof idee voor Zeist te gaan realiseren.
        </p>
        <PitchersCarrousel />
      </div>
    </section>
  );
};

export default WinnaarsFrissePitch2024;
