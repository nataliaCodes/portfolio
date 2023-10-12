export default function Slide({ slide }) {

  return (
    <div className="carousel-item">
      <img src={slide.image} alt={slide.title} />
    </div>
  )
}