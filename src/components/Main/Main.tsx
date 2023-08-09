import Introductie from "../Introductie/Introductie.tsx";
import DeFrissePitch from "../DeFrissePitch/DeFrissePitch.tsx";
import Inschrijven from "../Inschrijven/Inschrijven.tsx";
import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Introductie />
      <DeFrissePitch />
      <Inschrijven />
      <IdeeCriteria />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
