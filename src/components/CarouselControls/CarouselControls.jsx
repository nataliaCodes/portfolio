import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function CarouselControls({ prev, next }) {
  return (
    <div>
      <button className="carousel-control left" onClick={prev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="carousel-control right" onClick={next}>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}