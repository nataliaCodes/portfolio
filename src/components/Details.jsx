import './Details.scss';

function Details(props) {
  return (
    <div className="Details">
      <header>
        {props.img && <img src={props.img} alt="logo"/>}
        <div className="job-info">
          <h1>{props.title}</h1>
          <h3><a href={props.website}>{props.institution}</a></h3>
        </div>
      </header>
      <p>{props.description}</p>
      {props.achievement && <p><span>Proud of:</span>{props.achievement}</p>}
    </div>
  );
}

export default Details;