import './Experience.scss';

import Timeline from './Timeline';
import Details from './Details';

import Swiq from '../images/sweet-iq.png';
import Lulu from '../images/lulu.png';
import BR from '../images/BR.png';
import telus from '../images/telus.jpg';
import biblionet from '../images/biblionet.jpg';

function Experience() {
  return (
    <div className="Experience">
      <h1>Experience</h1>
      <div className="invisible-top"></div>
      <div className="experience-content">
        <Timeline
          year="Apr 2017 ➼ Jan 2020"
        />
        <Details
          img={Swiq}
          title="Audit Sales Coordinator"
          institution="SweetIQ Analytics (Montreal, Canada)"
          website="https://sweetiq.com/"
          description="While managing the audit process for thousands of prospect clients, I learned how to work with the Dev team to prioritize and keep bugs in check (Jira) and developed my ability to work with data with the support of platforms such as Excel sheets, Microsoft PowerApps, PowerBI, HubSpot. This is also the place I started to fall in love with the rich world of coding."
          achievement="&nbsp;Training two new colleagues and writing a 40-page manual for the audit process."
        />
      </div>
      <div className="experience-content">
        <Timeline
          year="Aug 2016 ➼ Mar 2017"
        />
        <Details
          img={Lulu}
          title="Online Sales Coordinator"
          institution="LULU Software (Montreal, Canada)"
          website="https://www.lulusoftware.com/"
          description="Unoficially named 'mini-PM', this job taught me to think fast and prioritize while juggling the many online projects of the sales team. Involved heavy planning (including, but not restricted to sprint planning in Jira), cooperating with multiple departments and sanity testing daily."
          achievement="&nbsp;Successfully launching over 40 website flows of 3 to 5 pages each (used for PPC
          campaigns)."
        />
      </div>
      <div className="experience-content">
        <Timeline
          year="Jun 2015 ➼ Jun 2016"
        />
        <Details
          img={BR}
          title="Website Editor"
          institution="Business Review Magazine (Bucharest, Romania)"
          website="https://business-review.eu/"
          description="My daily tasks involved publishing content on the website (Wordpress based) and delivering the newsletter to thousands of subscribers. However, I had the chance to flex my video editing skills (Adobe After Effects and Illustrator) in producing short clips for an advertising campaign."
          achievement="&nbsp;Automating the heavy copy-paste process of the newsletter, reducing its creation time by 60%."
        />
      </div>
      <div className="experience-content">
        <Timeline
          year="Oct 2014 ➼ Jul 2015"
        />
        <Details
          img={telus}
          title="Website Moderator & Support"
          institution="Telus International Europe (Bucharest, Romania)"
          website="https://www.telusinternational.com/locations/romania"
          description="Main daily tasks included moderation of reported content on an international video hosting
          website and back-office and technical support activities in French and English."
          achievement="&nbsp;Reaching Subject Expert level within 6 months and advocating for better KPIs for the project team."
        />
      </div>
      <div className="experience-content">
        <Timeline
          year="Mar 2009 ➼ Feb 2014"
        />
        <Details
          img={biblionet}
          title="Media Coordinator / Office Assistant"
          institution="Bill&Melinda Gates Foundation - IREX (Bucharest, Romania)"
          website="https://www.gatesfoundation.org/what-we-do/global-development/global-libraries"
          description="IREX implemented Biblionet, a national digital literacy program for public libraries in Romania and I had a front row seat to it for five years. After working as an Office Assistant for a year, I decided (and my lively, soon-to-be boss agreed) that my skills would be better used within the Advocacy department. There I learned to leverage the power of online (website, blog, Facebook, Ushahidi crowdsourcing map) and direct communication: coordinated with regional staff in collecting and editing relevant success stories for the program’s website. It was during this time that I discovered my love for graphic design and video editing and dabbled in small projects for the website (editing interviews, summaries of trainings and producing various graphic materials)."
          achievement="&nbsp;Forging lasting connections and contributing to an obvious step forward for our isolated rural communities, for which the Internet opened multiple possibilities."
        />
      </div>
      <div className="invisible-bottom"></div>
    </div>
  );
}

export default Experience;