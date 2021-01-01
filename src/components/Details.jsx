import './Details.scss';

function Details(props) {
  return (
    <div className="Details">
      <h1>{props.title}</h1>
      <h3><a href={props.website}>{props.institution}</a></h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Details;