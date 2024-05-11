import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const DeFrissePitch: React.FunctionComponent = () => {
  return (
    <section className="align-items-center">
      <h3>De Frisse Pitch 2024</h3>
      <p className="pitch">
        Samen Duurzaam Zeist en Stadslab Zeist gaan op zoek naar frisse,
        duurzame, sociale en creatieve plannen voor Zeist! Daarom organiseren
        wij op <b>9 oktober 2024</b> de Frisse Pitch waar je jouw idee kunt
        pitchen. De <b>5 beste ideeën krijgen €1.000</b> om het ook echt te gaan
        doen! Leuk toch?
      </p>
      <p className="pitch">
        Dus heb jij een wild, innovatief en te gek idee om van Zeist een
        inclusieve, creatieve, toekomstbestendige en planet proof gemeente te
        maken? Dan zou het zomaar kunnen dat jij in de prijzen gaat vallen en
        dat wij je gaan helpen om jouw plan te realiseren!
      </p>
      <p className="pitch">
        Meld je idee <b>vóór 5 september om 12.00 uur</b> bij ons aan en wie
        weet zien we je bij de Frisse Pitch Night op <b>9 oktober</b> in Lab Lou
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

export default DeFrissePitch;
