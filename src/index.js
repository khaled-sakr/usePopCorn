import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StartRating from "./StartRating";
import "./index.css";
import App from "./App-v2";
// function Test() {
//   const [movieRated, setMovieRated] = useState(0);

//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSetRating={setMovieRated} />
//       <p> This movies was reated {movieRated} starts</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StartRating size={24} color="red" calssName="test" defaultInit={3} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
