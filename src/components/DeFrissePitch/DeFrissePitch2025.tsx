import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const DeFrissePitch2025: React.FunctionComponent = () => {
  return (
    <section className="align-items-center pt-lg-4 pt-2">
      <h3>De Frisse Pitch 2025</h3>
      <p className="pitch">
        Samen Duurzaam Zeist is op zoek naar frisse, duurzame, planetproof,
        sociale en creatieve ideeën voor gemeente Zeist! Heb jij zo’n Fris Idee?
        Meld je dan <b>vóór 7 september om 12.00 uur</b> bij ons aan! Wie weet
        krijg jij de kans om tijdens de Frisse Pitch Night op <b>8 oktober</b>{" "}
        in Lab Lou jouw plan te pitchen en win jij <b>€1.000</b> om het uit te
        voeren.
      </p>
      <p className="pitch">
        Wil je eerst nog even sparren met ons? Dat kan! Stuur een mail naar
        <a className="pitch" href="mailto: idee@frissepitch.nl">
          <em>idee@frissepitch.nl</em>
        </a>{" "}
        en we nemen zo snel mogelijk contact met je op.
      </p>
      <Divider />
    </section>
  );
};

export default DeFrissePitch2025;
