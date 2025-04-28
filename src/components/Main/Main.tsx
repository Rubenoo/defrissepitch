import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import IntroductieFrissePitch2025 from "../Introductie/IntroductieFrissePitch2025.tsx";
import WinnaarsFrissePitch2024 from "../WieGingenJeVoor/WinnaarsFrissePitch2024.tsx";
import DeFrissePitch2025 from "../DeFrissePitch/DeFrissePitch2025.tsx";
import BelangrijkeData from "../BelangrijkeData/BelangrijkeData.tsx";
import Inschrijven from "../Inschrijven/Inschrijven.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitch2025 />
      <DeFrissePitch2025 />
      <Inschrijven />
      <WinnaarsFrissePitch2024 />
      <IdeeCriteria />
      <BelangrijkeData />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
