import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
            <ul className="Header">
                <HashLink className='header_link hover_animate' smooth to={'/#'}>Home</HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#about'}>About</HashLink>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
    );
}

export default Header;