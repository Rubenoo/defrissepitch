import IdeeCriteria from "../IdeeCriteria/IdeeCriteria.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";
import IntroductieFrissePitch2025 from "../Introductie/IntroductieFrissePitch2025.tsx";
import WinnaarsFrissePitch2024 from "../WieGingenJeVoor/WinnaarsFrissePitch2024.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <IntroductieFrissePitch2025 />
      <WinnaarsFrissePitch2024 />
      <IdeeCriteria />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
