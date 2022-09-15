const About = () => {
    return (
        <div className="About" id="about">
            <div className='about_content'>
                <div id="headshot">
                    <img src="https://i.imgur.com/PjKN4sJ.jpg" alt="headshot"></img>
                </div>
                <div id="bio">
                    <h2>Hi. I'm Matt Pero. </h2>
                    <h3>Mechanical Engineer turned Software Engineer.</h3>
                    <h3>Interested in:</h3>
                    <ul>
                        <div className="interest">
                            <img className="hover_animate" src="https://i.imgur.com/MR1WKNF.png" alt="stack icon"></img>
                            <h4>Full Stack Development</h4>
                        </div>
                        <div className="interest">
                            <img className="hover_animate" src="https://i.imgur.com/d79f0Ai.png" alt="data icon"></img>
                            <h4>Data Analysis and Visualization</h4>
                        </div>
                        <div className="interest">
                            <img className="hover_animate" src="https://i.imgur.com/mZR1Xh7.png" alt="robot icon"></img>
                            <h4>Control Systems</h4>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;