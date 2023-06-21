import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='navigation'>
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/resume"><li>Resume</li></Link>
            <Link to="/portfolio"><li>Portfolio</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    );
}