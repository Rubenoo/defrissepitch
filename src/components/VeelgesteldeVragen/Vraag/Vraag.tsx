import React from "react";
import "./styles.scss";

export type VraagType = {
  titel: string;
  content: string;
};
export type Props = VraagType & {
  vraagKey: string;
};
const Vraag: React.FC<Props> = ({ titel, content, vraagKey }) => {
  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse-${vraagKey}`}
          aria-expanded="false"
          aria-controls={`panelsStayOpen-collapse-${vraagKey}`}
        >
          {titel}
        </button>
      </h5>
      <div
        id={`panelsStayOpen-collapse-${vraagKey}`}
        className="accordion-collapse collapse"
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
};
export default Vraag;
