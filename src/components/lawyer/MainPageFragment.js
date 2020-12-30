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
        <div className="light-gray-background">
            <div className="container-pad-hor">
                <div className="row p-0 m-0">
                    {cards.map((card) => <MainPageCard card={card} />)}
                </div>
            </div>
        </div>
    </>
);

export const MainPageCard = ({ card }) => (
    <button className="card-csm col-sm-12 col-md-4 col-lg-4">
        <div className="row-csm" style={{ alignItems: 'center' }}>
            <img className="small-icon mr-2" src={!!card.image.childImageSharp ? card.image.childImageSharp.fluid.src : card.image} />
            <div className="col-csm" style={{ alignItems: 'flex-start' }}>
                <div className="middle-font">{card.title}</div>
                <div className="small-font">{card.description}</div>
            </div>
        </div>
    </button>
);