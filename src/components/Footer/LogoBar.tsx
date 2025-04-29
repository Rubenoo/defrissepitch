import React from "react";

const LogoBar: React.FC = () => {
  return (
    <section
      className={
        "d-flex flex-lg-row  flex-column justify-content-around py-lg-5 py-4 align-items-center gap-lg-0 gap-4"
      }
    >
      <img
        src="/assets/logo/gemeentezeist.svg"
        alt="Logo gemeente zeist"
        className="logoblock"
      />
      <img
        src="/assets/logo/SDZ.png"
        alt="Logo Samen Duurzaam Zeist"
        className="logolong"
      />
      <img
        src="/assets/logo/SLZ.png"
        alt="Logo Stadslab Zeist"
        className="logoblock"
      />
    </section>
  );
};
export default LogoBar;
