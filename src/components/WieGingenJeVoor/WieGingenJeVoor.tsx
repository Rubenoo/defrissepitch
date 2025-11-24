import "./styles.scss";
import PitchersCarrousel from "../PitchersCarrousel/PitchersCarrousel.tsx";
import pitchers2024 from "../PitchersCarrousel/pitchers2024.json";
import pitchers2023 from "../PitchersCarrousel/pitchers2023.json";

import { PitcherCardType } from "../PitchersCarrousel/PitcherCard/PitcherCard.tsx";

const WieGingenJeVoor: React.FunctionComponent = () => {
  return (
    <section className={"position-relative"}>
      <img
        className={"idee idee--second"}
        src={"/assets/svg/FP_sticker_RGB_lampje_2.svg"}
        alt="lampje icoon"
      />
      <div className="wiegingenjevoor">
        <h3 className="pb-4 pb-lg-5">Wie gingen je voor?</h3>
        <PitchersCarrousel
          PitchersArray={
            [...pitchers2024, ...pitchers2023] as Array<PitcherCardType>
          }
        />
      </div>
    </section>
  );
};
export default WieGingenJeVoor;
