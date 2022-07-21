const Home = () => {
    return (
        <>
            <div className="home-name" id="home-first">
                <div className="letter" id="M">
                    <div className="mtn" id="mtn1"></div>
                    <div className="mtn" id="mtn2"></div>
                </div>
                <div className="letter" id="A">
                    <div className="stake" id="stake1"></div>
                    <div className="tent" id="strings"></div>
                    <div className="tent" id="airgap"></div>
                    <div className="tent" id="outertent"></div>
                    <div className="tent tent_closed" id="innertent"></div>
                    <div className="stake" id="stake2"></div>
                </div>
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