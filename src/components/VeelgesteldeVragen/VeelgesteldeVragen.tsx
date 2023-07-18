import React from "react";
import "./styles.scss";
import Vraag, { VraagType } from "./Vraag/Vraag.tsx";
import VragenLijstJSON from "./Vragen.json";

type VragenLijst = {
  titel: string;
  vragen: Array<VraagType>;
};

const VeelgesteldeVragen: React.FC = () => {
  return (
    <section className="container text-start">
      <h3 className="text-center">Veelgestelde vragen</h3>
      {VragenLijstJSON.map((vragenLijst: VragenLijst, index) => {
        return (
          <React.Fragment key={index}>
            <h4 key={index}>{vragenLijst.titel}</h4>
            <div
              className="accordion accordion-flush"
              id={`accordionVragen-${index}`}
            >
              {vragenLijst.vragen.map((vraag: VraagType, indexVraag) => {
                return (
                  <Vraag
                    titel={vraag.titel}
                    content={vraag.content}
                    key={`key-${index}-${indexVraag}`}
                    vraagKey={`vraagkey-${index}-${indexVraag}`}
                  />
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};
export default VeelgesteldeVragen;
//Create an accordion
