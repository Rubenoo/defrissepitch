import "./styles.scss";
type PitcherCard = {
  titel: string;
  beschrijving: string;
  afbeelding?: string;
  link?: string;
};

const PitcherCard: React.FunctionComponent<PitcherCard> = ({
  afbeelding,
  titel,
  beschrijving,
  link,
}) => {
  return (
    <article className={"pitcher-card"}>
      {afbeelding && (
        <img className="card-image" src={`/assets/images/${afbeelding}`} />
      )}
      <h4>{titel}</h4>
      <p>{beschrijving}</p>
      {link && (
        <a href={link} target="_blank">
          Lees meer
        </a>
      )}
    </article>
  );
};

export default PitcherCard;
