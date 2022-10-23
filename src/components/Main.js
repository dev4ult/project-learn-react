import React from 'react';
import Section from './Section';

export default function Main() {
  const sectionList = [
    {
      country: 'japan',
      gmap_url: 'https://www.google.com/maps/d/u/0/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000001%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed',
      img_url: 'https://source.unsplash.com/WLxQvbMyfas',
      place_name: 'Mount Fuji',
      date: '12 Jan, 2021 - 24 Jan, 2021',
      desc: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    },
    {
      country: 'australia',
      gmap_url: 'https://www.google.com/maps/search/?api=1&query=Sydney%20Opera%20House&query_place_id=ChIJ3S-JXmauEmsRUcIaWtf4MzE',
      img_url: 'https://source.unsplash.com/JmuyB_LibRo',
      place_name: 'Sydney Opera House',
      date: '27 May, 2021 - 8 Jun, 2021',
      desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    },
    {
      country: 'norway',
      gmap_url: 'https://www.google.com/maps/d/u/0/viewer?hl=en_US&mid=1zi9bW9Zkl8ExIwx-ZNbeChUSK38&ll=62.09137699999997%2C7.061932999999994&z=17',
      img_url: 'https://source.unsplash.com/3PeSjpLVtLg',
      place_name: 'Geirangerfjord',
      date: '01 Oct, 2021 - 18 Nov, 2021',
      desc: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
    },
  ];

  const sections = sectionList.map((section) => <Section item={section} />);

  return <main className="container">{sections}</main>;
}
