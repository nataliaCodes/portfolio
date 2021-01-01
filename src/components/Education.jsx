import './Education.scss';

import Timeline from './Timeline';
import Details from './Details';

function Education() {
  return (
    <div className="Education">
      <h1>Education</h1>
      <div className="invisible-top"></div>
      <div className="education-content">
        <Timeline
          year="2020"
        />
        <Details
          title="Web Development Bootcamp"
          institution="Lighthouse Labs (Montreal, Canada)"
          website="https://www.lighthouselabs.ca/"
          description="A 12-weeks full-time program aiming to prepare students for future Junior Web Dev roles by teaching coding logic using popular languages and frameworks like JavaScript & Ruby on Rails, and offering hands-on experience by building software from the ground up."
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2020"
        />
        <Details
          title="Certified Tester Foundation Level"
          institution="ISTQB (Montreal, Canada)"
          website="https://www.istqb.org/"
          description="Testing fundamentals certification from the International Software Testing Qualifications Board (ISTQB®)."
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2020"
        />
        <Details
          title="SQL Basics for Data Science"
          institution="Coursera (Montreal, Canada)"
          website="https://coursera.org/share/0f6b678517e7eaf47fde103a0c047460"
          description="Testing fundamentals certification from the International Software Testing Qualifications Board (ISTQB®)."
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2020"
        />
        <Details
          title="Learn JavaScript"
          institution="Codecademy (Montreal, Canada)"
          website="https://www.codecademy.com/learn/introduction-to-javascript"
          description="Programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax, laying the foundation for using JavaScript in any environment."
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2019"
        />
        <Details
          title="Front End Fundamentals with JavaScript"
          institution="Lighthouse Labs (Montreal, Canada)"
          website="https://www.lighthouselabs.ca/"
          description="A 6 week program teaching coding newbies about structuring web pages with HTML, styling them with CSS, and adding dynamic functionality using JavaScript. Includes a look at at AJAX and API requests."
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2013"
        />
        <Details
          title="Masters Degree, Audio-visual communications"
          institution="SNSPA (Bucharest, Romania)"
          website="http://snspa.ro/en/"
          description="National University of Political Studies and Public Administration"
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2009"
        />
        <Details
          title="Certified trainer"
          institution="Humans Academy (Bucharest, Romania)"
          website="http://humans-coaching.com/"
          description="Trainer course with a 6 day duration covering the fundamentals of structuring, building and delivering a training. Certificate recognized by the Romanian National Council of Adult Professional
          Development."
        />
      </div>
      <div className="education-content">
        <Timeline
          year="2008"
        />
        <Details
          title="Bachelor of Journalism"
          institution="FJSC (Bucharest, Romania)"
          website="http://www.en.fjsc.unibuc.ro/"
          description="Faculty of Journalism and Communication Studies"
        />
      </div>
      <div className="invisible-bottom"></div>
    </div>
  );
}

export default Education;