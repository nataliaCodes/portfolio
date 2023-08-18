import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className="page-content xx-large about">
          <p className="full-width"> When I'm not crafting elegant solutions to complex problems, you might find me giving a friendly hug to a tree or lost in the pages of a captivating book.</p>
          <p className="full-width">I'm on a perpetual journey of learning and growth, always seeking the next coding challenge to conquer. With a curious mind and an eye for detail, I thrive on turning ideas into reality through the power of technology. Whether I'm crafting intuitive user experiences or diving into the intricacies of algorithms, my goal is to make a meaningful impact in the digital world.</p>
          <p className="full-width">
            Feel free to explore <NavLink exact="true" to="/portfolio" className='underline'>my coding projects</NavLink> and <NavLink exact="true" to="/contact" className='underline'>connect with me</NavLink> on this exciting journey!
          </p>
        </div>
    );
}