import Sidebar from './Sidebar'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Main = () => {
    return (
        <div className='Main'>
            <Home> </Home>
            <div className="Portfolio">
                <Sidebar> </Sidebar>
                <div className="PortContent">
                    <About> </About>
                    <Skills> </Skills>
                    <Projects> </Projects>
                    <Contact> </Contact>
                </div>
                <Sidebar> </Sidebar>
            </div>
        </div>
    );
}

export default Main;