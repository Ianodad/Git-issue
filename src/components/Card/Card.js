import React from "react";
import {Link} from "react-router-dom"
function Card({ title, count, style, image, onSubmit }) {
  return (
    <div className="col-xl-3 col-sm-6 col-12">
      <div className="card m-0 m-2" onClick={onSubmit} style={style}>
        <div className="card-content">
          <div className="card-body p-1">
            <div className="media d-flex">
              <div className="align-self-center">
                {image && (
                  <img
                    src={image}
                    alt="Smiley face"
                    height="100"
                    width="100"
                  ></img>
                )}
                {!image && (
                  <i className="icon-speech warning font-large-2 float-left"></i>
                )}
              </div>
              {image && (
              <Link className="media-body text-right my-auto mr-2" to={`/main/${title}`} onClick={onSubmit}>
              {/* <div class="media-body text-right my-auto mr-2"> */}
                <h3 data-testid="card-title">{title}</h3>
              {/* </div> */}
                </Link>
              )}
              {!image && (<div className="media-body text-right ml-2">
                <h3 style={{fontWeight:"900", color:"#443266"}}>{count}</h3>
                <span data-testid="card-title" style={{color:""}}>{title}</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
