import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./styles.css";

import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Adopt from "./Components/Adopt";
const rootElement = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>
    <div className="auto-web">
      <Header />
      <Banner /> {/*註解...*/}
      <Content/>
<Adopt/>
    
    </div>
  </React.StrictMode>,
  rootElement
);
