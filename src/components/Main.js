import React from 'react';
import Card from './Card';
import cardPic1 from '../images/project-2/card-pic-1.png';
import cardPic2 from '../images/project-2/card-pic-2.png';
import cardPic3 from '../images/project-2/card-pic-3.png';

export default function Main() {
  return (
    <main className="container flex">
      <Card src={cardPic1} rating="5.0" count="(6).USA" desc="Life lessons with Katie Zaferes" price="136" />
      <Card src={cardPic2} rating="5.0" count="(30).USA" desc="Learn wedding photography" price="125" />
      <Card src={cardPic3} rating="4.8" count="(2).USA" desc="Group Mountain Biking" price="50" />
    </main>
  );
}
