import Introductie from "../Introductie/Introductie.tsx";
import DeFrissePitch from "../DeFrissePitch/DeFrissePitch.tsx";
import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import Aanmelden from "../Aanmelden/Aanmelden.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Introductie />
      <DeFrissePitch />
      <Aanmelden />
      <IdeeCriteria />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
