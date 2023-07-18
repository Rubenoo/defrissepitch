import Introductie from "../Introductie/Introductie.tsx";
import VoorWie from "../VoorWie/VoorWie.tsx";
import Inschrijven from "../Inschrijven/Inschrijven.tsx";
import UitgangspuntenRandvoorwaarden from "../UitgangspuntenRandvoorwaarden/UitgangspuntenRandvoorwaarden.tsx";
import VeelgesteldeVragen from "../VeelgesteldeVragen/VeelgesteldeVragen.tsx";

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Introductie />
      <VoorWie />
      <Inschrijven />
      <UitgangspuntenRandvoorwaarden />
      <VeelgesteldeVragen />
    </main>
  );
};

export default Main;
