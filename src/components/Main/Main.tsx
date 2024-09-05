import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import DeFrissePitchNight2024 from "../DeFrissePitch/DeFrissePitchNight2024.tsx";
import IntroductieFrissePitchNight2024 from "../Introductie/IntroductieFrissePitchNight2024.tsx";
import Aanmelden from "../Aanmelden/Aanmelden.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitchNight2024 />
      <DeFrissePitchNight2024 />
      <Aanmelden />
      <IdeeCriteria />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
