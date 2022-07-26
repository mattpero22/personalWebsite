const Cave = () => {
    return (
        <div class="cave">
            <div id="roof">
                <div className="stone1">
                    <div className="tite1 small" id='t1-1'></div>
                    <div className="tite1 med" id='t1-2'></div>
                    <div className="tite1 large" id='t1-3'></div>
                    <div className="tite1 xl" id='t1-4'></div>
                    <div className="tite1 med" id='t1-5'></div>
                    <div className="tite1 med" id='t1-6'></div>
                </div>
                <div className="stone2">
                    <div className="tite2" id="t2-1"></div>
                </div>
            </div>
            <div id="floor">
                <div className="stone2"></div>
                <div className="stone1"></div>
            </div>

        </div>
    )
}

export default Cave;
