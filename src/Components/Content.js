import "./Content.css";
import React, { useState, useEffect } from "react";
import Item from "./ContentItem.js";
export default function Content(props) {
  const [items, setChildren] = useState("");
  useEffect(() => {
    const c = [];

    var data = require("./Mock/pets.json");
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
    //  console.log("Name: " + obj.animal_id + ", " + obj.animal_place);
      c.push(
        <Item
          key={i}
          Id={obj.animal_id}
          Loc={obj.animal_place}
          Age={obj.animal_age}
          Sex={obj.animal_sex}
          Img={obj.album_file}
        />
      );
    }
    setChildren(c);
  }, []);

  return <div className="content">{items}</div>;
}
