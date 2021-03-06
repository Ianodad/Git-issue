import React from "react";
import {Link} from "react-router-dom"
function Card({ title, count, style, image, onSubmit }) {
  return (
    <div class="col-xl-3 col-sm-6 col-12">
      <div class="card m-0 m-2" onClick={onSubmit} style={style}>
        <div class="card-content">
          <div class="card-body p-1">
            <div class="media d-flex">
              <div class="align-self-center">
                {image && (
                  <img
                    src={image}
                    alt="Smiley face"
                    height="100"
                    width="100"
                  ></img>
                )}
                {!image && (
                  <i class="icon-speech warning font-large-2 float-left"></i>
                )}
              </div>
              {image && (
              <Link className="media-body text-right my-auto mr-2" to={`/main/${title}`}>
              {/* <div class="media-body text-right my-auto mr-2"> */}
                <h3>{title}</h3>
              {/* </div> */}
                </Link>
              )}
              {!image && (<div class="media-body text-right ml-2">
                <h3 style={{fontWeight:"900", color:"#443266"}}>{count}</h3>
                <span style={{color:""}}>{title}</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
