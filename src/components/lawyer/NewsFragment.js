import React from 'react'
import clsx from 'clsx'

export default ({ news, publications }) => (
    <div className="container-pad container-pad-ver">
        <div className="row p-0 m-0">
            <div className="col-sm-4">
                <div className='small-title'>Latest News</div>
                <List elements={news} divider={true} classes={{ ident: 'ident'}} />
            </div>
            <div  className="col-sm-4">
                <div className='small-title'>Latest Publications</div>
                <List elements={publications} />
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