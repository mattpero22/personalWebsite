import Ground from '../components/environment/Ground'
import Cave from '../components/environment/Cave'

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
            <Ground> </Ground>
            <Cave> </Cave>
        </>
    )

}

export default Home;