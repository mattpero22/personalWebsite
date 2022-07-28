import Home from '../pages/Home'
import Sidebar from './Sidebar'
import About from '../pages/About'
import Skills from '../pages/Skills'

const Main = () => {
    return (
        <div className='Main'>
            <Home> </Home>
            <div className="Portfolio">
                <Sidebar> </Sidebar>
                <div className="PortContent">
                    <About> </About>
                    <Skills> </Skills>  
                </div>
                <Sidebar> </Sidebar>
            </div>
        </div>
    );
}

export default Main;