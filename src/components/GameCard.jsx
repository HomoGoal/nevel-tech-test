const GameCard = ({item}) => {
    return (
        <div className="game-card">
            <img src={item.mainImg} className="game-card-main-img" alt="game card"/>
            <div className="game-card-content-wrap">
                <div className="game-card-content-inner">
                    <img src={item.subImg} alt="game"/>
                    <div className="game-card-content">
                        <p className="p11">{item.title}</p>
                        <p className="p12">{item.text}</p>
                    </div>
                </div>
                <button className="game-card-button p7">View</button>
                <div className="game-card-info">
                    <div>
                        <p>{item.votality}</p>
                        <p>Volatility</p>
                    </div>
                    <div>
                        <p>{item.rtp}</p>
                        <p>RTP</p>
                    </div>
                    <div>
                        <p>{item.max}</p>
                        <p>Maximum Win</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameCard;