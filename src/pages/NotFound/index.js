import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from "../../_helpers/useWindowSize"

import './NotFound.css'


function Index() {

    // const getSize=()=>{
    //    return {
    //     width: window.innerWidth,
    //     height: window.innerHeight}
    // }

    // const [windowSize, setWindowSize]= useState(getSize);

    // useEffect(() => {
    //     const handleResize = () => {
    //       setWindowSize(getSize());
    //     };
      
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);

     // This is the exact same logic that we previously had in our hook
    const {widthSize, heightSize}= useWindowSize()
    const width = heightSize+"px"
    return (
        // <div className="container" id="fourofour" style={{height: width}}>
        //     <div className="mx-auto my-auto" >

        //     
        //     </div>
        // </div>
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
