import Introductie from "../Introductie/Introductie.tsx";
import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import Inschrijven from "../Inschrijven/Inschrijven.tsx";
import DeFrissePitch2024 from "../DeFrissePitch/DeFrissePitch2024.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Introductie />
      <DeFrissePitch2024 />
      <Inschrijven />
      <IdeeCriteria />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
