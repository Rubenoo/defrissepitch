import React from "react";

const LogoBar: React.FC = () => {
  return (
    <section
      className={
        "d-flex flex-lg-row  flex-column justify-content-around py-lg-5 py-4 align-items-center gap-lg-0 gap-4"
      }
    >
      <a href={"https://www.zeist.nl"} target={"_blank"}>
        <img
          src="/assets/logo/gemeentezeist.svg"
          alt="Logo gemeente zeist"
          className="logoblock"
        />
      </a>
      <a href={"https://www.samenduurzaamzeist.nl"} target={"_blank"}>
        <img
          src="/assets/logo/SDZ.png"
          alt="Logo Samen Duurzaam Zeist"
          className="logolong"
        />
      </a>
      <a href={"https://www.stadslabzeist.nl"} target={"_blank"}>
        <img
          src="/assets/logo/SLZ.png"
          alt="Logo Stadslab Zeist"
          className="logoblock"
        />
      </a>
    </section>
  );
};
export default LogoBar;
