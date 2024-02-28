//logos
import js from '../../img/logos/javascript.svg';
import ts from '../../img/logos/typescript.svg';
import sql from '../../img/logos/sql.png';
import html from '../../img/logos/html5.svg';
import css from '../../img/logos/css3.svg';
import angular from '../../img/logos/angular.svg';
import react from '../../img/logos/react.svg';
import node from '../../img/logos/nodedotjs.svg';
import express from '../../img/logos/express.svg';
import ejs from '../../img/logos/ejs.png';
import primeng from '../../img/logos/primeng.png';
import mui from '../../img/logos/mui.svg';
import bootstrap from '../../img/logos/bootstrap.svg';
import sass from '../../img/logos/sass.svg';
import psql from '../../img/logos/postgresql.svg';
import mocha from '../../img/logos/mocha.svg';
import storybook from '../../img/logos/storybook.svg';
import jest from '../../img/logos/jest.svg';
import cypress from '../../img/logos/cypress.svg';
import jasmine from '../../img/logos/jasmine.svg';
import eslint from '../../img/logos/eslint.svg';

export default function Skills() {
  const langLogos = [js, ts, sql, html, css];
  const languages = ['JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'];
  //generate languages row
  const langContent = langLogos.map(((logo, i) => {
    return (
      <span key={i} className='flex-column align-center logos'>
        <img src={logo} alt={languages[i] + ' logo'} className='logo'></img>
        <p>{languages[i]}</p>
      </span>
    )
  }));

  const libLogos = [angular, react, node, express, ejs, primeng, mui, bootstrap, sass, psql];
  const libraries = ['Angular', 'React', 'NodeJS', 'Express', 'EJS', 'PrimeNG', 'Material-UI', 'Bootstrap', 'SASS', 'PostgreSQL'];
  //generate libraries row
  const libContent = libLogos.map((logo, i) => {
    return (
      <span key={i} className='flex-column align-center logos'>
        <img src={logo} alt={libraries[i] + ' logo'} className='logo'></img>
        <p>{libraries[i]}</p>
      </span>
    )
  });

  const testLogos = [mocha, storybook, jest, cypress, jasmine, eslint];
  const testLibs = ['Mocha&Chai', 'Storybook', 'Jest', 'Cypress', 'Jasmine', 'ESlint'];
  //generate testing libraries row
  const testContent = testLogos.map((logo, i) => {
    return (
      <span key={i} className='flex-column align-center logos'>
        <img src={logo} alt={testLibs[i] + ' logo'} className='logo'></img>
        <p>{testLibs[i]}</p>
      </span>
    )
  });

  return (
    <div className="page-content flex-column skills">
      <p className='profile'>Though my main experience is on the front-end, I can build full-stack PERN / PEAN single-page apps.</p>
      <p className='profile'>Building, styling, animating, whatever the need I have the solution for it. Some of the tools I use:</p>
      <div className='flex-row wrap full-width'>
        <div className='flex-row justify-center full-width languages'>{langContent}</div>
      </div>
      <div className='flex-row wrap full-width'>
        <div className='flex-row justify-center full-width libraries'>{libContent}</div>
      </div>
      <div className='flex-row wrap full-width'>
        <div className='flex-row justify-center full-width test'>{testContent}</div>
      </div>
      <p className='profile-small'>I am always up for a challenge and curious to discover new technologies, so the list above will keep growing.</p>
      <p className='profile-small'>Head over to my <a href='https://www.linkedin.com/in/nmartian/' target='_blank' rel='noreferrer' className='underline'>LinkedIn profile</a> to get a history of my professional experience.</p>
    </div>
  );
}