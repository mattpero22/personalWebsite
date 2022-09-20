import { useState } from 'react';

const Projects = () => {
    return (
        <div className="Projects" id="projects">
            <div className="projects_content">
                <h2>Projects</h2>
                <div className="project_card">
                    <h3 className="project_title header_link">P3 Password Manager</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/pLnrklh.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link'>About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                <div className="project_card alt_align">
                    <h3 className="project_title header_link">Pokemon Auto Battler</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/WP1B1y5.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link' target="_blank">About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                <div className="project_card">
                    <h3 className="project_title header_link">General Store</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/sEEA3ab.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link'>About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                <div className="project_card alt_align">
                    <h3 className="project_title header_link">Pebble Prints</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/pPepyyz.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link'>About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;