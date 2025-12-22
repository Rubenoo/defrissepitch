import "./styles.scss";
export type PitcherCardType = {
  titel: string;
  subtitel?: string;
  beschrijving: string;
  afbeelding?: string;
  link?: string;
};

const PitcherCard: React.FunctionComponent<PitcherCardType> = ({
  afbeelding,
  titel,
  subtitel,
  beschrijving,
  link,
}) => {
  const jaar = afbeelding?.split("/")[0];
  const subtitelFormated = subtitel && `${subtitel}, winnaar ${jaar}`;
  return (
    <article className={"pitcher-card"}>
      {afbeelding ? (
        <img className="card-image" src={`/assets/images/${afbeelding}`} />
      ) : (
        <div className="card-image-placeholder">
          <img
            src="/assets/svg/FP_sticker_RGB_lampje_2.svg"
            alt="lampje icoon"
          />
        </div>
      )}
      <h4>{titel}</h4>
      <h5>{subtitelFormated}</h5>
      <p>{beschrijving}</p>
      {link && (
        <a href={link} target="_blank">
          Hoe gaat het nu?
        </a>
      )}
    </article>
  );
};

export default PitcherCard;
