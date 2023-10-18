import React, { useState } from 'react';
import Slide from '../../components/Slide/Slide';
import CarouselControls from '../../components/CarouselControls/CarouselControls';
import CarouselIndicators from '../../components/CarouselIndicators/CarouselIndicators';

import Echo from '../../img/screenshots/Echo-moments.png';
import uPick from '../../img/screenshots/uPick-home.png';

export default function Portfolio() {
  const slides = [
    {
      title: 'Echo - replay your moments',
      description: 'A full-stack web app designed to allow its users to search for and save YouTube videos to their profile and save specific time snippets, which they can later play in a loop.',
      stack: 'ReactJS, Express, PostgreSQL, SASS, Bootstrap',
      image: Echo,
      liveLink: 'https://echo-replay.onrender.com/',
      repo: 'https://github.com/nataliaCodes/echo'
    },
    {
      title: 'uPick - smart ToDo list',
      description: 'a full-stack app that works with external APIs to find information about movies, restaurants, books and products. It automatically adds the item to the correct list based on keywords. The user can later mark the item as done or edit to change name and category.',
      stack: 'Express, PostgreSQL, EJS, SASS',
      image: uPick
    },
    {
      title: 'Mimisa Rocks',
      description: 'A piece of heaven',
      stack: 'JavaScript',
      image:
        'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    },
    {
      title: 'Four',
      description: 'A piece of heaven',
      stack: 'JavaScript',
      image:
        'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    },
    {
      title: 'Five',
      description: 'A piece of heaven',
      stack: 'JavaScript',
      image:
        'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
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
            <Slide slide={slide} slideIndex={i} key={i} />
          ))}
        </div>
        <CarouselIndicators slides={slides} currentIndex={current} switchIndex={switchIndex} />
        <CarouselControls prev={prev} next={next} />
      </div>
    </div>
  );
}