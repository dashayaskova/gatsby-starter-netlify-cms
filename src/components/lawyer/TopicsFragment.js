import React from 'react'

export default (props) => {
    const { topics } = props;

    return (
        <div className="container-pad-hor container-pad-ver">
            <div className="quote-block">
                <div className="quote middle-font">
                    <span className="red">&#10077;</span>
                        All the great things sre simple, and many can be expresses in a simple word: freedom, justice, honor, duty, mercy, hope. <br />
                    <span className="quote-author">Winston Churchill</span>
                </div>
            </div>

            <div className="row p-0 m-0">
                {topics.map((topic) => (
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <TopicCard href="#" topic={topic} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export const TopicCard = (props) => {
    const { topic, href } = props;

    return (
        <div>
            <img src={!!topic.image.childImageSharp ? topic.image.childImageSharp.fluid.src : topic.image} />
            <div className="mb-3 mt-3">
                <a href={href} className="bold">{topic.title}</a>
            </div>
            <div className="small-font">{topic.description}</div>
        </div>
    );
};