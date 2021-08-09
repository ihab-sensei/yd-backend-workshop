import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import {Container} from "react-bootstrap"

const Nav = () => {
    return (
        <>
    
        <header>
            <nav>
                <ul>
                    <li><Link className="navLink" to="/">Home</Link></li>
                    <li><Link className="navLink" to="sign-up">Sign Up</Link></li>
                    <li><Link className="navLink" to="sign-in">Sign In</Link></li>
                    <li><Link className="navLink" to="reports">Reports</Link></li>
                    <li><Link className="navLink" to="news">News</Link></li>
                    <li><Link className="navLink" to="Awareness">Awareness</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Nav;