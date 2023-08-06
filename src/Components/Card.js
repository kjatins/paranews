import React from 'react'

export default function Card(props) {
    let { title, description, imageUrl, newsUrl, date, source } = props;
    return (
        <>
            <a rel="noreferrer" className="link-card" href={newsUrl} target="_blank" >
                <div className="card-details">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-des">{description}</p>
                        <span className="source-name"><span>{source}</span> on  {new Date(date).toGMTString()}</span>
                    </div>
                <div className="cardimg">
                    <img src={imageUrl} className="card-img" alt=""/>
                    </div>
                </div>
            </a>
        </>
    )
}
