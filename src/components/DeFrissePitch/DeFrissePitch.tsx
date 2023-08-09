import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const DeFrissePitch: React.FunctionComponent = () => {
  return (
    <section className="align-items-center">
      <h3>De Frisse Pitch</h3>
      <p className="pitch">
        Samen Duurzaam Zeist en Stadslab Zeist gaan dit jaar op zoek naar{" "}
        <b>wilde plannen</b> voor Zeist! De 5 beste ideeën krijgen <b>€1.000</b>{" "}
        om het ook echt te gaan doen! Leuk toch?
      </p>
      <p className="pitch">
        Heb jij een wild, innovatief en te gek idee om van Zeist een inclusieve,
        creatieve, toekomstbestendige en <b>planetproof gemeente</b> te maken?
        Dan zien we je graag bij de <b>Frisse Pitch Night op 10 oktober</b> in
        het Torenlaan Theater waar jij jouw idee aan ons kunt pitchen.
      </p>
      <p className="pitch">
        Meld je idee <b>vóór 8 september</b> om 12.00 uur bij ons aan! Het zou
        zomaar kunnen dat jij in de prijzen gaat vallen en dat wij je gaan
        helpen om jouw plan te realiseren.
      </p>
      <p className="pitch">
        Wil je voor die tijd nog even <b>sparren</b> met ons? Dat kan! Op 5
        september organiseren wij een online meetup van 13 tot 14 uur. Aanmelden
        kan via
        <a className="pitch" href="mailto: idee@frissepitch.nl">
          idee@frissepitch.nl
        </a>
      </p>
      <Divider />
    </section>
  );
};

export default DeFrissePitch;
//            <a href="mailto: willy@stadslabzeist.nl">willy@stadslabzeist.nl</a>
