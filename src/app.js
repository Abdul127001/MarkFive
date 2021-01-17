import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "💌": "Love Letter",
  "💣": "Bomb",
  "🔪": "Kitchen Knife",
  "🧭": "Compass",
  "🧱": "Brick",
  "⌛": "Hourglass Done",
  "⏳": "Hourglass Not Done",
  "🎶": "Musical Notes",
  "🌡️": "Thermometer",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "🧵": "Thread",
  "💎": "Gem Stone",
  "☎️": "Telephone",
  "💻": "Laptop",
  "🖨️": "Printer"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [userInput, setUserInput] = useState(
    "Select Or Put An Emoji Know The meaning..."
  );
  function OnChangeHandler(event) {
    var userValue = event.target.value;
    var meaning = emojiDictionary[userValue];
    //console.log(event.target.value);
    if (meaning === undefined) {
      meaning = "We Don't Have In Our Database.";
    }
    setUserInput(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <input
        className="inputField"
        onChange={OnChangeHandler}
        placeholder="Put an emoji here to know the meaning..."
      />
      <h4>{userInput}</h4>

      <div className="emojiContainer">
        {emojiWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ cursor: "pointer", fontSize: "2rem" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
