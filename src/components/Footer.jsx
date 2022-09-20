import { useState } from "react";

const Footer = () => {
    const gitWhite = "https://i.imgur.com/Vjr9ESf.png"
    const gitPurple = "https://i.imgur.com/m6JwhOE.png"
    const inWhite = "https://i.imgur.com/1teiCPo.png"
    const inPurple = "https://i.imgur.com/MN4xqQM.png"

    const [ gitLink, setGitLink ] = useState(gitWhite)
    const handleGitLink = () =>  setGitLink(gitPurple)
    const handleGitLinkOff = () => setGitLink(gitWhite)

    const [ inLink, setInLink ] = useState(inWhite)
    const handleInLink = () =>  setInLink(inPurple)
    const handleInLinkOff = () => setInLink(inWhite)

    return (
        <>
            <ul className="Socials">
                <a href="https://github.com/mattpero22">
                    <img 
                        onMouseOver={handleGitLink} 
                        onMouseOut={handleGitLinkOff} 
                        src={gitLink}
                        className='social_icon'
                        alt='github'>
                    </img>
                </a>
                <a href="https://www.linkedin.com/in/matthew-pero22/">
                    <img 
                        onMouseOver={handleInLink} 
                        onMouseOut={handleInLinkOff} 
                        src={inLink}
                        className='social_icon'
                        alt='github'>
                    </img>
                </a>
            </ul>
            <ul className="Footer">
                <li>© Matthew Pero 2022</li>
            </ul>
        </>
    );
}

export default Footer;