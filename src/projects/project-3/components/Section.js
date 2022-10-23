import React from 'react';
import MapPoint from '../images/point-map.svg';

export default function Section(props) {
  return (
    <section className="flex">
      <img className="scenery-img" src={props.item.img_url} alt="scenery" />
      <div>
        <div>
          <img className="map-point" src={MapPoint} alt="map point" />
          <span className="country-name">{props.item.country}</span>{' '}
          <a className="gmap-link" href={props.item.gmap_url}>
            View on Google Maps
          </a>
        </div>
        <h2 className="place-name">{props.item.place_name}</h2>
        <div>
          <h3 className="date">{props.item.date}</h3>
          <p>{props.item.desc}</p>
        </div>
      </div>
    </section>
  );
}
