import React from 'react'

function Card({title, count, style}) {
    return (
        <div className="card" style={{...style}}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{count}</p>
            </div>
        </div>
    )
}

export default Card
