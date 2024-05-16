import "./styles.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Aanmelden: React.FunctionComponent = () => {
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
      fetch("https://usebasin.com/f/ebad48967ee2", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setSucces(true);
            setLoading(false);
            toast.success("Wij hebben je aangemeld!");
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
      <h1 className="inschrijven-titel">Aanmelden</h1>
      <form
        onSubmit={handleSubmit}
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
            <label htmlFor="name" className="col-sm-3 col-form-label">
              Naam
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="name"
                required
                name="name"
                className="form-control"
                placeholder="Naam"
                aria-describedby="naamHelp"
              />
              <div className="invalid-feedback">Geef een naam op.</div>
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

          <div className="mb-lg-5 mb-3 row">
            <label
              htmlFor="inputAantalKaarten"
              className="col-sm-3 col-form-label"
            >
              Aantal kaarten
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                id="inputAantalKaarten"
                name="AantalKaarten"
                max={4}
                min={1}
                className="form-control"
                placeholder="0"
                aria-describedby="aantalkaartenHelp"
              />
              <div className="invalid-feedback">
                Geef een valide aantal kaarten op, je kan maximaal 4 kaarten
                kiezen per aanvraag.
              </div>
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary d-flex align-content-center"
          disabled={succes}
        >
          Aanmelden!
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

export default Aanmelden;
