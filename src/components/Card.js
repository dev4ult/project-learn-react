import React from 'react';
import star from '../images/project-2/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-pic" src={props.item.src} alt="card pic" />
      <div className="card-body">
        <div className="card-stats flex">
          <img className="star-logo" src={star} alt="star logo" />
          <span className="card-rating">{props.item.rating}</span>
          <span className="card-count">
            ({props.item.count}) . {props.item.country}
          </span>
        </div>
        <p className="card-desc">{props.item.desc}</p>
        <p className="card-price">
          <span>From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
}
