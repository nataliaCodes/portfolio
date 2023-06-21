import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <Link to="/">
          {'>'}<span className='blinking'>_</span> nataliaCodes
        </Link>
        </header>
    );
}