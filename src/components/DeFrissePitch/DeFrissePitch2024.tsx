import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const DeFrissePitch2024: React.FunctionComponent = () => {
  return (
    <section className="align-items-center">
      <h3>De Frisse Pitch 2024</h3>
      <p className="pitch">
        Samen Duurzaam Zeist en Stadslab Zeist zijn op zoek naar frisse,
        duurzame, sociale en creatieve plannen voor Zeist! Heb jij een leuk
        idee? Meld je idee <b>vóór 5 september om 12.00 uur</b> bij ons aan!
      </p>
      <p className="pitch">
        Wie weet krijg jij de kans om tijdens de Frisse Pitch Night op{" "}
        <b>9 oktober</b> in Lab Lou jouw plan te pitchen.
      </p>
      <p className="pitch">
        Wil je voor die tijd nog even sparren met ons? Dat kan! Stuur een mail
        naar
        <a className="pitch" href="mailto: idee@frissepitch.nl">
          <em>idee@frissepitch.nl</em>
        </a>{" "}
        en we plannen een telefonisch overleg in!
      </p>
      <Divider />
    </section>
  );
};

export default DeFrissePitch2024;
