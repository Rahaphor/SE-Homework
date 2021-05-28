import './App.css'
import {Link} from 'react-router-dom'

function Nav () {
    return (
        <nav>
            <h3>Logo</h3>
        <ul className='links'>
            <Link to = './About'>
                <li>
                    About us
                </li>
            </Link>

            <Link to = './Contact'>
                <li>
                    Contact us
                </li>
            </Link>

            <Link to = './Home'>
                <li>
                    Home
                </li>
            </Link>

            <Link to = './NbaPlayer'>
                <li>
                    Nba
                </li>
            </Link>

        </ul>
        </nav>
    )
}
export default Nav;