import './Content.css';
import React, { useState, useEffect } from 'react';
import Item from './ContentItem.js';
import { Anchor } from './Common/constant';
export default function Content(props) {
  const [items, setItems] = useState('');
  useEffect(() => {
    const c = [];

    var data = require('./Mock/pets.json');
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      //  console.log("Name: " + obj.animal_id + ", " + obj.animal_place);
      c.push(<Item key={i} animal={obj} />);
    }
    setItems(c);
  }, []);

  return (
    <div className="content" id={Anchor.Pet}>
      <div className="autoBox">{items}</div>
    </div>
  );
}
