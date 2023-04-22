import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
  <div className="my-5">
    <h1 className="text-center">{props.name}</h1>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={props.imgsrc} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <NavLink to=""className="btn btn-outline-danger">More Details</NavLink>
  </div>
</div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={props.imgsrc1} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <NavLink className="btn btn-outline-danger">More Details</NavLink>
  </div>
</div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={props.imgsrc2} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <NavLink className="btn btn-outline-danger">More Details</NavLink>
  </div>
</div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={props.imgsrc3} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <NavLink className="btn btn-outline-danger">More Details</NavLink>
  </div>
</div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={props.imgsrc4} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <NavLink className="btn btn-outline-danger">More Details</NavLink>
  </div>
</div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={props.imgsrc5} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <NavLink className="btn btn-outline-danger">More Details</NavLink>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </div>
  );
};

export default Common;
