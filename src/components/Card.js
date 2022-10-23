import React from 'react';
import star from '../images/project-2/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-pic" src={props.src} alt="card pic" />
      <div className="card-body">
        <div className="card-stats flex">
          <img className="star-logo" src={star} alt="star logo" />
          <span className="card-rating">{props.rating}</span>
          <span className="card-count">{props.count}</span>
        </div>
        <p className="card-desc">{props.desc}</p>
        <p className="card-price">
          <span>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
