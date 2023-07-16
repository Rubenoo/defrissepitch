import "./styles.scss";

const VoorWie: React.FunctionComponent = () => {
  return (
    <section className="align-items-center">
      <h3>voor wie?</h3>
      <a>
        Iedereen uit de gemeente Zeist mag meedoen!
        <br />
        Het idee moet wel door meerdere initiatiefnemers gedragen worden.
      </a>
      <svg
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0
    58-18 88-18s
    58 18 88 18
    58-18 88-18
    58 18 88 18
    v44h-352z"
          />
        </defs>
        <g className="parallax1">
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgb(161, 233, 78)" />
        </g>
        <g className="parallax2">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="rgb(0, 70, 70)" />
        </g>
        <g className="parallax3">
          <use xlinkHref="#gentle-wave" x="50" y="9" fill="rgb(0, 143, 111)" />
        </g>
        <g className="parallax4">
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" />
        </g>
      </svg>
    </section>
  );
};

export default VoorWie;
