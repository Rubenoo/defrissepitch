import Introductie from "../Introductie/Introductie.tsx";
import VoorWie from "../VoorWie/VoorWie.tsx";
import Inschrijven from "../Inschrijven/Inschrijven.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Introductie />
      <VoorWie />
      <Inschrijven />
    </main>
  );
};

export default Main;
