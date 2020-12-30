import React from 'react'

export default ({ experienceCards }) => (
    <div className="container-pad container-pad-ver">
        <div className="fragment-title">Experience & practices</div>
        <div className="row p-0 m-0">
            {experienceCards.slice(0, 6).map((card) => (
                <div className="col-sm-4 col-xs-12" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                    <div className="experience-card column">
                        <div>
                            <img className="middle-icon"
                                src={!!card.icon.childImageSharp ? card.icon.childImageSharp.fluid.src : card.icon} />
                        </div>
                        <div className="experience-card-title bold">{card.title}</div>
                        <div className="small-font">{card.description}</div>
                        <div>
                            <a href="/">
                                <img className="small-icon" src="/img/arrow.png" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="outlined-btn" style={{ padding: '10px 20px' }}>View All Practices</button>
        </div>
    </div>
);