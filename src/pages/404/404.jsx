import Tree from '../../img/Tree.png';
import { NavLink } from "react-router-dom";

export default function FourOhFour() {
  return (
    <div className="page-content">
      <div className="flex-row not-found-container xx-large-text">
        <img src={Tree} alt="tree with open arms" />
        <div className="not-found-text">
          <h3>The page you were looking for does not exist</h3>
          <p>You can hug this friendly tree or navigate to the&nbsp;
            <NavLink exact="true" to="/portfolio" className='underline'>home page</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}