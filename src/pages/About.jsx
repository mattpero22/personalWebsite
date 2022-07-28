import Sidebar from '../components/Sidebar'

const About = () => {
    return (
        <div className="About" id="about">
            <Sidebar> </Sidebar>
            <div className='about_content'>
                <div id="headshot">
                    <img src="https://i.imgur.com/gLhrTYe.jpg"></img>
                </div>
                <div id="bio">
                    <h2>Hi. I'm Matt Pero. </h2>
                </div>
            </div>
            <Sidebar> </Sidebar>
        </div>
    )
}

export default About;