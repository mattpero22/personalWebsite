import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
            <ul className="Header">
                <HashLink className='header_link hover_animate' smooth to={'/#'}><img src="https://i.imgur.com/jYrWq1Z.png" alt="home"></img></HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#about'}><img src="https://i.imgur.com/mPcpvxE.png" alt="me"></img></HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#about'}><img src="https://i.imgur.com/glFzRCv.png" alt="skills"></img></HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#about'}><img src="https://i.imgur.com/aHKbJtv.png" alt="projects"></img></HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#about'}><img src="https://i.imgur.com/RFHj9bL.png" alt="contact"></img></HashLink>
            </ul>
    );
}

export default Header;