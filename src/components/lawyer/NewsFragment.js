import React from 'react'
import clsx from 'clsx'

export default ({ news, publications }) => (
    <div className="container-pad-hor container-pad-ver">
        <div className="row p-0 m-0">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className='small-title'>Latest News</div>
                <List elements={news} divider={true} classes={{ ident: 'ident'}} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-4 mt-sm-0">
                <div className='small-title'>Latest Publications</div>
                <List elements={publications} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-4 mt-sm-0">
                <div style={{ position: 'relative' }} className="small-font cursive gray-background p-3 mb-4">
                    <span className="red">&#10077;</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas efficitur nisi nec efficitur. Suspendisse gravida varius nisl, nec varius ipsum pellentesque eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vel lorem arcu.
                    <span className="triangle"></span>
                </div>
                <div className="red bold small-font ml-5">Branda Gorden</div>
                <div className="light-gray small-font ml-5">Chef technology officer</div>
            </div>
        </div>
    </div>
);

export const List = ({ elements, classes, divider }) => (
    <div>
        { elements.map((el, i) => (
                <div>
                    <div className={clsx(classes?.ident)}>
                        <div className="small-font light-gray">{el.date}</div>
                        <div className={clsx("bold", "small-font", classes?.innerTitle)}>
                            <a href="#">{el.title}</a></div>
                    </div>
                    { divider && i !== (elements.length - 1) && <hr />}
                </div>
        ))}
    </div>
);