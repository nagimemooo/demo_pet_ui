//import React from "react";
import React,{useState} from 'react';
import "./styles.css";
import ProgressDIY from "./Components/ProgressDIY";
// export default function App() {
 

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>
//     </div>
//   );
  const App=()=>{
    const [value,setValue]=useState(10);
    return(
      <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>
    );
}
export default App;
//}
