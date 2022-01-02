import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
        <p>/ {props.phonetic.text} /</p>
      </div>
    );
  } else {
    return null;
  }
}
