import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const DeFrissePitch: React.FunctionComponent = () => {
  return (
    <section className="align-items-center">
      <h3>De Frisse Pitch</h3>
      <p className="pitch">
        Hallo Frisse Pitcher! Het is dit jaar helaas niet meer mogelijk om jouw
        wilde idee in te sturen. Maar gelukkig heb je volgend jaar weer een
        kans!
      </p>
      <p className="pitch">
        Wil je weten wie er <b>€1.000</b> gaat winnen? Kom dan naar de Frisse
        Pitch Night op <b>10 oktober</b> in het <b>Torenlaan Theater</b> om{" "}
        <b>19.30 uur</b>. Programma en info volgen snel!
      </p>
      <p className="pitch">Aanmelden kan wel al vanaf nu!</p>
      <Divider />
    </section>
  );
};

export default DeFrissePitch;
