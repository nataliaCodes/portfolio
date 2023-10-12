import React, { useState } from 'react';
import Slide from '../../components/Slide/Slide';
import CarouselControls from '../../components/CarouselControls/CarouselControls';
import CarouselIndicators from '../../components/CarouselIndicators/CarouselIndicators';

export default function Portfolio() {
  const slides = [
    {
      title: "Machu Picchu",
      description: "Adventure is never far away",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Chamonix",
      description: "Let your dreams come true",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Mimisa Rocks",
      description: "A piece of heaven",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Four",
      description: "A piece of heaven",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Five",
      description: "A piece of heaven",
      stack: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    const index = current > 0 ? current - 1 : slides.length - 1;
    setCurrent(index);
  }

  const next = () => {
    const index = current < slides.length - 1 ? current + 1 : 0;
    setCurrent(index);
  }

  const switchIndex = (index) => {
    setCurrent(index);
  }

  return (
    <div className="container">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${-current * 100}%)` }}
        >
          {[...slides].map((slide, i) => (
            <Slide slide={slide} key={i} />
          ))}
        </div>
        <CarouselIndicators slides={slides} currentIndex={current} switchIndex={switchIndex} />
        <CarouselControls prev={prev} next={next} />
      </div>
    </div>
  );
}