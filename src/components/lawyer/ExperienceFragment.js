import React from 'react'

export default ({ experienceCards }) => (
    <div className="container-pad-hor container-pad-ver">
        <div className="fragment-title">Experience & practices</div>
        <div className="row p-0 m-0">
            {experienceCards.slice(0, 6).map((card) => (
                <div className="col-sm-12 col-md-6 col-lg-4 pb-3 pt-3">
                    <div className="experience-card col-csm">
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

        <div className="mt-4" style={{ textAlign: 'center' }}>
            <button className="outlined-btn pt-2 pb-2 pl-4 pr-4">View All Practices →</button>
        </div>
    </div>
);