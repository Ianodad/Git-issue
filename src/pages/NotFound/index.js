import React from 'react'
import useWindowSize from "../../_helpers/useWindowSize"

import './NotFound.css'


function Index() {



     // This is the exact same logic that we previously had in our hook
    const {heightSize}= useWindowSize()
    const width = heightSize+"px"
    return (
        <div className="container">
        <div className="row align-items-center my-auto" style={{height:width}}>
            <div className="col-4 mx-auto">
                <div className="col-10">
                 <h1>404 NOT FOUND</h1>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Index
