import "./styles.scss";
import PitchersCarrousel from "../PitchersCarrousel/PitchersCarrousel.tsx";

const WieGingenJeVoor: React.FunctionComponent = () => {
  return (
    <section className={"position-relative"}>
      <img
        className={"idee"}
        src={"/assets/svg/FP_sticker_RGB_lampje_2.svg"}
        alt="lampje icoon"
      />
      <div className="wiegingenjevoor">
        <h3>Wie gingen je voor?</h3>
        <p className={"pitch"}>
          In 2023 vond de eerste editie van de Frisse Pitch plaats. Het was een
          groot succes! Deze 5 initiatiefnemers hebben dankzij de €1.000
          prijzengeld hun idee voor Zeist uit kunnen voeren. Ontmoet de Frisse
          Pitchers die jou voorgingen en raak geïnspireerd om ook mee te doen
        </p>
        <PitchersCarrousel />
      </div>
    </section>
  );
};

export default WieGingenJeVoor;
