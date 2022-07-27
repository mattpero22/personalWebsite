import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
            <ul className="Header">
                <HashLink smooth to={'/#about'}>About</HashLink>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
    );
}

export default Header;