import "./styles.scss";
import PitchersCarrousel from "../PitchersCarrousel/PitchersCarrousel.tsx";

const WieZijnDeFinalisten: React.FunctionComponent = () => {
  return (
    <section className={"position-relative"}>
      <img
        className={"idee"}
        src={"/assets/svg/FP_sticker_RGB_lampje_2.svg"}
        alt="lampje icoon"
      />
      <div className="wiegingenjevoor">
        <h3>Wie zijn de finalisten?</h3>
        <p className={"pitch"}>
          Deze <b>acht</b> initiatiefnemers gaan op de <b>Frisse Pitch Night</b>{" "}
          hun planet proof idee voor Zeist pitchen aan onze vakjury en het
          publiek, en hopen naar huis te gaan met <b>€1.000</b> prijzengeld om
          hun idee uit te kunnen voeren.
        </p>
        <PitchersCarrousel />
      </div>
    </section>
  );
};

export default WieZijnDeFinalisten;
