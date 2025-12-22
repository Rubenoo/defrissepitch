import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import IntroductieFrissePitchNight from "../Introductie/IntroductieFrissePitchNight.tsx";
import WinnaarsFrissePitch from "../WieGingenJeVoor/WinnaarsFrissePitch.tsx";
import DeFrissePitch2026 from "../DeFrissePitch/DeFrissePitch2026.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitchNight />
      <DeFrissePitch2026 />
      <WinnaarsFrissePitch />
      <IdeeCriteria />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
