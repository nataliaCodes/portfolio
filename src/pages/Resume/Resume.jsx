import js from '../../img/javascript.svg';
import ts from '../../img/typescript.svg';
import sql from '../../img/sql.png';
import html from '../../img/html5.svg';
import css from '../../img/css3.svg';
import angular from '../../img/angular.svg';
import react from '../../img/react.svg';
import node from '../../img/nodedotjs.svg';
import express from '../../img/express.svg';
import ejs from '../../img/ejs.png';
import primeng from '../../img/primeng.png';
import mui from '../../img/mui.svg';
import bootstrap from '../../img/bootstrap.svg';
import sass from '../../img/sass.svg';
import psql from '../../img/postgresql.svg';
import mocha from '../../img/mocha.svg';
import storybook from '../../img/storybook.svg';
import jest from '../../img/jest.svg';
import cypress from '../../img/cypress.svg';
import jasmine from '../../img/jasmine.svg';
import eslint from '../../img/eslint.svg';

export default function Resume() {
  const langLogos = [js, ts, sql, html, css];
  const languages = ['JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'];
  const langContent = langLogos.map(((logo, i) => {
    return (
      <span key={i} className='flex-column align-center logos'>
        <img src={logo} alt={languages[i] + ' logo'} className={languages[i]}></img>
        <p>{languages[i]}</p>
      </span>
    )
  }));

  const libLogos = [angular, react, node, express, ejs, primeng, mui, bootstrap, sass, psql];
  const libraries = ['Angular', 'React', 'NodeJS', 'Express', 'EJS', 'PrimeNG', 'Material-UI', 'Bootstrap', 'SASS', 'PostgreSQL'];
  const libContent = libLogos.map((logo, i) => {
    return (
      <span key={i} className='flex-column align-center logos'>
        <img src={logo} alt={libraries[i] + ' logo'} className={libraries[i]}></img>
        <p>{libraries[i]}</p>
      </span>
    )
  });

  const testLogos = [mocha, storybook, jest, cypress, jasmine, eslint];
  const testLibs = ['Mocha&Chai', 'Storybook', 'Jest', 'Cypress', 'Jasmine', 'ESlint'];
  const testContent = testLogos.map((logo, i) => {
    return (
      <span key={i} className='flex-column align-center logos'>
        <img src={logo} alt={testLibs[i] + ' logo'} className={testLibs[i]}></img>
        <p>{testLibs[i]}</p>
      </span>
    )
  });

  return (
    <div className="page-content flex-column">
      <p className='x-large profile'>Though my main experience is on the front-end, I can build full-stack PERN / PEAN single-page apps.</p>
      <p className='x-large profile'>Building, styling, animating, whatever the need I have the solution for it. Some of the tools I use:</p>
      <div className='flex-row wrap full-width'>
        {/* <h2 className='full-width'>Programming languages:</h2> */}
        <div className='flex-row justify-center full-width languages'>{langContent}</div>
      </div>
      <div className='flex-row wrap full-width'>
        {/* <h2 className='full-width'>Frameworks/libraries:</h2> */}
        <div className='flex-row justify-center full-width libraries'>{libContent}</div>
      </div>
      <div className='flex-row wrap full-width'>
        {/* <h2 className='full-width'>Testing:</h2> */}
        <div className='flex-row justify-center full-width test'>{testContent}</div>
      </div>
      <p className='large profile'>I am always up for a challenge and curious to discover new technologies, so the list above will keep growing.</p>
      <p className='large profile'>Head over to my <a href='https://www.linkedin.com/in/nmartian/' target='_blank' rel='noreferrer' className='underline'>LinkedIn profile</a> to get a history of my professional experience.</p>
    </div>
  );
}