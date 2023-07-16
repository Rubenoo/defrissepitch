import "./styles.scss";

const Inschrijven: React.FunctionComponent = () => {
  return (
    <section className="text-start">
      <h1 className="inschrijven-titel">inschrijven</h1>
      <form>
        <img
          className="svg-oog"
          src="/assets/svg/FP_sticker_RGB_oog.svg"
          alt="Sticker oog"
        />
        <img
          className="svg-stekker"
          src="/assets/svg/FP_sticker_RGB_stekker.svg"
          alt="Sticker stekker"
        />
        <img
          className="svg-recycle"
          src="/assets/svg/FP_sticker_RGB_recycle.svg"
          alt="Sticker recycle"
        />
        <fieldset>
          <legend>Contactgegevens</legend>
          <div className="mb-lg-3 mb-1 row">
            <label htmlFor="inputIdee" className="col-sm-3 col-form-label">
              Naam idee
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="inputIdee"
                required
                className="form-control"
                placeholder="Mijn goede idee!"
                aria-describedby="ideeHelp"
              />
            </div>
          </div>

          <div className="mb-lg-3 mb-1 row">
            <label
              htmlFor="inputContactpersoon"
              className="col-sm-3 col-form-label"
            >
              Contactpersoon
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="inputContactpersoon"
                required
                className="form-control"
                placeholder="Voornaam Achternaam"
                aria-describedby="contactpersoonHelp"
              />
            </div>
          </div>

          <div className="mb-lg-3 mb-1 row">
            <label className="col-sm-3 col-form-label">Adres</label>
            <div className="col-sm-9 d-flex flex-column">
              <div className="row">
                <div className="col-6 col-sm-6">
                  <input
                    type="text"
                    id="inputPostcode"
                    required
                    className="form-control mb-2"
                    placeholder="Postcode"
                    aria-describedby="postcodeHelp"
                  />
                </div>
                <div className="col-6 col-sm-3">
                  <input
                    type="text"
                    id="inputHuisNummer"
                    required
                    className="form-control mb-2"
                    placeholder="Huisnr en toevoeging"
                    aria-describedby="huisNummerHelp"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    id="inputPlaats"
                    required
                    className="form-control mb-2"
                    placeholder="Plaats"
                    aria-describedby="plaatsHelp"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    id="inputStraatnaam"
                    required
                    className="form-control mb-2"
                    placeholder="Straatnaam"
                    aria-describedby="straatnaamHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-lg-3 mb-1 row">
            <label
              htmlFor="inputTelefoonnummer"
              className="col-sm-3 col-form-label"
            >
              Telefoonnummer
            </label>
            <div className="col-sm-9">
              <input
                type="tel"
                id="inputTelefoonnummer"
                required
                className="form-control"
                placeholder="06 - 1245678"
                aria-describedby="telefoonnummerHelp"
              />
            </div>
          </div>

          <div className="mb-lg-3 mb-1 row">
            <label
              htmlFor="inputEmailadres"
              className="col-sm-3 col-form-label"
            >
              Emailadres
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="inputEmailadres"
                required
                className="form-control"
                placeholder="email@adres.nl"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="mb-lg-5 mb-3 row">
            <label htmlFor="inputWebsite" className="col-sm-3 col-form-label">
              Website
            </label>
            <div className="col-sm-9">
              <input
                type="url"
                id="inputWebsite"
                className="form-control"
                placeholder="www.website.nl"
                aria-describedby="websiteHelp"
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Jouw frisse idee</legend>
          <div className="mb-lg-4 mb-2">
            <label htmlFor="input1" className="form-label">
              1. Vertel ons over je idee
            </label>
            <small id="input1Help">
              <br />
              NB: Als we je idee nomineren komt deze tekst op de website
            </small>
            <textarea
              className="form-control mt-2 mt-lg-3"
              id="input1"
              rows={3}
              placeholder="Mijn idee..."
              aria-describedby="input1Help"
              aria-label="Vraag 1"
              maxLength={300}
            ></textarea>
            <small id="input1LengthHelp" className="form-text">
              (max 300 woorden)
            </small>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input2" className="form-label">
              2. Wat hoop je te bereiken?
            </label>
            <textarea
              className="form-control"
              id="input2"
              rows={3}
              aria-describedby="input2Help"
              aria-label="Vraag 2"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input3" className="form-label">
              3. Vertel iets over jezelf en je mede-initiatiefnemers
            </label>
            <textarea
              className="form-control"
              id="input3"
              rows={3}
              aria-describedby="input3Help"
              aria-label="Vraag 3"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input4" className="form-label">
              4. Wie zijn je eventuele samenwerkings-partners en de
              taakverdeling
            </label>
            <textarea
              className="form-control"
              id="input4"
              rows={3}
              aria-describedby="input4Help"
              aria-label="Vraag 4"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input5" className="form-label">
              5. Geef een globaal overzicht van de planning voor de realisatie
              van je idee
            </label>
            <small id="input5Help">
              <br />
              (Startdatum, einddatum)
            </small>
            <textarea
              className="form-control mt-2 mt-lg-3"
              id="input5"
              rows={3}
              aria-describedby="input5Help"
              aria-label="Vraag 5"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input6" className="form-label">
              6. Hoe match jouw idee met onze vijf criteria?
            </label>
            <textarea
              className="form-control"
              id="input6"
              rows={3}
              aria-describedby="input6Help"
              aria-label="Vraag 6"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input7" className="form-label">
              7. Geef kort aan wat de verwachte uitgaven zijn voor de
              belangrijkste kostenposten
            </label>
            <small id="input7Help">
              <br />
              Bijv. materiaalkosten, publiciteit, vergoedingen, organisatie,
              transport, onvoorzien
            </small>
            <textarea
              className="form-control mt-2 mt-lg-3"
              id="input7"
              rows={3}
              aria-describedby="input7Help"
              aria-label="Vraag 7"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input8" className="form-label">
              8. Hoe ga je de 1000 Euro gebruiken?
            </label>
            <small id="input8Help">
              <br />
              (kan hetzelfde zijn als punt 9) Let op: te besteden binnen een
              jaar.
            </small>
            <textarea
              className="form-control mt-2 mt-lg-3"
              id="input8"
              rows={3}
              aria-describedby="input8Help"
              aria-label="Vraag 8"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-3">
            <label htmlFor="formFile" className="form-label">
              9. Voeg beeldmateriaal toe ter ondersteuning van je plan, dit
              mogen voorbeelden en/of schetsen zijn
            </label>
            <input
              className="form-control mb-2"
              type="file"
              id="formFile"
              accept="image/*,video/*"
              aria-label="Bijlagen toevoegen"
              aria-describedby="formFileInstruction"
              multiple
            />
            <small id="formFileInstruction">
              Ondersteunde bestandsformaten zijn afbeeldingen en video's.
            </small>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Inschrijven!
        </button>
      </form>
      <div className="svg-container">
        <img
          className="partial-svg"
          src="/assets/svg/FP_beeldmerk_RGB_vorm.svg"
          alt="SVG"
        />
      </div>
    </section>
  );
};

export default Inschrijven;
