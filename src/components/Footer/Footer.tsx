import "./styles.scss";
import InstagramIcon from "../../components/SocialIcons/InstagramIcon.tsx";
import FacebookIcon from "../../components/SocialIcons/FacebookIcon.tsx";

const Footer: React.FunctionComponent = () => {
  return (
    <footer id="footer">
      <img
        className="svg-lamp"
        src="/assets/svg/FP_sticker_RGB_lampje_2.svg"
        alt="Sticker lampje"
      />
      <div className="row text-start">
        <div className="col-lg-3 col-sm-12 logo-container">
          <img
            src="/assets/svg/FP_beeldmerk_RGB_vorm_staand.svg"
            alt="Logo frisse start"
            className="logo"
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>op de hoogte blijven?</h4>
          <p>
            Volg onze socials voor alle ins en outs en updates over de Frisse
            Pitch en de Frisse Pitch Night op 9 oktober in Lab Lou{" "}
            <a target="_blank" href="https://www.instagram.com/stadslabzeist">
              @stadslabzeist
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/samenduurzaamzeist"
            >
              @samenduurzaamzeist
            </a>
            en{" "}
            <a target="_blank" href="https://www.instagram.com/bijlablou">
              @bijlablou
            </a>
          </p>
          <InstagramIcon />
          <FacebookIcon />
          <h4>contact</h4>
          <address className="d-flex flex-column">
            <a href="mailto: idee@frissepitch.nl">idee@frissepitch.nl</a>
          </address>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>het Frisse Pitch team</h4>
          <p>
            <strong>Marloes van Haaren</strong> - Stadslab Zeist
            <br />
            <strong>Merel de Jong</strong> - Stadslab Zeist
            <br />
            <strong>Margreet van der Pijl</strong> - Samen Duurzaam Zeist
            <br />
            <strong>Saskia Littooij</strong> - Samen Duurzaam Zeist
            <br />
            <br />
            Gemeente Zeist ondersteunt de Frisse Pitch inhoudelijk en
            financieel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
