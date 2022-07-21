import M from '../components/letters/M'
import A from '../components/letters/A'

const Home = () => {
    return (
        <>
            <div className="home-name" id="home-first">
                <M> </M>
                <A> </A>
                <div className="letter" id="T1">T</div>
                <div className="letter" id="T2">T</div>
            </div>
            <div className="home-name" id="home-last">
                <div className="letter" id="P">P</div>
                <div className="letter" id="E">E</div>
                <div className="letter" id="R">R</div>
                <div className="letter" id="O">O</div>
            </div>
        </>
    )

}

export default Home;