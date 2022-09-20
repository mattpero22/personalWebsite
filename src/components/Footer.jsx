import { useState } from "react";

const Footer = () => {
    const gitWhite = "https://i.imgur.com/rL2jKXE.png"
    const gitPurple = "https://imgur.com/7IamkrW.png"

    const [ gitLink, setGitLink ] = useState(gitWhite)

    const handleGitLink = () =>  setGitLink(gitPurple)

    const handleGitLinkOff = () => setGitLink(gitWhite)

    return (
        <>
            <ul className="Socials">
                <li>
                    <img 
                        onMouseOver={handleGitLink} 
                        onMouseOut={handleGitLinkOff} 
                        src={gitLink}
                        className='social_icon'
                    >
                    </img>
                </li>
            </ul>
            <ul className="Footer">
                <li>© Matthew Pero 2022</li>
            </ul>
        </>
    );
}

export default Footer;