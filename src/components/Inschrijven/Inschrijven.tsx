import "./styles.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inschrijven: React.FunctionComponent = () => {
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //handle validation
    if (!event.currentTarget.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.currentTarget.className = "was-validated";

    if (event.currentTarget.checkValidity()) {
      setLoading(true);
      const formData = new FormData(event.currentTarget);
      // When checking the file input reference, it's good practice to check if current and files exist:
      fetch("https://usebasin.com/f/b970f7ab9356", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setSucces(true);
            setLoading(false);
            toast.success("Wij hebben jouw idee ontvangen!");
          }
          if (!response.ok)
            toast.error(
              "Oeps er is iets fout gegaan, neem contact op met idee@frissepitch.nl!",
            );
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => {
          toast.error(
            "Oeps er is iets fout gegaan, neem contact op met idee@frissepitch.nl!",
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
        id={"form"}
      >
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
            <label htmlFor="name" className="col-sm-3 col-form-label">
              Contactpersoon
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="name"
                required
                name="name"
                className="form-control"
                placeholder="Naam"
                aria-describedby="contactpersoonHelp"
              />
              <div className="invalid-feedback">
                Geef een contactpersoon op.
              </div>
            </div>
          </div>

          <div className="mb-lg-3 mb-1 row">
            <label htmlFor="inputPlaats" className="col-sm-3 col-form-label">
              Adres
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="inputPlaats"
                required
                name="Woonplaats"
                className="form-control"
                placeholder="Woonplaats"
                aria-describedby="woonplaatsHelp"
              />
              <div className="invalid-feedback">Geef een plaats op.</div>
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
            <label htmlFor="email_address" className="col-sm-3 col-form-label">
              Emailadres
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email_address"
                name="email_address"
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
              maxLength={1500}
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
              maxLength={1500}
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
              maxLength={1500}
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
              maxLength={1500}
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
              maxLength={1500}
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
              maxLength={1500}
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
              maxLength={1500}
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
              maxLength={1500}
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
              accept="image/*, .pdf, .doc"
              aria-label="Bijlagen toevoegen"
              aria-describedby="formFileInstruction"
              multiple
            />
            <small id="formFileInstruction">
              Ondersteunde bestandsformaten zijn afbeeldingen en video's.
            </small>
          </div>
        </fieldset>
        <button
          type="submit"
          className="btn btn-primary d-flex align-content-center"
          disabled={succes}
        >
          Inschrijven!
          {loading && (
            <div
              className="spinner-border text-success fs-4 ms-2"
              role="status"
            >
              <span className="visually-hidden">Laden...</span>
            </div>
          )}
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
