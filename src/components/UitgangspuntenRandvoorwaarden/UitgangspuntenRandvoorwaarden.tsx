import React from "react";
import Divider from "../Divider/Divider.tsx";
import "./styles.scss";

const UitgangspuntenRandvoorwaarden: React.FC = () => {
  return (
    <section className="container text-start">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="overlay-svg overlay-svg--recycle-stekker svg-uitgangspunten" />
          <h4>uitgangspunten frisse pitch</h4>
          <ul>
            <li>
              Het idee wordt gedragen door meer dan één initiatiefnemer Deelname
              aan de Frisse pitch kan alleen in groepsverband (2 of meer). Er
              moet een zekerheid zijn dat het initiatief voldoende draagvlak
              heeft.
            </li>
            <li>
              Het idee voldoet aan (zoveel mogelijk van) de volgende vijf
              criteria:
              <ol>
                <li>
                  Het idee vergroot de duurzaamheid: Het idee heeft te maken met
                  klimaatverandering, circulaire economie, natuur en landschap
                  en/of een gezonde leefomgeving.
                </li>
                <li>
                  Het wordt uitgevoerd in de gemeente Zeist dwz in Austerlitz,
                  Bosch en Duin, Den Dolder, Huis ter Heide en/of Zeist
                </li>
                <li>
                  Het is verrassend: Het idee wekt de nieuwsgierigheid op, is
                  prikkelend, en verbazingwekkend.
                </li>
                <li>
                  Het is doordacht: Het idee getuigt van lef, zelfvertrouwen en
                  zit goed in elkaar. Het idee is binnen budget en tijd
                  uitvoerbaar.
                </li>
                <li>
                  Het idee verbindt inwoners, wijken, ideeën en/of domeinen:
                  Verbindend verduurzamen noemen we dat.
                </li>
              </ol>
            </li>
            <li>
              Het in te dienen idee kan ook een deel van een groter geheel zijn.
            </li>
            <li>Per groep kun je slechts één idee aanmelden.</li>
            <li>
              Een idee waaraan twee of meer groepen samenwerken, zien wij als
              één ideeproject. Je kunt dus samen maar één idee inschrijven.
            </li>
            <li>Controversiële ideeen worden niet toegelaten.</li>
            <li>De uitvoering van het idee vindt plaats vóór oktober 2024.</li>
            <li>
              Als je genomineerd wordt dan wordt jouw idee openbaar gemaakt via
              de website en social media kanalen van Frisse Pitch en partners
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>randvoorwaarden</h4>
          <ul>
            <li>
              Alleen volledig ingevulde formulieren worden in behandeling
              genomen.
            </li>
            <li>Initiatiefnemers dienen woonachtig te zijn in Zeist.</li>
            <li>
              Initiatiefnemers worden vertegenwoordigd door één contactpersoon.
            </li>
            <li>
              Initiatiefnemers blijven eindverantwoordelijk en eigenaar van het
              idee.
            </li>
            <li>De voorgestelde activiteiten zijn nog niet uitgevoerd.</li>
          </ul>
          <div className="overlay-svg overlay-svg--bij-smiley svg-randvoorwaarden" />
        </div>
      </div>
      <Divider />
    </section>
  );
};
export default UitgangspuntenRandvoorwaarden;
