import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Skills = () => {

    const [tooltip, showTooltip] = useState(true);

    return (
        <div className="Skills" id="skills">
            <div className="skills_content">
                <h2>My Skills</h2>
                <h3>Languages</h3>
                    <div className="skill_icons">
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
                            alt="python" 
                            data-tip="Python"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/0DeXqd6.png" 
                            alt="html" 
                            data-tip="HTML"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/gyNinVG.png" 
                            alt="css" 
                            data-tip="CSS"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/w5Y6YND.png"  
                            alt="js" 
                            data-tip="JavaScript"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/YvPtI2n.png"  
                            alt="sql" 
                            data-tip="SQL"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/TK2fhAg.png" 
                            alt="matlab" 
                            data-tip="MATLAB"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/rK6cgqb.png" 
                            alt="c" 
                            data-tip="C"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/J9vqWty.png" 
                            alt="c++" 
                            data-tip="C++"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                    </div>
                <h3>Libraries and Frameworks</h3>
                    <div className="skill_icons">
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/ePTfjzt.png"
                            alt="react" 
                            data-tip="React"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/Ke6koPJ.png"
                            alt="node.js" 
                            data-tip="Node"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/BX4UdjY.png"
                            alt="express" 
                            data-tip="Express"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/5xk8xhR.png"
                            alt="mongodb" 
                            data-tip="MongoDB"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/gQMAhsd.png"
                            alt="jquery" 
                            data-tip="jQuery"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon contrast" 
                            src="https://pandas.pydata.org/static/img/pandas_secondary.svg"
                            alt="pandas" 
                            data-tip="pandas"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/JyDaA3s.png" 
                            alt="openpyxl" 
                            data-tip="Openpyxl"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/RWlPK3i.png"
                            alt="matplotlib" 
                            data-tip="Matplotlib"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon contrast" 
                            src="https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png"
                            alt="numpy" 
                            data-tip="NumPy"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                        <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://scipy.org/images/logo.svg"
                            alt="scipy" 
                            data-tip="SciPy"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                    </div>
                <h3>Software</h3>
                    <div className="skill_icons">
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                            <img 
                            className="skill_icon" 
                            src="https://i.imgur.com/04j7fLZ.png"
                            alt="command line"
                            data-tip="Command Line"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 0);
                                }}
                            />
                        </>
                    </div>

            </div>
        </div>
    )
}

export default Skills;