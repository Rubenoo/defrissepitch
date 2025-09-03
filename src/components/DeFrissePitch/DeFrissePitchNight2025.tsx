import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const DeFrissePitchNight2024: React.FunctionComponent = () => {
  return (
    <section className="align-items-center pt-lg-4 pt-1">
      <h3>De Frisse Pitch Night 2025</h3>
      <p className="pitch">
        Wil je weten wie er <b>€1.000</b> gaat winnen? <br />
        Kom dan naar de Frisse Pitch Night op{" "}
        <b>
          8 oktober in Lab Lou
          <a
            href={"https://maps.app.goo.gl/H6KnmUVRfF3wCedK8"}
            target={"_blank"}
          >
            ( Weteringlaan 1, Zeist )
          </a>{" "}
          om 19.15 uur.
        </b>
      </p>
      <h4 id="programma">Programma Frisse Pitch Night in Lab Lou</h4>
      <p className="pitch pitch-container">
        <p>
          <b>19.15 uur</b>
        </p>
        <p>Inloop</p>
        <p>
          <b>20.00 uur</b>
        </p>
        <p>Pitchronde 1</p>
        <p>
          <b>20.50 uur</b>
        </p>
        <p>Pauze</p>
        <p>
          <b>21.00 uur</b>
        </p>
        <p>Pitchronde 2</p>
        <p>
          <b>21.30 uur</b>
        </p>
        <p>Publiek stemt en juryberaad</p>
        <p>
          <b>21.45 uur</b>
        </p>
        <p>Uitslag 4 juryprijzen en publieksprijs </p>
        <p>
          <b>22.00 uur</b>
        </p>
        <p>Afsluiting & borrel</p>
      </p>
      <p className="pitch">
        De avond wordt gepresenteerd door <b>Daan Warnas</b>.
      </p>
      <p className="pitch">
        Tijdens de inloop, in de pauze en na afloop is er ruimte om het{" "}
        <b>Team Duurzaamheid</b> van de gemeente Zeist te ontmoeten en een leuke
        pre-loved outfit te scoren bij de kleding swap. Proef ook van de lekker
        toekomstbestendige hapjes en geniet van de muzikale deuntjes van{" "}
        <b>Tommy the Sound.</b>
      </p>
      <p className="pitch">
        Wil jij dat jouw favoriet de publieksprijs van €1.000 wint? Kom dan ook
        op 8 oktober en breng jouw stem uit. Reserveer alvast je gratis tickets
        via het formulier op deze website!
      </p>
      <Divider />
    </section>
  );
};

export default DeFrissePitchNight2024;
