import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import WinnaarsFrissePitch2024 from "../WieGingenJeVoor/WinnaarsFrissePitch2024.tsx";
import BelangrijkeData from "../BelangrijkeData/BelangrijkeData.tsx";
import IntroductieFrissePitchNight from "../Introductie/IntroductieFrissePitchNight.tsx";
import AanmeldenFrissePitchNight from "../AanmeldenFrissePitchNight/AanmeldenFrissePitchNight.tsx";
import DeFrissePitchNight2025 from "../DeFrissePitch/DeFrissePitchNight2025.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitchNight />
      <DeFrissePitchNight2025 />
      <AanmeldenFrissePitchNight />
      <WinnaarsFrissePitch2024 />
      <IdeeCriteria />
      <BelangrijkeData />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
