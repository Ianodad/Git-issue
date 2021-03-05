import React from 'react'

function Card({title, count, style}) {
    return (
        <div className="card mx-2 my-2" style={{...style}}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{count}</p>
            </div>
        </div>
    )
}

export default Card
