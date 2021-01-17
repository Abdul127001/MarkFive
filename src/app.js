import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😭": "Loudly Crying Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😒": "Unamused Face",
  "😏": "Smirking Face",
  "🎶": "Musical Notes",
  "😉": "Winking Face",
  "☺️": "Smiling Face",
  "🙈": "See-No-Evil Monkey",
  "✌️": "Victory Hand",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "💖": "Sparkling Heart",
  "👍": "Thumbs Up",
  "😩": "Weary Face",
  "🙏": "Folded Hands",
  "😎": "Smiling Face with Sunglasses",
  "😁": "Beaming Face with Smiling Eyes"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [userInput, setUserInput] = useState("");
  function OnChangeHandler(event) {
    var userValue = event.target.value;
    var meaning = emojiDictionary[userValue];
    //console.log(event.target.value);
    setUserInput(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1>Find Emoji Meanings</h1>
      <input onChange={OnChangeHandler} />
      <h4>{userInput}</h4>
      <h3>Emoji In Our Database</h3>

      {emojiWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "1.5rem", padding: "1rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
