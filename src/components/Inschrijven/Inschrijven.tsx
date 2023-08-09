import "./styles.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inschrijven: React.FunctionComponent = () => {
  const [succes, setSucces] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //handle validation
    if (!event.currentTarget.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.currentTarget.className = "was-validated";

    if (event.currentTarget.checkValidity()) {
      const formData = new FormData(event.currentTarget);
      // When checking the file input reference, it's good practice to check if current and files exist:
      fetch("https://usebasin.com/f/ba72d7ff7419", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setSucces(true);
            toast.success("Je pitch is succesvol verstuurd!");
          }
          if (!response.ok)
            toast.error(
              "Oeps er is iets fout gegaan, neem contact op met wijzijn@stadslabzeist.nl!",
            );
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => {
          toast.error(
            "Oeps er is iets fout gegaan, neem contact op met wijzijn@stadslabzeist.nl!",
          );
          console.log(error);
        });
    }
  };
  return (
    <section className="text-start" id="inschrijven">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="inschrijven-titel">inschrijven</h1>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="needs-validation"
        noValidate
      >
        <img
          className="svg-oog"
          src="/defrissepitch/assets/svg/FP_sticker_RGB_oog.svg"
          alt="Sticker oog"
        />
        <img
          className="svg-stekker"
          src="/defrissepitch/assets/svg/FP_sticker_RGB_stekker.svg"
          alt="Sticker stekker"
        />
        <img
          className="svg-recycle"
          src="/defrissepitch/assets/svg/FP_sticker_RGB_recycle.svg"
          alt="Sticker recycle"
        />
        <fieldset disabled={succes}>
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
                name="Naam idee"
                className="form-control"
                placeholder="Mijn goede idee!"
                aria-describedby="ideeHelp"
              />
              <div className="invalid-feedback">
                Geef een naam voor het idee op.
              </div>
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
                name="Contactpersoon"
                className="form-control"
                placeholder="Voornaam Achternaam"
                aria-describedby="contactpersoonHelp"
              />
              <div className="invalid-feedback">
                Geef een contactpersoon op.
              </div>
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
                    name="Postcode"
                    className="form-control mb-2"
                    placeholder="Postcode"
                    aria-describedby="postcodeHelp"
                  />
                  <div className="invalid-feedback">Geef een postcode op.</div>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    id="inputHuisNummer"
                    required
                    name="HuisNummer"
                    className="form-control mb-2"
                    placeholder="Huisnr en toevoeging"
                    aria-describedby="huisNummerHelp"
                  />
                  <div className="invalid-feedback">
                    Geef een huisnummer op.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    id="inputPlaats"
                    required
                    name="Plaats"
                    className="form-control mb-2"
                    placeholder="Plaats"
                    aria-describedby="plaatsHelp"
                  />
                  <div className="invalid-feedback">Geef een plaats op.</div>
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    id="inputStraatnaam"
                    name="Straatnaam"
                    required
                    className="form-control mb-2"
                    placeholder="Straatnaam"
                    aria-describedby="straatnaamHelp"
                  />
                  <div className="invalid-feedback">
                    Geef een straatnaam op.
                  </div>
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
                name="Telefoonnummer"
                className="form-control"
                placeholder="06 - 1245678"
                pattern="^\(?([+]31|0031|0)-?6(\s?|-)([0-9]\s{0,3}){8}$"
                aria-describedby="telefoonnummerHelp"
              />
              <div className="invalid-feedback">
                Geef een valide telefoonnummer op.
              </div>
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
                name="Emailadres"
                required
                className="form-control"
                placeholder="email@adres.nl"
                aria-describedby="emailHelp"
              />{" "}
              <div className="invalid-feedback">
                Geef een valide emailadres op.
              </div>
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
                name="Website"
                className="form-control"
                placeholder="https://www.website.nl"
                aria-describedby="websiteHelp"
              />
              <div className="invalid-feedback">
                Geef een valide website op.
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset disabled={succes}>
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
              name="1. Vertel ons over je idee"
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
              name="2. Wat hoop je te bereiken?"
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
              name="3. Vertel iets over jezelf en je mede-initiatiefnemers"
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
              name="4. Wie zijn je eventuele samenwerkings-partners en de taakverdeling"
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
              name="5. Geef een globaal overzicht van de planning voor de realisatie van je idee"
              aria-describedby="input5Help"
              aria-label="Vraag 5"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input6" className="form-label">
              6. Waarom is jouw idee een Frisse Pitch idee (zie criteria)?
            </label>
            <textarea
              className="form-control"
              id="input6"
              rows={3}
              name="6. Waarom is jouw idee een Frisse Pitch idee (zie criteria)?"
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
              name="7. Geef kort aan wat de verwachte uitgaven zijn voor de belangrijkste kostenposten"
              aria-describedby="input7Help"
              aria-label="Vraag 7"
              maxLength={300}
            ></textarea>
          </div>

          <div className="mb-lg-4 mb-2">
            <label htmlFor="input8" className="form-label">
              8. Hoe ga je de €1.000 gebruiken?
            </label>
            <small id="input8Help">
              <br />
              Let op: te besteden binnen een jaar.
            </small>
            <textarea
              className="form-control mt-2 mt-lg-3"
              id="input8"
              rows={3}
              name="8. Hoe ga je de €1.000 gebruiken?"
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
              name="fotos[]"
              accept="image/*"
              aria-label="Bijlagen toevoegen"
              aria-describedby="formFileInstruction"
              multiple
            />
            <small id="formFileInstruction">
              Ondersteunde bestandsformaten zijn afbeeldingen en video's.
            </small>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary" disabled={succes}>
          Inschrijven!
        </button>
      </form>
      <div className="svg-container">
        <img
          className="partial-svg"
          src="/defrissepitch/assets/svg/FP_beeldmerk_RGB_vorm.svg"
          alt="SVG"
        />
      </div>
    </section>
  );
};

export default Inschrijven;
