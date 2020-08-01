import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./styles.css";

import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Adopt from "./Components/Adopt";
const rootElement = document.getElementById("root");

//js函式宣告或是變數宣告區
const pic = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/200/200?image=229"
        alt=""
        class="circle-profile"
      />
    </div>
  );
};
var i = 1;
const getValue = event => {
  console.log(event.target.value);
}; //輸入類的元件button/input/textarea互動事件觸發時，函式只會接收到一個event類別的參數，並不能傳遞其他參數

var arr = [<h1>REACT學習</h1>, <h2>如何使用JSX！</h2>];

function HelloWorld() {
  return <h1>Hello World!</h1>;
}
function HelloName(props) {
  return <h1>Hello {props.name}!</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <div className="auto-web">
      <Header />
      <Banner /> {/*註解...*/}
      <Content/>
<Adopt/>
      <h1 className="title"> Hello, world! </h1>
      <div> {pic()}</div>
      {/* <button value onClick={getValue}>按下以取得數值 </button>
    <button value={true} onClick={getValue}>按下以取得數值 </button> */}
      <div>{arr}</div>,
      <HelloWorld />
      <HelloName name="May" />
    </div>
  </React.StrictMode>,
  rootElement
);
