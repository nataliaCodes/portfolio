export default function Slide({ slide, slideIndex }) {

  return (
    <div className={`carousel-item ${slideIndex % 2 !== 0 ? 'reverse' : ''}`}>
      <img src={slide.image} alt={slide.title} />
      <div className="slide-text">
        <h2>{slide.title}</h2>
        <p className="x-large-text">{slide.description}</p>
        <p className="x-large-text"><span className="bold">Stack: </span>{slide.stack}</p>
        {slide.liveLink && <p className="large-text">
          <span className="bold">Website: </span>
          <a href={slide.liveLink} target="_blank" rel="noreferrer">{slide.liveLink}</a>
        </p>}
        {slide.repo && <p className="large-text">
          <span className="bold">Code: </span>
          <a href={slide.repo} target="_blank" rel="noreferrer">{slide.repo}</a>
        </p>}
      </div>
    </div>
  )
}