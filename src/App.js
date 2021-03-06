import "./styles.css";
import React, { useState } from "react";
var signsDictionary = {
  "๐ฎ": "Litter in Bin Sign",
  "๐ฐ": "Potable Water",
  "โฟ": "Wheelchair Symbol",
  "๐น": "Menโs Room",
  "๐บ": "Womenโs Room",
  "๐ป": "Restroom",
  "๐ผ": "Baby Symbol",
  "๐พ": "Water Closet",
  "โ ๏ธ": "Warning",
  "๐ธ": "Children Crossing",
  "โ": "No Entry",
  "๐ซ": "Prohibited",
  "๐ณ": "No Bicycles",
  "๐ญ": "No Smoking",
  "๐ฏ": "No Littering",
  "๐ฑ": "No Portable Water Nearby",
  "๐ต": "No Mobile Phones",
  "๐": "No One Under Eighteen",
  "โข": "Radioactive material area",
  "๐ง": "ATM Sign"
};

var dataBaseSigns = Object.keys(signsDictionary);

export default function App() {
  var [meaning, setUserInput] = useState(""); //use of usestate to display things on dom

  //function to identify the symbol been typed on the input box.
  function inputHandler(event) {
    console.log("input is typed");
    var inputsaved = event.target.value;
    var meaning = signsDictionary[inputsaved];
    if (meaning === undefined) {
      meaning = "we dont have this symbol in our database";
    }
    setUserInput(meaning);
  }

  // function to identify symbols when clicked.
  function symbolClickHandler(symbol) {
    var meaning = signsDictionary[symbol];
    setUserInput(meaning);
  }
  return (
    <div className="App">
      <h1>welcome</h1>
      <input onChange={inputHandler}></input>
      <div>
        <h3>{meaning}</h3>
      </div>
      <h3>Symbols We Know</h3>
      {dataBaseSigns.map(function (symbol) {
        return (
          <span
            onClick={() => symbolClickHandler(symbol)}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              padding: "3px",
              display: "inline"
            }}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  );
}
