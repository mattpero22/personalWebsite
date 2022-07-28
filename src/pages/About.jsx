import Sidebar from '../components/Sidebar'

const About = () => {
    return (
        <div className="About" id="about">
            <Sidebar> </Sidebar>
            <div className='about_content'>
                <div id="headshot">
                    <img className="hover_animate" src="https://i.imgur.com/gLhrTYe.jpg"></img>
                </div>
                <div id="bio">
                    <h2>Hi. I'm Matt Pero. </h2>
                    <h3>Mechanical Engineer turned Software Engineer.</h3>
                    <h3>Interested in:.</h3>
                    <ul>
                        <div className="interest">
                            <img className="hover_animate" src="https://i.imgur.com/MR1WKNF.png"></img>
                            <h4>Full Stack Development</h4>
                        </div>
                        <div className="interest">
                            <img className="hover_animate" src="https://i.imgur.com/d79f0Ai.png"></img>
                            <h4>Data Analysis and Visualization</h4>
                        </div>
                        <div className="interest">
                            <img className="hover_animate" src="https://i.imgur.com/mZR1Xh7.png"></img>
                            <h4>Control Systems</h4>
                        </div>
                    </ul>
                </div>
            </div>
            <Sidebar> </Sidebar>
        </div>
    )
}

export default About;