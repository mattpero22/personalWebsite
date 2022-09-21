const Projects = () => {
    return (
        <div className="Projects" id="projects">
            <div className="projects_content">
                <h2>Personal Projects</h2>
                <div className='project'>
                    <div className="project_card">
                        <h3 className="project_title header_link">P3 Password Manager</h3>
                        <a href="https://p3protector.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="project_thumbnail" src='https://i.imgur.com/pLnrklh.png' alt='p3 thumbnail'></img>
                        </a>
                        <div className="project_buttons">
                            <a className='project_button hover_animate header_link' href="https://github.com/mattpero22/pero_password_protector" target="_blank" rel="noreferrer">GitHub rel="noreferrer"</a>
                        </div>
                    </div>
                    <div className="project_desc">
                        <p> Password management software that encrypts and stores user password information securely. Features also include signup and login for users and optional two-factor authentication. </p>
                        <p> Built using Python3 and Django </p>
                    </div>
                </div>

                <div className='project'>
                    <div className="project_desc">
                        <p> Pokemon Auto Battler is a unique game that uses pokemon as the characters in a roguelike adventure. Start by selecting your first pokemon of three randomly generated ones. Following, you're pitted against the computer in an automated and randomized battle until a winner is decided. How many battles can you win? </p>
                        <p> Built using HTML5, CSS3, JavaScript, jQuery, and the PokeAPI </p>
                    </div>
                    <div className="project_card alt_align">
                        <h3 className="project_title header_link">Pokemon Auto Battler</h3>
                        <a href="https://mattpero22.github.io/pokemonAutoBattler/" target="_blank" rel="noreferrer">
                            <img className="project_thumbnail" src='https://i.imgur.com/WP1B1y5.png' alt='poke auto battle thumbnail'></img>
                        </a>
                        <div className="project_buttons">
                            <a className='project_button hover_animate header_link' href="https://github.com/mattpero22/pokemonAutoBattler" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project'>

                    
                    <div className="project_card">
                        <h3 className="project_title header_link">General Store</h3>
                        <a href="https://generalstoregs.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project_thumbnail" src='https://i.imgur.com/sEEA3ab.png' alt="general store thumbnail"></img>
                        </a>
                        <div className="project_buttons">
                            <a className='project_button hover_animate header_link'  href='https://github.com/mattpero22/project3-backend' target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                    <div className="project_desc">
                        <p> General Storefront of random goods which offers viewing access for customers and CRUD functionality to admin accounts. Worked collaboratively with 3 other software engineers using Slack and GitHub. Primary role was lead backend design and defining user state in React. </p>
                        <p> Built using MongoDB, Express, Node, and React </p>
                    </div>
                </div>

                <div className='project'>
                    <div className="project_desc">
                            <p> 3D print tracker software for hobbyist printers to keep track of their prints. Can be used to identify print settings and successes in order to improve print success rate in the future. Documents all prints in a single, retrievable site for easy reference.</p>
                            <p> Built using MongoDB, Express, Node, and EJS</p>
                    </div>
                    <div className="project_card alt_align">
                        <h3 className="project_title header_link">Pebble Prints</h3>
                        <a href="https://pebble-prints.herokuapp.com/home" target="_blank" rel="noreferrer">
                            <img className="project_thumbnail" src='https://i.imgur.com/pPepyyz.png' alt='pebble prints thumbnail'></img>
                        </a>
                        <div className="project_buttons">
                            <a className='project_button hover_animate header_link' href="https://github.com/mattpero22/3dPrintManager" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;