import React from 'react';
import Card from './Card';
import cardPic1 from '../images/project-2/card-pic-1.png';
import cardPic2 from '../images/project-2/card-pic-2.png';
import cardPic3 from '../images/project-2/card-pic-3.png';

export default function Main() {
  const cardList = [
    {
      id: 1,
      src: cardPic1,
      rating: '5.0',
      count: 6,
      country: 'USA',
      desc: 'Life lessons with Katie Zaferes',
      price: 136,
    },
    {
      id: 2,
      src: cardPic2,
      rating: '5.0',
      count: 30,
      country: 'USA',
      desc: 'Life lessons with Katie Zaferes',
      price: 125,
    },
    {
      id: 3,
      src: cardPic3,
      rating: '4.8',
      count: 2,
      country: 'USA',
      desc: 'Group Mountain Biking',
      price: 50,
    },
  ];

  const cards = cardList.map((card) => {
    return <Card item={card} />;
  });

  return <main className="container flex">{cards}</main>;
}
