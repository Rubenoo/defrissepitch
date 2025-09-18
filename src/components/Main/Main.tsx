import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import BelangrijkeData from "../BelangrijkeData/BelangrijkeData.tsx";
import IntroductieFrissePitchNight from "../Introductie/IntroductieFrissePitchNight.tsx";
import AanmeldenFrissePitchNight from "../AanmeldenFrissePitchNight/AanmeldenFrissePitchNight.tsx";
import DeFrissePitchNight2025 from "../DeFrissePitch/DeFrissePitchNight2025.tsx";
import WieZijnDeFinalisten from "../WieGingenJeVoor/WieZijnDeDeelnemers2025.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitchNight />
      <DeFrissePitchNight2025 />
      <AanmeldenFrissePitchNight />
      <WieZijnDeFinalisten />
      <IdeeCriteria />
      <BelangrijkeData />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
