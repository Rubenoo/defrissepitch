import React from "react";
import Divider from "../Divider/Divider.tsx";
import "./styles.scss";

const IdeeCriteria: React.FC = () => {
  return (
    <section className="container text-start">
      <div className="overlay-svg overlay-svg--recycle-stekker svg-uitgangspunten" />

      <h4>Wanneer is jouw idee een Frisse Pitch idee (de criteria)?</h4>
      <div className="row">
        <div className="col-lg-9 col-12">
          <ul>
            <li>
              Het idee maakt Zeist toekomstbestendig. Het helpt ons op weg naar
              een planetproof samenleving; het idee heeft te maken met klimaat,
              circulaire economie, natuur, sociale cohesie of bijvoorbeeld een
              gezondere leefomgeving.
            </li>
            <li>
              Het plan wordt uitgevoerd in de gemeente Zeist; Het gaat tenslotte
              over onze plaats.
            </li>
            <li>
              Het moet Zeistenaren aanspreken. Klein of groot. Ze moeten het
              kunnen tegenkomen. Binnen of buiten. En er moet over gekletst
              worden. In de straat, de buurt, het liefst tot aan de
              burgemeesterskamer aan toe!
            </li>
            <li>
              Het is verrassend; Jouw idee moet nieuwsgierigheid opwekken.
              Prikkelen, verbazen, een ‘wow-effect’ veroorzaken. Het is iets
              waar mensen nog niet eerder aan hebben gedacht, of niet eens
              wisten dat het mogelijk was.
            </li>
            <li>
              Het is doordacht; Jouw idee getuigt van lef, zelfvertrouwen en
              slimmigheid. Het lijkt bijna zo vanzelfsprekend dat mensen zich
              vooral afvragen waarom niemand dit ooit eerder heeft bedacht.
            </li>
            <li>
              Het verbindt inwoners, wijken, ideeën en/of domeinen; Zo doen we
              het met z’n allen en kunnen we Zeist nog leuker, socialer en
              duurzamer maken.
            </li>
            <li>
              Als initiatiefnemers blijf je eindverantwoordelijk en eigenaar van
              het concept.
            </li>
            <li>
              Jouw idee start in 2023 en is uitvoerbaar binnen budget en één
              jaar tijd.
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12">
          <div className="overlay-svg overlay-svg--bij-smiley svg-randvoorwaarden" />
        </div>
      </div>
      <Divider />
    </section>
  );
};
export default IdeeCriteria;
