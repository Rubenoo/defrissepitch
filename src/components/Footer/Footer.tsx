import "./styles.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="container" id="footer">
      <img
        className="svg-lamp"
        src="/defrissepitch/assets/svg/FP_sticker_RGB_lampje_2.svg"
        alt="Sticker lampje"
      />
      <div className="row text-start">
        <div className="col-lg-4 col-sm-12 logo-container">
          <img
            src="/defrissepitch/assets/svg/FP_beeldmerk_RGB_vorm_staand.svg"
            alt="Logo frisse start"
            className="logo"
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>op de hoogte blijven?</h4>
          <p>
            Op de hoogte blijven? Meld je aan [link] voor de maandelijkse
            nieuwsbrief van Samen Duurzaam Zeist.
          </p>
          <h4>contact</h4>
          <address className="d-flex flex-column">
            <a href="mailto: willy@stadslabzeist.nl">willy@stadslabzeist.nl</a>
            <a href="mailto: wijzijn@stadslabzeist.nl">
              wijzijn@stadslabzeist.nl
            </a>
          </address>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>het frisse pitch team</h4>
          <p>
            <strong>Willy Douma</strong> - Stadslab Zeist
            <br />
            <strong>Merel de Jong</strong> - Stadslab Zeist
            <br />
            <strong>Margreet van der Pijl Douma</strong> - Samen Duurzaam Zeist
            <br />
            <strong>Fons van der Velden</strong> - Samen Duurzaam Zeist
            <br />
            <br />
            De gemeente Zeist ondersteunt het initiatief inhoudelijk en
            financieel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
