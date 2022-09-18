import { useState } from 'react';

const Projects = () => {
    return (
        <div className="Projects" id="projects">
            <div className="projects_content">
                <h2>Projects</h2>
                <div className="project_card">
                    <h3 className="project_title">Project 1 Title</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/WP1B1y5.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link' href="">About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                <div className="project_card alt_align">
                    <h3 className="project_title header_link">Pokemon Auto Battler</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/WP1B1y5.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link' href="" target="_blank">About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                <div className="project_card">
                    <h3 className="project_title">Project 1 Title</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/WP1B1y5.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link' href="">About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                <div className="project_card alt_align">
                    <h3 className="project_title">Project 1 Title</h3>
                    <img className="project_thumbnail" src='https://i.imgur.com/WP1B1y5.png'></img>
                    <div className="project_buttons">
                        <a className='project_button hover_animate header_link' href="">About</a>
                        <a className='project_button hover_animate header_link'>Github</a>
                        <a className='project_button hover_animate header_link'>Deployed</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;