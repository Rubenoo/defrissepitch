import Introductie from "../Introductie/Introductie.tsx";
import VoorWie from "../VoorWie/VoorWie.tsx";
import Inschrijven from "../Inschrijven/Inschrijven.tsx";
import UitgangspuntenRandvoorwaarden from "../UitgangspuntenRandvoorwaarden/UitgangspuntenRandvoorwaarden.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Introductie />
      <VoorWie />
      <Inschrijven />
      <UitgangspuntenRandvoorwaarden />
    </main>
  );
};

export default Main;
