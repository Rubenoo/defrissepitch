import "./styles.scss";
import PitchersCarrousel from "../PitchersCarrousel/PitchersCarrousel.tsx";
import winnaars2025 from "../PitchersCarrousel/winnaars2025.json";
import winnaars2024 from "../PitchersCarrousel/winnaars2024.json";
import pitchers2023 from "../PitchersCarrousel/pitchers2023.json";

import { PitcherCardType } from "../PitchersCarrousel/PitcherCard/PitcherCard.tsx";
const WinnaarsFrissePitch: React.FunctionComponent = () => {
  const pitchers = [...pitchers2023, ...winnaars2024, ...winnaars2025];
  return (
    <section className={"position-relative pt-0 pt-lg-5 z-0"}>
      <div className="wiegingenjevoor">
        <h3>Winnaars van de Frisse Pitch</h3>
        <p className={"pitch"}>
          Deze initiatiefnemers hebben in 2023, 2024 en 2025 hun ideeën gepitcht
          en <b>€1.000</b> prijzengeld gewonnen om hun plan daadwerkelijk te
          realiseren.
        </p>
        <PitchersCarrousel PitchersArray={pitchers as Array<PitcherCardType>} />
      </div>
    </section>
  );
};

export default WinnaarsFrissePitch;
