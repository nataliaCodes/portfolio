export default function CarouselIndicators({ slides, currentIndex, switchIndex }) {

  return (
    <div className="carousel-indicators">
      {slides.map((_, i) => (
        <button 
          className={`carousel-indicator${currentIndex === i ? ' active' : ''}`}
          onClick={() => switchIndex(i)}
          key={i}
        ></button>
      ))}
    </div>
  )
}