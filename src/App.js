import { useState } from "react";
import "./styles.css";

sportDictionary = {
  "⚽": "soccer",
  "⚾": "baseball",
  "🥎": "tennis",
  "🏀": "basketball",
  "🏐": "volleyball",
  "🏈": "football",
  "🎱": "pool",
  "🎳": "bowling",
  "⛸": "ice skating",
  "🏏": "cricket",
  "🏑": "hockey",
  "🏓": "ping pong",
  "🏸": "badminton",
  "🥊": "boxing"
};

export default function App() {
  var [sport, setSport] = useState("");

  var onDisplaySportSet = Object.keys(sportDictionary).slice(0, 5);

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = sportDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not Available On The Database";
    }
    setSport(meaning);
  }

  function onClickHandler(item) {
    var clickedItem = sportDictionary[item];
    setSport(clickedItem);
  }

  return (
    <div className="App">
      <h1>what a sport!</h1>
      <input onChange={onChangeHandler} />
      <h2>{sport}</h2>
      <div>
        {onDisplaySportSet.map(function (items) {
          return (
            <span
              onClick={() => onClickHandler(items)}
              key={items}
              style={{ fontSize: "2rem", padding: "0.5rem" }}
            >
              {items}
            </span>
          );
        })}
      </div>
    </div>
  );
}
