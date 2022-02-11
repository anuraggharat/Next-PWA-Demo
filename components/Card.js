import React from 'react'

function Card({src}) {
  return (
    <div className="col-lg-4 mt-4 col-sm-12" >
      <div className="card bg-dark text-white border-0">
        <img src={src} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export default Card