import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
            <ul className="Header">
                <HashLink className='header_link hover_animate' smooth to={'/#'}>
                    <img src="https://i.imgur.com/jYrWq1Z.png" alt="home"></img>
                    <p className='hover_reveal'>Home</p>
                </HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#about'}><img src="https://i.imgur.com/mPcpvxE.png" alt="me"></img><p>About</p></HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#skills'}><img src="https://i.imgur.com/glFzRCv.png" alt="skills"></img><p>Skills</p></HashLink>
                <HashLink className='header_link hover_animate' smooth to={'/#projects'}><img src="https://i.imgur.com/aHKbJtv.png" alt="projects"></img><p>Projects</p></HashLink>
                {/* <HashLink className='header_link hover_animate' smooth to={'/#contact'}><img src="https://i.imgur.com/RFHj9bL.png" alt="contact"></img></HashLink> */}
            </ul>
    );
}

export default Header;