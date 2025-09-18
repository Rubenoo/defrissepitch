import "./styles.scss";
type PitcherCard = {
  titel: string;
  subtitel?: string;
  beschrijving: string;
  afbeelding?: string;
  link?: string;
};

const PitcherCard: React.FunctionComponent<PitcherCard> = ({
  afbeelding,
  titel,
  subtitel,
  beschrijving,
  link,
}) => {
  return (
    <article className={"pitcher-card"}>
      {afbeelding && (
        <img className="card-image" src={`/assets/images/${afbeelding}`} />
      )}
      <h4>{titel}</h4>
      <h5>{subtitel}</h5>
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
