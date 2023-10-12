export default function Slide({ slide, active }) {

  return (
    <div className="carousel-item">
      <img src={slide.image} alt={slide.title} />
    </div>
    // <div
    //   className="slide"
    //   data-active={active}
    // >
    //   <div
    //     className="slide-content flex-row align-center"

    //   >
    //     <div className="slide-text">
    //       <h2 className="slide-title">{slide.title}</h2>
    //       <p className="slide-description">{slide.description}</p>
    //       <p className="slide-stack">
    //         <span>Built with: </span>
    //         {slide.stack}
    //       </p>
    //     </div>
    //     <div
    //       className="slide-image"
    //       style={{ backgroundImage: `url('${slide.image}')` }}
    //     ></div>
    //   </div>
    // </div>

  )
}