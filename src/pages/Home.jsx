import M from '../components/letters/M'
import A from '../components/letters/A'
import T from '../components/letters/T'

const Home = () => {
    return (
        <>
            <div className="home-name" id="home-first">
                <M> </M>
                <A> </A>
                <T> </T>
                <T> </T>
            </div>
            <div className="ground">
                <div className="ground" id="grass1"></div>
                <div className="ground" id="grass2"></div>
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