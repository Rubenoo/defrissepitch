import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import BelangrijkeData from "../BelangrijkeData/BelangrijkeData.tsx";
import IntroductieFrissePitchNight from "../Introductie/IntroductieFrissePitchNight.tsx";
import WieGingenJeVoor from "../WieGingenJeVoor/WieGingenJeVoor.tsx";
import WinnaarsFrissePitch2025 from "../WieGingenJeVoor/WinnaarsFrissePitch2025.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitchNight />
      <WinnaarsFrissePitch2025 />
      <WieGingenJeVoor />
      <IdeeCriteria />
      <BelangrijkeData />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
