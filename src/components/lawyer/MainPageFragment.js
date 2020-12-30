import React from 'react'

export default ({ cards, backgroundImage }) => (
    <>
        <div style={{
            backgroundImage: `url(
                    ${!!backgroundImage.childImageSharp ?
                    backgroundImage.childImageSharp.fluid.src :
                    backgroundImage})`
        }}
            className="background-image">
        </div>
        <div style={{ background: '#e7e7e7' }}>
            <div className="container-pad">
                <div className="row p-0 m-0">
                    {cards.map((card) => <MainPageCard key={card.title} card={card} />)}
                </div>
            </div>
        </div>
    </>
);

export const MainPageCard = ({ card }) => (
    <button className="card-csm col-sm-4">
        <div className="row-csm" style={{ alignItems: 'center' }}>
            <img className="small-icon" src={!!card.image.childImageSharp ? card.image.childImageSharp.fluid.src : card.image} />
            <div className="column" style={{ alignItems: 'flex-start' }}>
                <div className="middle-font">{card.title}</div>
                <div className="small-font">{card.description}</div>
            </div>
        </div>
    </button>
);